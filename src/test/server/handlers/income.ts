import dayjs from 'dayjs';
import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { db, persistDb } from '../db';
import { requireAuth, requireAdmin, delayedResponse } from '../utils';

import { DataFromApi } from '@/components/common/Table';
import { MOCK_API_URL } from '@/config';
import { IncomeBody } from '@/modules/incomes';

export const incomeHandlers = [
  rest.get(`${MOCK_API_URL}/income`, (req, res, ctx) => {
    const take = req.url.searchParams.get('take');
    const skip = req.url.searchParams.get('skip');

    const paramsObject = {
      ...(take ? { take: Number(take) } : null),
      ...(skip ? { skip: Number(skip) } : null),
      orderBy: {
        orderTimestamp: 'desc',
      },
    };

    try {
      requireAuth(req);
      const incomes = db.income.findMany(paramsObject as any);
      const count = db.income.count();
      const result = {
        data: incomes,
        totalItems: count,
      } as DataFromApi;

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.get(`${MOCK_API_URL}/income/:incomeId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const { incomeId } = req.params;

      const result = db.income.findFirst({
        where: {
          id: {
            equals: incomeId as string,
          },
        },
      });

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.post<IncomeBody>(`${MOCK_API_URL}/income`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);
      const data = req.body;

      const result = db.income.create({
        id: nanoid(),
        createdAt: dayjs().toISOString(),
        ...data,
      });

      persistDb('income');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.patch<IncomeBody>(`${MOCK_API_URL}/income/:incomeId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const data = req.body;
      const { incomeId } = req.params;

      const result = db.income.update({
        where: {
          id: {
            equals: incomeId as string,
          },
        },
        data,
      });

      persistDb('income');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.delete(`${MOCK_API_URL}/income/:incomeId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const { incomeId } = req.params;

      const result = db.income.delete({
        where: {
          id: incomeId as any,
        },
      });

      persistDb('income');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),
];

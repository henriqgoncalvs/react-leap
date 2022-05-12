import dayjs from 'dayjs';
import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { DataFromApi } from '@/components/common/Table';
import { MOCK_API_URL } from '@/config';
import { ExpenseBody } from '@/modules/expenses';

import { db, persistDb } from '../db';
import { requireAuth, requireAdmin, delayedResponse } from '../utils';

export const expenseHandlers = [
  rest.get(`${MOCK_API_URL}/expense`, (req, res, ctx) => {
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
      const expenses = db.expense.findMany(paramsObject as any);
      const count = db.expense.count();
      const result = {
        data: expenses,
        totalItems: count,
      } as DataFromApi;

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.get(`${MOCK_API_URL}/expense/:expenseId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const { expenseId } = req.params;

      const result = db.expense.findFirst({
        where: {
          id: {
            equals: expenseId as string,
          },
        },
      });

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.post<ExpenseBody>(`${MOCK_API_URL}/expense`, (req, res, ctx) => {
    try {
      requireAuth(req);
      const data = req.body;

      const result = db.expense.create({
        id: nanoid(),
        createdAt: dayjs().toISOString(),
        ...data,
      });

      persistDb('expense');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.patch<ExpenseBody>(`${MOCK_API_URL}/expense/:expenseId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const data = req.body;
      const { expenseId } = req.params;

      const result = db.expense.update({
        where: {
          id: {
            equals: expenseId as string,
          },
        },
        data,
      });

      persistDb('expense');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.delete(`${MOCK_API_URL}/expense/:expenseId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const { expenseId } = req.params;

      const result = db.expense.delete({
        where: {
          id: expenseId as any,
        },
      });

      persistDb('expense');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),
];

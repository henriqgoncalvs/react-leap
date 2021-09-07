import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { db, persistDb } from '../db';
import { requireAuth, requireAdmin, delayedResponse } from '../utils';

import { MOCK_API_URL } from '@/config';
import { AgencyBody } from '@/modules/agencies';

export const agencyHandlers = [
  rest.get(`${MOCK_API_URL}/agency`, (req, res, ctx) => {
    try {
      requireAuth(req);
      const result = db.agency.findMany({});

      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.get(`${MOCK_API_URL}/country/:agencyId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const { agencyId } = req.params;

      const result = db.agency.findFirst({
        where: {
          id: {
            equals: agencyId,
          },
        },
      });

      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.post<AgencyBody>(`${MOCK_API_URL}/agency`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);
      const data = req.body;

      const result = db.agency.create({
        id: nanoid(),
        createdAt: Date.now(),
        ...data,
      });

      persistDb('agency');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.patch<AgencyBody>(`${MOCK_API_URL}/agency/:agencyId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const data = req.body;
      const { agencyId } = req.params;

      const result = db.agency.update({
        where: {
          id: {
            equals: agencyId,
          },
        },
        data,
      });

      persistDb('agency');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.delete(`${MOCK_API_URL}/agency/:agencyId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const { agencyId } = req.params;

      const result = db.agency.delete({
        where: {
          id: agencyId,
        },
      });

      persistDb('agency');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),
];

import { rest } from 'msw';

import { db, persistDb } from '../db';
import { requireAuth, requireAdmin, delayedResponse } from '../utils';

import { MOCK_API_URL } from '@/config';
import { UpdateCredentials } from '@/modules/auth';

export const usersHandlers = [
  rest.get(`${MOCK_API_URL}/users`, (req, res, ctx) => {
    try {
      requireAuth(req);
      const result = db.user.findMany({});

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.patch<UpdateCredentials>(`${MOCK_API_URL}/users/profile`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      const data = req.body;
      const result = db.user.update({
        where: {
          id: {
            equals: user.id,
          },
        },
        data,
      });
      persistDb('user');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.delete(`${MOCK_API_URL}/users/:userId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      const { userId } = req.params;
      requireAdmin(user);
      const result = db.user.delete({
        where: {
          id: {
            equals: userId,
          },
        },
      });
      persistDb('user');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),
];

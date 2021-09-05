import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { db, persistDb } from '../db';
import { requireAuth, delayedResponse } from '../utils';

import { MOCK_API_URL } from '@/config';
import { UserCountryBody } from '@/modules/userCountry';

export const userCountryHandlers = [
  rest.get(`${MOCK_API_URL}/:userId/country`, (req, res, ctx) => {
    try {
      requireAuth(req);
      const result = db.userCountry.findMany({});

      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.get(`${MOCK_API_URL}/:userId/country/:userCountryId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const { userCountryId } = req.params;

      const result = db.userCountry.findMany({
        where: {
          id: {
            equals: userCountryId,
          },
        },
      });

      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.post<UserCountryBody>(`${MOCK_API_URL}/:userId/country`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);

      const data = req.body;

      const result = db.userCountry.create({
        id: nanoid(),
        userId: user.id,
        createdAt: Date.now(),
        ...data,
      });

      persistDb('userCountry');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.patch<UserCountryBody>(`${MOCK_API_URL}/:userId/country/:userCountryId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const data = req.body;
      const { userCountryId } = req.params;

      const result = db.userCountry.update({
        where: {
          id: {
            equals: userCountryId,
          },
        },
        data,
      });

      persistDb('userCountry');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.delete(`${MOCK_API_URL}/:userId/country/:userCountryId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const { userCountryId } = req.params;

      const result = db.userCountry.delete({
        where: {
          id: {
            equals: userCountryId,
          },
        },
      });

      persistDb('userCountry');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),
];

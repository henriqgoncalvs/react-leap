import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { db, persistDb } from '../db';
import { requireAuth, requireAdmin, delayedResponse } from '../utils';

import { MOCK_API_URL } from '@/config';
import { CountryBody } from '@/modules/countries';

export const countryHandlers = [
  rest.get(`${MOCK_API_URL}/country`, (req, res, ctx) => {
    try {
      requireAuth(req);
      const result = db.country.findMany({});

      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.get(`${MOCK_API_URL}/country/:countryId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const { countryId } = req.params;

      const result = db.country.findFirst({
        where: {
          id: {
            equals: countryId,
          },
        },
      });

      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.post<CountryBody>(`${MOCK_API_URL}/country`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);
      const data = req.body;

      const result = db.country.create({
        id: nanoid(),
        createdAt: Date.now(),
        ...data,
      });

      persistDb('country');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.patch<CountryBody>(`${MOCK_API_URL}/country/:countryId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const data = req.body;
      const { countryId } = req.params;

      const result = db.country.update({
        where: {
          id: {
            equals: countryId,
          },
        },
        data,
      });

      persistDb('country');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.delete(`${MOCK_API_URL}/country/:countryId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      requireAdmin(user);

      const { countryId } = req.params;

      const result = db.country.delete({
        where: {
          id: countryId,
        },
      });

      persistDb('country');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),
];

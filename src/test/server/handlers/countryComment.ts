import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { db, persistDb } from '../db';
import { requireAuth, delayedResponse } from '../utils';

import { MOCK_API_URL } from '@/config';
import { CountryCommentBody } from '@/modules/countryComments';

export const countryCommentHandlers = [
  rest.get(`${MOCK_API_URL}/country/:countryId/comments`, (req, res, ctx) => {
    try {
      requireAuth(req);
      const result = db.countryComment.findMany({});

      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.post<CountryCommentBody>(`${MOCK_API_URL}/country/:countryId/comments`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);

      const { countryId } = req.params;
      const data = req.body;

      const result = db.countryComment.create({
        id: nanoid(),
        countryId,
        authorId: user.id,
        createdAt: Date.now(),
        ...data,
      });

      persistDb('countryComment');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.patch<CountryCommentBody>(
    `${MOCK_API_URL}/country/:countryId/comments/:countryCommentId`,
    (req, res, ctx) => {
      try {
        requireAuth(req);

        const { countryCommentId } = req.params;
        const data = req.body;

        const result = db.countryComment.update({
          where: {
            id: countryCommentId,
          },
          data,
        });

        persistDb('countryComment');
        return delayedResponse(ctx.json(result));
      } catch (error) {
        return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
      }
    },
  ),

  rest.delete(`${MOCK_API_URL}/country/:countryId/comments/:countryCommentId`, (req, res, ctx) => {
    try {
      requireAuth(req);

      const { countryCommentId } = req.params;

      const result = db.countryComment.delete({
        where: {
          id: countryCommentId,
        },
      });

      persistDb('countryComment');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),
];

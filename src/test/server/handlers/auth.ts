import dayjs from 'dayjs';
import _ from 'lodash';
import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { db, persistDb } from '../db';
import { authenticate, delayedResponse, hash, requireAuth } from '../utils';

import { MOCK_API_URL } from '@/config';
import { LoginCredentials, RegisterCredentials } from '@/modules/auth';

export const authHandlers = [
  rest.post<RegisterCredentials>(`${MOCK_API_URL}/auth/register`, (req, res, ctx) => {
    try {
      const role = req.body.role;
      const password = req.body.password;
      const confirmPassword = req.body.confirmPassword;
      const userObject = _.omit(req.body, ['role', 'password', 'confirmPassword']);

      if (password !== confirmPassword) {
        throw new Error(`Passwords don't match`);
      }

      const existingUser = db.user.findFirst({
        where: {
          email: {
            equals: userObject.email,
          },
        },
      });

      if (existingUser) {
        throw new Error('The user already exists');
      }

      db.user.create({
        ...userObject,
        id: nanoid(),
        createdAt: dayjs().toISOString(),
        role: role === 'ADMIN' || role === 'USER' ? role : 'USER',
        password: hash(password),
      });

      persistDb('user');

      const result = authenticate({ email: userObject.email, password: password });

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.post<LoginCredentials>(`${MOCK_API_URL}/auth/login`, (req, res, ctx) => {
    try {
      const credentials = req.body;
      const result = authenticate(credentials);
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error.message }));
    }
  }),

  rest.get(`${MOCK_API_URL}/auth/me`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);

      return delayedResponse(ctx.status(200), ctx.json(user));
    } catch (error: any) {
      return delayedResponse(ctx.status(401), ctx.json({ message: error.message }));
    }
  }),
];

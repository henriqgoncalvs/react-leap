import jwt from 'jsonwebtoken';
import omit from 'lodash/omit';
import { RestRequest, createResponseComposition, context } from 'msw';

import { db } from './db';

import { JWT_ACCESS_SECRET } from '@/config';

const isTesting = process.env.NODE_ENV === 'test' || ((window as any).Cypress as any);

export const delayedResponse = createResponseComposition(undefined, [
  context.delay(isTesting ? 0 : 1000),
]);

export const hash = (str: string) => {
  let hash = 5381,
    i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return String(hash >>> 0);
};

export const sanitizeUser = (user: any) => omit(user, ['password', 'iat']);

export function authenticate({ email, password }: { email: string; password: string }) {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user?.password === hash(password)) {
    const sanitizedUser = sanitizeUser(user);

    const encodedAccess = jwt.sign(sanitizedUser, JWT_ACCESS_SECRET);

    return { user: sanitizedUser, accessToken: encodedAccess };
  }

  const error = new Error('Invalid username or password');
  throw error;
}

export function requireAuth(request: RestRequest) {
  try {
    const encodedToken = request.headers.get('Authorization');
    const token = encodedToken?.split(' ')[1];

    if (!token) {
      throw new Error('No authorization token provided!');
    }

    const decodedAccessToken = jwt.verify(token, JWT_ACCESS_SECRET) as { id: string };

    const user = db.user.findFirst({
      where: {
        id: {
          equals: decodedAccessToken.id,
        },
      },
    });

    if (!user) {
      throw Error('Unauthorized');
    }

    return sanitizeUser(user);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export function requireAdmin(user: any) {
  if (user.role !== 'ADMIN') {
    throw Error('Unauthorized');
  }
}

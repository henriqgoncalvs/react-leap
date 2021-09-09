import { primaryKey } from '@mswjs/data';

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    bio: String,
    monthIncome: Number,
    createdAt: String,
  },
  income: {
    id: primaryKey(String),
    value: Number,
    description: String,
    date: String,
    source: String,
    createdAt: String,
  },
  expense: {
    id: primaryKey(String),
    value: Number,
    description: String,
    date: String,
    createdAt: String,
  },
};

export { models };

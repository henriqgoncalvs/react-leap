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
    createdAt: Number,
  },
  country: {
    id: primaryKey(String),
    name: String,
    description: String,
    createdAt: Number,
  },
  countryComment: {
    id: primaryKey(String),
    countryId: String,
    authorId: String,
    message: String,
    createdAt: Number,
  },
  agency: {
    id: primaryKey(String),
    name: String,
    owner: String,
    bio: String,
    phone: String,
    email: String,
    createdAt: Number,
  },
  userCountry: {
    id: primaryKey(String),
    userId: String,
    agencyId: String,
    countryId: String,
    arriveDate: String,
    leaveDate: String,
    amountSpent: Number,
    createdAt: Number,
  },
};

export { models };

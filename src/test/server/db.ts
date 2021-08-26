import { factory, primaryKey } from '@mswjs/data';

import { MSW_DB } from '@/config';

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    teamId: String,
    role: String,
    bio: String,
    createdAt: Number,
  },
  team: {
    id: primaryKey(String),
    name: String,
    description: String,
    createdAt: Number,
  },
  discussion: {
    id: primaryKey(String),
    title: String,
    body: String,
    teamId: String,
    createdAt: Number,
  },
  comment: {
    id: primaryKey(String),
    body: String,
    authorId: String,
    discussionId: String,
    createdAt: Number,
  },
};

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () => Object.assign(JSON.parse(window.localStorage.getItem(MSW_DB) || '{}'));

export const persistDb = (model: Model) => {
  if (process.env.NODE_ENV === 'test') return;
  const data = loadDb();
  data[model] = db[model].getAll();
  window.localStorage.setItem(MSW_DB, JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntries = database[key];
    if (dataEntries) {
      dataEntries?.forEach((entry: Record<string, any>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();

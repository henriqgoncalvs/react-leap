import { factory } from '@mswjs/data';

import { MSW_DB } from '@/config';

import { models } from './models';

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () => Object.assign(JSON.parse(window.localStorage.getItem(MSW_DB) || '{}'));

export const persistDb = (model: Model) => {
  if (process.env.NODE_ENV === 'test') return;
  const data = loadDb();
  data[model] = (db[model] as any).getAll();
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

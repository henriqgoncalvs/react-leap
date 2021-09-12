import * as faker from 'faker';

type Overrides = Record<string, any>;

export const userGenerator = (overrides?: Overrides) => ({
  id: faker.datatype.uuid(),
  firstName: faker.internet.userName(),
  lastName: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'ADMIN',
  bio: faker.lorem.sentence(),
  createdAt: Date.now(),
  ...overrides,
});

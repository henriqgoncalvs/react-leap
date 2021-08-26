export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type RoleTypes = keyof typeof ROLES;

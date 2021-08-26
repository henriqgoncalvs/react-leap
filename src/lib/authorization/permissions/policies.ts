// import { Comment } from '@/modules/comments';
// import { User } from '@/modules/users';

import { BaseEntity } from '@/types';

export type Comment = {
  id: string;
  body: string;
  authorId: string;
  discussionId: string;
} & BaseEntity;

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'ADMIN' | 'USER';
  teamId: string;
  bio: string;
} & BaseEntity;

export const POLICIES = {
  'comment:delete': ({ user, comment }: { user: User; comment: Comment }) => {
    if (user.role === 'ADMIN') {
      return true;
    }

    if (user.role === 'USER' && comment.authorId === user.id) {
      return true;
    }

    return false;
  },
};

export type PoliciesTypes = keyof typeof POLICIES;

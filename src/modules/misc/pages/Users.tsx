import { Text } from '@chakra-ui/react';
import { Navigate } from 'react-router';

import { Page } from '@/components/Page';
import { useAuth } from '@/lib/authentication';
import { Authorization, ROLES } from '@/lib/authorization';

export const Users = () => {
  const { user } = useAuth();

  return (
    <Authorization allowedRoles={[ROLES.ADMIN]} forbiddenFallback={<Navigate to=".." />}>
      <Page title="Users">
        <Text>
          Welcome <b>{`${user?.firstName} ${user?.lastName}`}</b>
        </Text>

        <Text>You only see this page because you&apos;re an admin</Text>
      </Page>
    </Authorization>
  );
};

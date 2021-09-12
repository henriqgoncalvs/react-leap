import { Text } from '@chakra-ui/react';

import { Page } from '@/components/Page';
import { useAuth } from '@/lib/authentication';
import { Authorization, ROLES } from '@/lib/authorization';

export const Users = () => {
  const { user } = useAuth();

  return (
    <Page title="Users">
      <Text>
        Welcome <b>{`${user?.firstName} ${user?.lastName}`}</b>
      </Text>

      <Authorization
        allowedRoles={[ROLES.ADMIN]}
        forbiddenFallback={<Text>You can&apos;t see the hidden info</Text>}
      >
        <Text>You only see this page because you&apos;re an admin</Text>
      </Authorization>
    </Page>
  );
};

import { Box, Button, Text, Wrap, WrapItem } from '@chakra-ui/react';

import { Link } from '@/components/common/Link';
import { Page } from '@/components/Page';
import { useAuth } from '@/lib/authentication';
import { Authorization, ROLES } from '@/lib/authorization';

export const About = () => {
  const { user } = useAuth();
  return (
    <Page title="About">
      <Box minH="200vh">
        <Text as="h3">
          Welcome <b>{`${user?.firstName} ${user?.lastName}`}</b>
        </Text>
        <Text as="h4">
          Your role is : <b>{user?.role}</b>
        </Text>
        <Text>In this application you can:</Text>

        <Box my="12">
          <Wrap direction="column" spacing="6">
            <WrapItem>
              Create incomes at <br />
              <Button ml="5" as={Link} to="../incomes">
                Incomes
              </Button>
            </WrapItem>
            <WrapItem>
              Create expenses at
              <br />
              <Button ml="5" as={Link} to="../expenses">
                Expenses
              </Button>
            </WrapItem>
            <WrapItem>
              See reports about your incomes and expenses at
              <br />
              <Button ml="5" as={Link} to="..">
                Dashboard
              </Button>
            </WrapItem>
            <Authorization allowedRoles={[ROLES.ADMIN]}>
              <WrapItem>
                Manage users at
                <br />
                <Button ml="5" as={Link} to="../users">
                  Users
                </Button>
              </WrapItem>
            </Authorization>
          </Wrap>
        </Box>
      </Box>
    </Page>
  );
};

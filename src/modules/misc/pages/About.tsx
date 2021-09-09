import { Box, Button } from '@chakra-ui/react';

import { Link } from '@/components/common/Link';
import { Page } from '@/components/Page';
import { useAuth } from '@/lib/authentication';
import { ROLES } from '@/lib/authorization/permissions/roles';

export const About = () => {
  const { user } = useAuth();
  return (
    <Page title="About">
      <Box minH="200vh">
        <h1 className="text-xl mt-2">
          Welcome <b>{`${user?.firstName} ${user?.lastName}`}</b>
        </h1>
        <h4 className="my-3">
          Your role is : <b>{user?.role}</b>
        </h4>
        <p className="font-medium">In this application you can:</p>
        {user?.role === ROLES.USER && (
          <ul className="my-4 list-inside list-disc">
            <li>
              Create incomes at <br />
              <Button as={Link} to="../incomes">
                Incomes
              </Button>
            </li>
            <li>
              Create expenses at
              <br />
              <Button as={Link} to="../expenses">
                Expenses
              </Button>
            </li>
            <li>
              See reports about your incomes and expenses at
              <br />
              <Button as={Link} to="../">
                Dashboard
              </Button>
            </li>
          </ul>
        )}
        {user?.role === ROLES.ADMIN && (
          <ul className="my-4 list-inside list-disc">
            <li>
              Create incomes at <br />
              <Button as={Link} to="../incomes">
                Incomes
              </Button>
            </li>
            <li>
              Create expenses at
              <br />
              <Button as={Link} to="../expenses">
                Expenses
              </Button>
            </li>
            <li>
              See reports about your incomes and expenses at
              <br />
              <Button as={Link} to="../">
                Dashboard
              </Button>
            </li>
            <li>
              Manage users at
              <br />
              <Button as={Link} to="../users">
                Users
              </Button>
            </li>
          </ul>
        )}
      </Box>
    </Page>
  );
};

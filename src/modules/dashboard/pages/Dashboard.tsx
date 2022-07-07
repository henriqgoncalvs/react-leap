import { ExpensesChart } from '../components/ExpensesChart';
import { IncomesChart } from '../components/IncomesChart';

import * as LC from '@/components/LC';
import { Page } from '@/components/Page';

export const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <LC.Horizontal spaceBetween>
        <IncomesChart />
        <ExpensesChart />
      </LC.Horizontal>
    </Page>
  );
};

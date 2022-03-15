import * as LC from '@/components/LC';
import { Page } from '@/components/Page';

import { ExpensesChart } from '../components/ExpensesChart';
import { IncomesChart } from '../components/IncomesChart';

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

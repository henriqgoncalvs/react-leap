import { IncomesChart } from '../components/IncomesChart';

import * as LC from '@/components/LC';
import { Page } from '@/components/Page';

export const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <LC.Horizontal>
        <IncomesChart />
      </LC.Horizontal>
    </Page>
  );
};

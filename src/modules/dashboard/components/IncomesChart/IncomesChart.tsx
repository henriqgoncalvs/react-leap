import _ from 'lodash';
import { useMemo } from 'react';

import { BarChart } from '@/components/Charts';
import { useIncomes, parseIncomeSourceLabel, Sources } from '@/modules/incomes';

export const IncomesChart = () => {
  const incomesQuery = useIncomes({});

  const incomesChartData = useMemo(
    () =>
      _.chain(incomesQuery?.data)
        .groupBy('source')
        .map((value, key) => ({
          label: parseIncomeSourceLabel(key as Sources),
          value: _.reduce(value, (acc, income) => Number(income.value) + acc, 0),
        }))
        .value(),
    [incomesQuery.data],
  );

  return (
    <>
      <BarChart
        label="Incomes"
        height={500}
        width={500}
        indexBy="label"
        data={incomesChartData || []}
      />
    </>
  );
};

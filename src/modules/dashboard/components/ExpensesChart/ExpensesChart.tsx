import _ from 'lodash';
import { useMemo } from 'react';

import { PieChart } from '@/components/Charts/PieChart';
import { useExpenses, parseExpenseCategoryLabel, Category } from '@/modules/expenses';

export const ExpensesChart = () => {
  const expensesQuery = useExpenses({});

  const expensesChartData = useMemo(
    () =>
      _.chain(expensesQuery?.data)
        .groupBy('category')
        .map((value, key) => ({
          label: parseExpenseCategoryLabel(key as Category),
          value: _.reduce(value, (acc, expense) => Number(expense.value) + acc, 0),
        }))
        .value(),
    [expensesQuery.data],
  );

  console.log(expensesChartData);

  return (
    <PieChart
      label="Expenses"
      height={500}
      width={500}
      data={expensesChartData || []}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

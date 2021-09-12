import { Text } from '@chakra-ui/react';
import { ResponsivePie, PieSvgProps } from '@nivo/pie';

export interface PieChartProps<T> extends Partial<Omit<PieSvgProps<T>, 'data'>> {
  label: string;
  data: T[];
}

import * as LC from '@/components/LC';

export function PieChart<T>({ label, data, height, width, ...restProps }: PieChartProps<T>) {
  return (
    <LC.Vertical
      spaceBetween
      pt="2rem"
      pb="2.5rem"
      px="2.6rem"
      bg="white"
      boxShadow="sm"
      borderRadius="md"
      height={height}
      width={width}
    >
      <Text fontSize="lg" fontWeight="bold" mb={5}>
        {label}
      </Text>
      <ResponsivePie
        data={data}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        innerRadius={0.88}
        padAngle={2}
        cornerRadius={45}
        activeInnerRadiusOffset={5}
        activeOuterRadiusOffset={5}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        {...restProps}
      />
    </LC.Vertical>
  );
}

import { Box } from '@chakra-ui/layout';
import { Meta, Story } from '@storybook/react';
import { JSXElementConstructor } from 'react';

import { Carousel } from './Carousel';

const MyCarousel = () => {
  return (
    <Carousel
      CarouselItem={Box as JSXElementConstructor<unknown>}
      columns={5}
      data={[
        {
          id: 1,
          bg: 'red',
        },
        {
          id: 2,
          bg: 'green',
        },
        {
          id: 3,
          bg: 'blue',
        },
      ]}
      keyProp="id"
      keysToPass={['bg', 'id']}
      title="Boxes"
      w="100%"
      cardSize="sm"
    />
  );
};

const meta: Meta = {
  title: 'Components/Carousel',
  component: MyCarousel,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <MyCarousel />;

export const Basic = Template.bind({});
Basic.args = {};

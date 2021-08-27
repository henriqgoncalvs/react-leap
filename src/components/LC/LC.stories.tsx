import { Text } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';

import * as LC from '@/components/LC';

const Example = () => {
  return (
    <>
      <LC.Vertical spacing={50} color="black">
        <LC.Vertical spacing={20} bg="teal.100">
          <Text> We </Text>
          <Text> are </Text>
          <Text> Vertical </Text>
        </LC.Vertical>

        <LC.Horizontal spaceBetween bg="pink.100" p={4}>
          <Text> We </Text>
          <Text> are </Text>
          <Text> Horizontal </Text>
        </LC.Horizontal>

        <LC.Space size={50} />
      </LC.Vertical>

      <LC.Vertical color="white">
        <LC.Horizontal centerV h={200} w={400} debug>
          <Text> I am centered vertically </Text>
        </LC.Horizontal>

        <LC.Horizontal centerH h={200} w={400} debug>
          <Text> I am centered Horizontally </Text>
        </LC.Horizontal>

        <LC.Horizontal center h={200} w={400} debug>
          <Text> I am just centered </Text>
        </LC.Horizontal>

        <LC.Vertical fullW debug>
          <Text> I will take full width </Text>
        </LC.Vertical>
      </LC.Vertical>
    </>
  );
};

const meta: Meta = {
  title: 'Components/LC',
  component: Example,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <Example />;

export const Basic = Template.bind({});
Basic.args = {};

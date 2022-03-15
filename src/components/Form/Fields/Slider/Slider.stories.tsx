import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { Slider, SliderProps } from './Slider';

type SliderStoryProps = SliderProps & Pick<FieldWrapperProps, 'helper' | 'label' | 'required'>;

const meta: Meta = {
  title: 'Components/Form/Fields/Slider',
  component: Slider,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <Form<{ value: string }>
        initialValues={{
          value: '',
        }}
        onSubmit={(values) => console.log(values.value)}
      >
        {() => <Story />}
      </Form>
    ),
  ],
};

export default meta;

const Template: Story<SliderStoryProps> = ({ helper, label, required }) => (
  <FieldWrapper
    name="value"
    helper={helper}
    required={required}
    label={label}
    as={(fieldProps) => <Slider {...fieldProps} />}
  />
);

export const Default = Template.bind({});
Default.args = {
  helper: '',
  label: 'Label',
  required: false,
};

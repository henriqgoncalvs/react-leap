import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { Radio, RadioGroup, RadioGroupProps } from './Radio';

export interface RadioStoryProps
  extends Pick<RadioGroupProps, 'inline' | 'children'>,
    Pick<FieldWrapperProps, 'helper' | 'label' | 'required'> {}

const meta: Meta = {
  title: 'Components/Form/Fields/Radio',
  component: RadioGroup,
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

const Template: Story<RadioStoryProps> = ({ helper, label, required, inline }) => (
  <FieldWrapper
    name="value"
    helper={helper}
    required={required}
    label={label}
    as={(fieldProps) => (
      <RadioGroup {...fieldProps} inline={inline}>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    )}
  />
);

export const Default = Template.bind({});
Default.args = {
  helper: '',
  label: 'Label',
  required: false,
};

export const Inline = Template.bind({});
Inline.args = {
  helper: '',
  label: 'Label',
  required: false,
  inline: true,
};

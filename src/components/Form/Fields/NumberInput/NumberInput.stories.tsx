import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { NumberInput, NumberInputProps } from './NumberInput';

type NumberInputStoryProps = NumberInputProps &
  Pick<FieldWrapperProps, 'helper' | 'label' | 'required'>;

const meta: Meta = {
  title: 'Components/Form/Fields/NumberInput',
  component: NumberInput,
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

const Template: Story<NumberInputStoryProps> = ({ helper, label, required, showStepper }) => (
  <FieldWrapper
    name="value"
    helper={helper}
    required={required}
    label={label}
    as={(fieldProps) => <NumberInput showStepper={showStepper} {...fieldProps} />}
  />
);

export const Default = Template.bind({});
Default.args = {
  helper: '',
  label: 'Label',
  required: false,
};

export const WithoutStepper = Template.bind({});
WithoutStepper.args = {
  helper: '',
  label: 'Label',
  required: false,
  showStepper: false,
};

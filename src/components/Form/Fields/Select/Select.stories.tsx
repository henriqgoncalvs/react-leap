import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { Select, SelectProps } from './Select';

export interface SelectStoryProps
  extends SelectProps,
    Pick<FieldWrapperProps, 'helper' | 'label' | 'required'> {}

const meta: Meta = {
  title: 'Components/Form/Fields/Select',
  component: Select,
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

const Template: Story<SelectStoryProps> = ({ helper, label, required, options, ...restProps }) => (
  <FieldWrapper
    name="value"
    helper={helper}
    required={required}
    label={label}
    as={(fieldProps) => (
      <Select
        {...fieldProps}
        {...restProps}
        options={
          options || [
            { label: 'Red', value: 'red' },
            { label: 'Yellow', value: 'yellow' },
            { label: 'Blue', value: 'blue' },
          ]
        }
      />
    )}
  />
);

export const Default = Template.bind({});
Default.args = {
  helper: '',
  label: 'Label',
  required: false,
};

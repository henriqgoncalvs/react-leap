import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { Checkbox, CheckboxProps } from './Checkbox';

export interface CheckboxStoryProps
  extends CheckboxProps,
    Pick<FieldWrapperProps, 'helper' | 'label' | 'required'> {}

const meta: Meta = {
  title: 'Components/Form/Fields/Checkbox',
  component: Checkbox,
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

const Template: Story<CheckboxStoryProps> = ({ helper, label, required, ...restProps }) => (
  <FieldWrapper
    name="value"
    helper={helper}
    required={required}
    label={label}
    as={(fieldProps) => (
      <Checkbox
        {...fieldProps}
        {...restProps}
        options={[{ value: 'One' }, { value: 'Two' }, { value: 'Three' }]}
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

export const Inline = Template.bind({});
Inline.args = {
  helper: '',
  label: 'Label',
  required: false,
  inline: true,
};

import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { Switch, SwitchProps } from './Switch';

type SwitchWithFormProps = SwitchProps & Pick<FieldWrapperProps, 'helper' | 'label' | 'required'>;

const SwitchWithForm = ({ helper, label, required, ...SwitchProps }: SwitchWithFormProps) => (
  <Form<{ value: string }>
    initialValues={{
      value: '',
    }}
    onSubmit={(values) => console.log(values.value)}
  >
    {() => (
      <FieldWrapper
        name="value"
        helper={helper}
        required={required}
        label={label}
        as={(fieldProps) => <Switch {...SwitchProps} {...fieldProps} />}
      />
    )}
  </Form>
);

const meta: Meta = {
  title: 'Components/Form/Fields/Switch',
  component: SwitchWithForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SwitchWithFormProps> = (props) => <SwitchWithForm {...props} />;

export const Default = Template.bind({});
Default.args = {
  helper: '',
  label: 'Label',
  required: false,
};

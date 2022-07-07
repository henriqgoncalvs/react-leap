import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { TextInput, TextInputProps } from './TextInput';

type TextInputStoryProps = TextInputProps &
  Pick<FieldWrapperProps, 'helper' | 'label' | 'required'>;

const meta: Meta = {
  title: 'Components/Form/Fields/TextInput',
  component: TextInput,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <Form<{ text: string }>
        initialValues={{
          text: '',
        }}
        onSubmit={(values) => console.log(values.text)}
      >
        {() => <Story />}
      </Form>
    ),
  ],
};

export default meta;

const Template: Story<TextInputStoryProps> = ({ helper, label, required, type, ...restProps }) => (
  <FieldWrapper
    name="text"
    helper={helper}
    required={required}
    label={label}
    as={(fieldProps) => <TextInput type={type} {...restProps} {...fieldProps} />}
  />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Digite algum texto',
  helper: '',
  label: 'Label',
  required: false,
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Digite algum texto',
  helper: '',
  label: 'Label',
  required: false,
  type: 'password',
};

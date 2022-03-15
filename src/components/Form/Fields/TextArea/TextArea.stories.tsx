import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { TextArea, TextAreaProps } from './TextArea';

export interface TextAreaStoryProps
  extends TextAreaProps,
    Pick<FieldWrapperProps, 'helper' | 'label' | 'required'> {}

const meta: Meta = {
  title: 'Components/Form/Fields/TextArea',
  component: TextArea,
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

const Template: Story<TextAreaStoryProps> = ({ helper, label, required, ...restProps }) => (
  <FieldWrapper
    name="text"
    helper={helper}
    required={required}
    label={label}
    as={(fieldProps) => <TextArea {...restProps} {...fieldProps} />}
  />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Digite algum texto',
  helper: '',
  label: 'Label',
  required: false,
};

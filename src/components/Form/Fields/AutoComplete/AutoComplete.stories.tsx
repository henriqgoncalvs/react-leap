import { Meta, Story } from '@storybook/react';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

import { AutoComplete, AutoCompleteProps } from './AutoComplete';

type AutoCompleteStoryProps = AutoCompleteProps &
  Pick<FieldWrapperProps, 'helper' | 'label' | 'required'>;

const meta: Meta = {
  title: 'Components/Form/Fields/AutoComplete',
  component: AutoComplete,
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

const Template: Story<AutoCompleteStoryProps> = ({ helper, label, required, ...restProps }) => (
  <FieldWrapper
    name="text"
    helper={helper}
    required={required}
    as={(fieldProps) => (
      <AutoComplete
        {...fieldProps}
        {...restProps}
        label={label}
        items={[
          { value: 'ghana', label: 'Ghana' },
          { value: 'nigeria', label: 'Nigeria' },
          { value: 'kenya', label: 'Kenya' },
          { value: 'southAfrica', label: 'South Africa' },
          { value: 'unitedStates', label: 'United States' },
          { value: 'canada', label: 'Canada' },
          { value: 'germany', label: 'Germany' },
        ]}
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

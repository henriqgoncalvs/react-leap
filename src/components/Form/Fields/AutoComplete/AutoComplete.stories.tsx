import { Meta, Story } from '@storybook/react';

import {
  AutoComplete,
  AutoCompleteProps,
  AutoCompleteInput,
  AutoCompleteList,
  AutoCompleteItem,
} from './AutoComplete';

import { FieldWrapper, Form, FieldWrapperProps } from '@/components/Form';

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
    label={label}
    as={(fieldProps) => (
      <AutoComplete {...fieldProps} {...restProps} openOnFocus>
        <AutoCompleteInput variant="filled" />
        <AutoCompleteList>
          {['nigeria', 'japan', 'india', 'united states', 'south korea'].map((country, cid) => (
            <AutoCompleteItem key={`option-${cid}`} value={country} textTransform="capitalize">
              {country}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    )}
  />
);

export const Default = Template.bind({});
Default.args = {
  helper: '',
  label: 'Label',
  required: false,
};

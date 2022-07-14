import { Button } from '@chakra-ui/react';

import { Form, FieldWrapper, DayPicker, TextArea, NumberInput, Select } from '@/components/Form';
import * as LC from '@/components/LC';

import { IncomeBody } from '../../api/types';
import { useCreateIncome } from '../../hooks/useCreateIncome';

import schema from './schema';

type AddIncomeFormProps = {
  onClose?: () => void;
};

export const AddIncomeForm = ({ onClose }: AddIncomeFormProps) => {
  const createIncomeMutation = useCreateIncome({ onClose });

  return (
    <Form<IncomeBody>
      initialValues={{
        value: 0,
        description: '',
        date: '',
        source: '',
      }}
      onSubmit={async (values) => {
        await createIncomeMutation.mutateAsync({
          data: values,
        });
      }}
      validationSchema={schema}
      withDebugger
    >
      {() => (
        <LC.Vertical w="100%">
          <FieldWrapper
            name="source"
            required
            label="Source"
            as={(props) => (
              <Select
                {...props}
                options={[
                  { label: 'Salary', value: 'salary' },
                  { label: 'Freelance', value: 'freelance' },
                  { label: 'Investiments', value: 'investiments' },
                ]}
              />
            )}
          />
          <FieldWrapper
            name="value"
            required
            label="Value"
            as={(props) => <NumberInput {...props} />}
          />
          <FieldWrapper
            name="description"
            required
            label="Description"
            as={(props) => <TextArea {...props} />}
          />
          <FieldWrapper
            name="date"
            required
            label="Date"
            as={(props) => <DayPicker {...props} />}
          />

          <Button
            isLoading={createIncomeMutation.isLoading}
            type="submit"
            className="w-full"
            variant="@primary"
            w="100%"
          >
            Create income
          </Button>
        </LC.Vertical>
      )}
    </Form>
  );
};

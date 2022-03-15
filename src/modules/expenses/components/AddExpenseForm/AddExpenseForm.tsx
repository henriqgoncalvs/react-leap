import { Button } from '@chakra-ui/react';

import {
  Form,
  FieldWrapper,
  DayPicker,
  TextArea,
  NumberInput,
  AutoComplete,
} from '@/components/Form';
import * as LC from '@/components/LC';

import { expenseCategories } from '../..';
import { ExpenseBody } from '../../api/types';
import { useCreateExpense } from '../../hooks/useCreateExpense';

import schema from './schema';

type AddExpenseFormProps = {
  onClose?: () => void;
};

type AddExpenseFormValues = Omit<ExpenseBody, 'owner'>;

export const AddExpenseForm = ({ onClose }: AddExpenseFormProps) => {
  const createExpenseMutation = useCreateExpense({ onClose });

  return (
    <Form<AddExpenseFormValues>
      initialValues={{
        date: '',
        description: '',
        value: 0,
        category: '',
      }}
      onSubmit={async (values) => {
        await createExpenseMutation.mutateAsync({
          data: values,
        });
      }}
      validationSchema={schema}
      withDebugger
    >
      {() => (
        <LC.Vertical w="100%">
          <FieldWrapper
            name="value"
            required
            label="Value"
            as={(props) => <NumberInput {...props} />}
          />
          <FieldWrapper
            name="date"
            required
            label="Date"
            as={(props) => <DayPicker {...props} />}
          />
          <FieldWrapper
            name="description"
            required
            label="Description"
            as={(props) => <TextArea {...props} />}
          />
          <FieldWrapper
            name="category"
            required
            as={(props) => (
              <AutoComplete
                {...props}
                placeholder="Category"
                label="Category"
                items={expenseCategories}
              />
            )}
          />

          <Button
            isLoading={createExpenseMutation.isLoading}
            type="submit"
            className="w-full"
            variant="@primary"
            w="100%"
          >
            Create expense
          </Button>
        </LC.Vertical>
      )}
    </Form>
  );
};

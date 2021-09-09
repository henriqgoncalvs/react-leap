import { Button } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';

import { AddExpenseForm } from '../components/AddExpenseForm';
import { ExpensesTable } from '../components/ExpensesTable';

import { Modal } from '@/components/Modal';
import { Page } from '@/components/Page';

export const Expenses = () => {
  return (
    <Page title="Expenses">
      <Modal
        title="Add new expense"
        triggerButton={({ openModal }) => (
          <Button leftIcon={<IoMdAdd />} onClick={openModal}>
            Add new expense
          </Button>
        )}
      >
        {({ onClose }) => <AddExpenseForm onClose={onClose} />}
      </Modal>
      <ExpensesTable />
    </Page>
  );
};

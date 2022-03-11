import { Button } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';

import { AddIncomeForm } from '../components/AddIncomeForm';
import { IncomesTable } from '../components/IncomesTable';

import { Modal } from '@/components/Modal';
import { Page } from '@/components/Page';

export const Incomes = () => {
  return (
    <Page title="Incomes">
      <Modal
        title="Add new income"
        triggerButton={({ openModal }) => (
          <Button leftIcon={<IoMdAdd />} onClick={openModal}>
            Add new income
          </Button>
        )}
      >
        {({ onClose }) => <AddIncomeForm onClose={onClose} />}
      </Modal>
      <IncomesTable />
    </Page>
  );
};

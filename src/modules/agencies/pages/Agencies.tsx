import { Button } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';

import { AddAgencyForm } from '../components/AddAgencyForm';
import { AgenciesTable } from '../components/AgenciesTable';

import { Modal } from '@/components/Modal';
import { Page } from '@/components/Page';

export const Agencies = () => {
  return (
    <Page title="Agencies">
      <Modal
        title="Add new agency"
        triggerButton={({ openModal }) => (
          <Button leftIcon={<IoMdAdd />} onClick={openModal}>
            Add new agency
          </Button>
        )}
      >
        {({ onClose }) => <AddAgencyForm onClose={onClose} />}
      </Modal>
      <AgenciesTable />
    </Page>
  );
};

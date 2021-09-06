import { Button } from '@chakra-ui/react';

import { AgencyBody } from '../../api/types';
import { useCreateAgency } from '../../hooks/useCreateAgency';

import schema from './schema';

import { Form, FieldWrapper, TextInput, TextArea } from '@/components/Form';
import * as LC from '@/components/LC';
import { useAuth } from '@/lib/authentication';

type AddAgencyFormProps = {
  onClose?: () => void;
};

type AddAgencyFormValues = Omit<AgencyBody, 'owner'>;

export const AddAgencyForm = ({ onClose }: AddAgencyFormProps) => {
  const createAgencyMutation = useCreateAgency({ onClose });
  const { user } = useAuth();

  return (
    <Form<AddAgencyFormValues>
      initialValues={{
        name: '',
        bio: '',
        phone: '',
        email: '',
      }}
      onSubmit={async (values) => {
        if (user) {
          await createAgencyMutation.mutateAsync({
            data: {
              owner: user.id,
              ...values,
            },
          });
        }
      }}
      validationSchema={schema}
      withDebugger
    >
      {() => (
        <LC.Vertical w="100%">
          <FieldWrapper
            name="name"
            required
            label="Name"
            as={(props) => <TextInput {...props} />}
          />
          <FieldWrapper name="bio" label="Bio" as={(props) => <TextArea {...props} />} />
          <FieldWrapper
            name="phone"
            helper="Contact phone"
            required
            label="Phone"
            as={(props) => <TextInput {...props} />}
          />
          <FieldWrapper
            name="email"
            helper="Contact email"
            required
            label="Email"
            as={(props) => <TextInput type="email" {...props} />}
          />

          <Button
            isLoading={createAgencyMutation.isLoading}
            type="submit"
            className="w-full"
            variant="@primary"
            w="100%"
          >
            Create agency
          </Button>
        </LC.Vertical>
      )}
    </Form>
  );
};

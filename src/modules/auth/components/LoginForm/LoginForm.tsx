import { Button } from '@chakra-ui/react';

import { LoginCredentials } from '../../api/types';

import schema from './schema';

import { Link } from '@/components/common/Link';
import { FieldWrapper, Form, TextInput } from '@/components/Form';
import * as LC from '@/components/LC';
import { useAuth } from '@/lib/authentication';

type LoginFormProps = {
  onSuccess: () => void;
  onError: (message: string) => void;
};

export const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
  const { login, isLoggingIn } = useAuth();

  return (
    <Form<LoginCredentials>
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          await login(values);
          onSuccess();
        } catch (err) {
          onError(err.response.data.message);
        }
      }}
      validationSchema={schema}
      withDebugger
    >
      {() => (
        <LC.Vertical w="100%">
          <FieldWrapper
            name="email"
            helper="Insert a valid email"
            required
            label="Email"
            as={(props) => <TextInput type="email" {...props} />}
          />
          <FieldWrapper
            name="password"
            helper="Insert a valid password"
            required
            label="Password"
            as={(props) => <TextInput type="password" {...props} />}
          />

          <LC.Vertical center spaceBetween>
            <Button size="sm" as={Link} to="../register" mb={4} variant="ghost">
              Don&apos;t have an account?
            </Button>
            <Button
              isLoading={isLoggingIn}
              type="submit"
              className="w-full"
              variant="@primary"
              w="100%"
            >
              Log in
            </Button>
          </LC.Vertical>
        </LC.Vertical>
      )}
    </Form>
  );
};

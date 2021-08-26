import { Button } from '@chakra-ui/react';

import schema from './schema';

import { TextInput } from '@/components/common/Fields/TextInput';
import { Link } from '@/components/common/Link';
import { FieldWrapper, Form } from '@/components/Form';
import { useAuth } from '@/lib/authentication';

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { login, isLoggingIn } = useAuth();

  return (
    <div>
      <Form<LoginValues>
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values) => {
          await login(values);
          onSuccess();
        }}
        validationSchema={schema}
        withDebugger
      >
        {() => (
          <>
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

            <Button isLoading={isLoggingIn} type="submit" className="w-full">
              Log in
            </Button>
          </>
        )}
      </Form>
      <Link to="../cadastro">Registrar</Link>
    </div>
  );
};

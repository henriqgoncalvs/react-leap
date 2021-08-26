import { Button } from '@chakra-ui/react';

import schema from './schema';

import { TextInput } from '@/components/common/Fields/TextInput';
import { Link } from '@/components/common/Link';
import { FieldWrapper, Form } from '@/components/Form';
import { useAuth } from '@/lib/authentication';

type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  teamId?: string;
  teamName?: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { register, isRegistering } = useAuth();

  return (
    <>
      <Form<RegisterValues>
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={async (values) => {
          await register(values);
          onSuccess();
        }}
        validationSchema={schema}
      >
        {() => (
          <>
            <FieldWrapper
              name="firstName"
              required
              label="Primeiro Nome"
              as={(props) => <TextInput {...props} />}
            />
            <FieldWrapper
              name="lastName"
              required
              label="Último Nome"
              as={(props) => <TextInput {...props} />}
            />
            <FieldWrapper
              name="email"
              required
              label="Email"
              as={(props) => <TextInput {...props} />}
            />
            <FieldWrapper
              name="password"
              required
              label="Senha"
              as={(props) => <TextInput {...props} />}
            />
            <FieldWrapper
              name="teamName"
              required
              label="Nome do time"
              as={(props) => <TextInput {...props} />}
            />

            <Button isLoading={isRegistering} type="submit" className="w-full">
              Registrar
            </Button>
          </>
        )}
      </Form>
      <Link to="../login" className="font-medium text-blue-600 hover:text-blue-500">
        Entrar
      </Link>
    </>
  );
};

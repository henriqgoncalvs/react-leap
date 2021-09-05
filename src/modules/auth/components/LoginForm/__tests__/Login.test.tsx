import { act } from 'react-dom/test-utils';

import { LoginForm } from '../LoginForm';

import { createUser, render, screen, userEvent, waitFor } from '@/test/test-utils';

test('should login new user and call onSuccess cb which should navigate the user to the app', async () => {
  const newUser = await createUser({ teamId: undefined });

  const onSuccess = jest.fn();
  const onError = jest.fn();

  await render(<LoginForm onSuccess={onSuccess} onError={onError} />, { user: null });

  userEvent.type(screen.getByLabelText(/email/i), newUser.email);
  userEvent.type(screen.getByLabelText(/password/i, { selector: 'input' }), newUser.password);

  act(() => userEvent.click(screen.getByRole('button', { name: /log in/i })));

  await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
});

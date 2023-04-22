import { useDispatch } from 'react-redux';
import { logIn } from 'components/redux/auth/operations';
import { Button, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email:
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password:
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};

import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/operations';
import { Button, Container, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};

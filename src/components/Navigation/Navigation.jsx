import { useAuth } from 'components/hooks/useAuth';
import { Nav, NavigateLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <NavigateLink to="/">Home</NavigateLink>
      {isLoggedIn && <NavigateLink to="/contacts">Contacts</NavigateLink>}
    </Nav>
  );
};

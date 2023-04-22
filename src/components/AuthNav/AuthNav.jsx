import { Container, Navigation } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <Navigation to="/register">Register</Navigation>
      <Navigation to="/login">Log In</Navigation>
    </Container>
  );
};

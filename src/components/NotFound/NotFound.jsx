import { Button, Container, Failed } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Failed>404 Page not found </Failed>
      <Button to="/">← Home</Button>
    </Container>
  );
};

export default NotFound;

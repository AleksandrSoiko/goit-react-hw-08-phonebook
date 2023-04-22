import { Triangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => (
  <Container>
    <Triangle
      visible={true}
      height="20"
      width="32"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </Container>
);

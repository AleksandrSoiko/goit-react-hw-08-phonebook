import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Failed = styled.h1`
  color: #000;
  font-size: 40px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 40px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  background-color: lightgrey;
  border-radius: 5px;
  &:hover {
    background-color: orangered;
  }
`;

export const Container = styled.div`
  text-align: center;
`;

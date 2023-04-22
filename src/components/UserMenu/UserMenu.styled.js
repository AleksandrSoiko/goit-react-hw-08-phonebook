import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  border: none;
  font-weight: 700;
  padding: 10px 15px;
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: orangered;
  }
`;

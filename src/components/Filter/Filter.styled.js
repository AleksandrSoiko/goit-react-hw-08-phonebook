import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 24px;
  line-height: 1.2;
  max-width: 480px;
`;

export const Input = styled.input`
  width: 240px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 12px 4px rgba(53, 170, 170, 0.12);
  }
`;

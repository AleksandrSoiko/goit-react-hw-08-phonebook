import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 320px;
  background-color: whitesmoke;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const Input = styled.input``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const Button = styled.button`
  border: none;
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

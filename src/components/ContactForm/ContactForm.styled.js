import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 720px;
  padding: 20px;
  flex-direction: column;
  background-color: lightgray;
  text-align: center;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 240px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px -2px 9px 4px rgba(59, 64, 47, 0.2);
  outline: none;
  &:focus {
    box-shadow: 0px 0px 12px 4px rgba(53, 170, 170, 0.12);
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  width: 160px;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.2;
  margin-left: auto;
  margin-right: auto;
  border-color: rgba(0, 0, 0, 0.3);
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  transition: background-color 300ms linear;
  &:hover {
    background-color: orangered;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  width: 100px;
  display: inline-flex;
  box-shadow: 1px -2px 9px 4px rgba(59, 64, 47, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin: 0;
`;

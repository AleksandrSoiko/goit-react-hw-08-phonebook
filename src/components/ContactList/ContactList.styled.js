import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 15px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
  padding: 10px;
  border-radius: 5px;
  &:nth-child(2n + 1) {
    background-color: lightgray;
  }
`;

export const Text = styled.span``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  border-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: transparent;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  transition: background-color 300ms linear;
  &:hover {
    background-color: orangered;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: blue;
  }
`;

export const Container = styled.div``;

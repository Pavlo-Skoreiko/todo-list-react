import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: white;
  text-decoration: none;

  &.${activeClassName} {
    font-weight: bold;
  }
`;

export const List = styled.ul`
  background-color: teal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  margin: 20px;
`;

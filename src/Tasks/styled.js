import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 10px 15px;
  padding: 0 0 15px 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  align-items: center;

  ${({ hidden }) => hidden && css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) => done && css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  color: white;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.3s;

  ${({ toggleDone }) => toggleDone && css`
      background-color: hsl(120, 100%, 20%);

      &:hover {
        background-color: hsl(120, 100%, 30%);
      }

      &:active {
        background-color: hsl(120, 100%, 40%);
        transition: 0.5s;
        border: 1px solid hsl(120, 95%, 8%);
      }

    `}

  ${({ remove }) => remove && css`
      background-color: hsl(348, 83%, 47%);

      &:hover {
        background-color: hsl(348, 83%, 57%);
      }

      &:active {
        background-color: hsl(348, 83%, 67%);
        transition: 0.3s;
        border: 1px solid hsl(348, 92%, 15%);
      }
   `}
`;

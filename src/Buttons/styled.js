import styled from "styled-components";

export const HideDoneButtons = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;

export const Button = styled.button`
  border: none;
  color: hsl(180, 100%, 25%);
  transition: color 0.5s;
  background-color: transparent;
  cursor: pointer;
  margin: 0 0 0 20px;

  &:hover {
    transition: color 0.5s;
    color: hsl(180, 67%, 41%);
  }

  &:disabled {
    color: rgb(184, 181, 181);
  }
`;

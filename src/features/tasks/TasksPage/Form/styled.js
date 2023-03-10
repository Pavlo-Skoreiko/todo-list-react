import styled from "styled-components";

export const Field = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid hsl(0, 0%, 87%);
`;

export const Button = styled.button`
  background-color: hsl(180, 100%, 25%);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

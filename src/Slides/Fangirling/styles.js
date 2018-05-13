import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ButtonSection = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: 0.5px solid black;
  border-radius: 3px;
  user-select: none;
  font-family: 'Roboto', sans-serif;

  & > span {
    padding-left: 10px;
  }

  &:hover {
    background: rgba(220, 220, 220, 1);
  }

  &:active {
    background: rgba(170, 170, 170, 1);
  }
`;

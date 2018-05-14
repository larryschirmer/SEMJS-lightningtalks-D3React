import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 75px 600px;

  font-family: 'Roboto', sans-serif;
`;

export const Nav = styled.div`
  grid-row: 1/2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
`;

export const NavItem = styled.div`
  margin-left: 10px;

  padding: 5px 10px;
  border: 0.5px solid black;
  border-radius: 3px;
  user-select: none;

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

export const View = styled.div`
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 300px;
`;

export const Header = styled.div`
    grid-row: 1/2
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    align-items: flex-start;
    justify-content: space-evenly;
`;

export const Name = styled.div`
  font-size: 24px;
`;

export const Social = styled.div`
  font-size: 16px;
`;

export const Agenda = styled.ol`
  font-size: 18px;
`;

export const ListItem = styled.li`
  padding-bottom: 5px;
`;

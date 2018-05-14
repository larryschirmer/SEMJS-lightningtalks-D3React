import React, { Component } from 'react';

import { Wrapper, Header, Name, Social, Agenda, ListItem } from './styles';

class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Name>Larry Schirmer</Name>
          <Social>https://github.com/larryschirmer</Social>
        </Header>
        <Agenda>
          <ListItem>Get on the same page (What is all this)</ListItem>
          <ListItem>Get super excited (Serious Fangirling)</ListItem>
          <ListItem>Learn Something (How does this D3 do these things)</ListItem>
          <ListItem>Build Something (Make something valuable)</ListItem>
        </Agenda>
      </Wrapper>
    );
  }
}

export default Intro;

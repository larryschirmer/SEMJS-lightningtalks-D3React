import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Fangirling, Button, Intro } from './Slides';
import { Wrapper, Nav, NavItem, View } from './styles';

class MainPage extends Component {
  state = {
    activePage: 'intro',
  };

  onSelect = itemName => () => {
    this.setState({ activePage: itemName });
  };

  render() {
    const { activePage } = this.state;
    return (
      <Wrapper>
        <Nav>
          <NavItem onClick={this.onSelect('intro')}>Intro</NavItem>
          <NavItem onClick={this.onSelect('fangirling')}>Fangirling</NavItem>
          <NavItem onClick={this.onSelect('button')}>Button</NavItem>
        </Nav>
        <View>
          {activePage === 'intro' && <Intro />}
          {activePage === 'fangirling' && <Fangirling />}
          {activePage === 'button' && <Button />}
        </View>
      </Wrapper>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));

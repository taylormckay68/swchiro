import React, { Component } from 'react';
import Navbar from './Navbar';
import {MainDiv} from './styled-components/Main'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <MainDiv className="room-ideas-div">
        <Navbar/>
      </MainDiv>
    )
  }
}

export default Main;
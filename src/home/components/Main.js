import React, { Component } from 'react';
import Navbar from './Navbar';
import {MainDiv} from './styled-components/Main';
import Hero from './Hero';
import Services from './Services';
import About from './About';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <MainDiv className="main-div">
        {/* <Navbar/> */}
        <Hero className="hero"/>
        <Services className="services"/>
        <About className="about"/>
      </MainDiv>
    )
  }
}

export default Main;
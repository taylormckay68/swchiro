import React, { Component } from 'react'
import {HomeWrapper} from './components/styled-components/Home';
import Hero from './components/Hero';

export default class Test extends Component{
    render() {
        return(
            <HomeWrapper>
                <Hero/>
            </HomeWrapper>
        )
    }
}
import React, { Component } from 'react'

import {NavbarCont, LogoCont, Logo, LogoText} from './styled-components/Navbar';

export default function() {
    return(
        <NavbarCont className="navbar">
            <LogoCont className="logo-cont">
                <Logo className="logo" src="http://i67.tinypic.com/2gwdmr8.png"/>
                <LogoText className="logo-text">Southwest <br/>Chiropractic</LogoText>
            </LogoCont>
        </NavbarCont>
    )
}
import React, { Component } from 'react';
import {HeroWrapper, BusinessWrapper, BusinessName, CallButton} from './styled-components/Hero';

export default function Hero (){
    return(
        <HeroWrapper className="hero-wrapper">
            <BusinessWrapper className="business-wrapper">
                <BusinessName className="business-name">
                    Southwest <br/> Chiropractic
                </BusinessName>
                <CallButton className="call-button">801-254-09400</CallButton>
            </BusinessWrapper>
        </HeroWrapper>
    )
}
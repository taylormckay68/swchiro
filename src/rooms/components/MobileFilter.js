import React, { Component } from 'react'
import { MobFilterWrapper } from './styled-components/MobileFilter';

class MobileFilter extends Component{
    render(){
        return(
            <MobFilterWrapper visible={this.props.visible}>
                <button onClick={this.props.toggleMobileFitler}>Close</button>
            </MobFilterWrapper>
        )
    }
}

export default MobileFilter;
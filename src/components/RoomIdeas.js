import React, { Component } from 'react';
import RoomIdeasDiv from './styled-components/RoomIdeas';
import shortid from 'shortid';
//import OasisHeroMod from 'overstock-marketing-component-library/module/lib/js/OasisHeroMod';
import CoopMod from 'overstock-marketing-component-library/module/lib/js/CoopMod';
import CategoryMod from 'overstock-marketing-component-library/module/lib/js/CategoryMod';

import CatMockData from './MockData/CatMockData'

class RoomIdeas extends Component {
    render() {
        return (
            <RoomIdeasDiv>
                <div className="mainDiv">Room Ideas</div>
                <div className="mainDiv">Shopping Guide Mod - this is where Shop By Room will be</div>
                <CategoryMod className="mainDiv" data={CatMockData.recs} title={"Here are some couches..."}/>
                <div className="mainDiv">Need Inspiration Banner</div>
                <CoopMod className="mainDiv" />
            </RoomIdeasDiv>
        );
    }
}

export default RoomIdeas;

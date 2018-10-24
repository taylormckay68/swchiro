import React, { Component } from 'react'
import {FilterBarWrapper, ArrowWrapper, RoomIdeasText, TextWrapper, MainText, FixedFilterButton} from './styled-components/FilterBar';
import ArrowsMinimalLeft from 'overstock-component-library/lib/Icons/arrows/Minimal_Left';
import FilterButtons from './FilterButtons';

class FilterBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render() {
        return(
            <FilterBarWrapper className="filter-bar-wrapper">
                <TextWrapper className="text-wrapper">
                    <ArrowWrapper className="arrow-wrapper">
                        <a><ArrowsMinimalLeft className="leftArrow" style={{height: '13px'}} color="#545658" /></a>
                        <RoomIdeasText className="room-ideas-text">Room Ideas</RoomIdeasText>
                    </ArrowWrapper>
                    <MainText className="main-text">{this.props.selectedRoom ? this.props.selectedRoom : 'Room'} Ideas</MainText>
                </TextWrapper>
                <FilterButtons {...this.props}/>
                <FixedFilterButton onClick={() => this.props.toggleMenu('mobileMenu')} className="fixed-filter-button">Filters</FixedFilterButton>
            </FilterBarWrapper>
        )
    }
}

export default FilterBar;
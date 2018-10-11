import React, { Component } from 'react'
import {FilterBarWrapper, ArrowWrapper, RoomIdeasText, TextWrapper, MainText, FilterButton, FilterButtonWrapper, FilterButtonInnerCont, FilterButtonText, FilterButtonArrow} from './styled-components/FilterBar';
import ArrowsMinimalLeft from 'overstock-component-library/lib/Icons/arrows/Minimal_Left';
import ArrowsMinimalDown from 'overstock-component-library/lib/Icons/arrows/Minimal_Down';

class FilterBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <FilterBarWrapper className="filter-bar-wrapper">
                <TextWrapper className="text-wrapper">
                    <ArrowWrapper className="arrow-wrapper">
                        <a><ArrowsMinimalLeft className="leftArrow" style={{height: '13px'}} color="#545658" /></a>
                        <RoomIdeasText className="room-ideas-text">Room Ideas</RoomIdeasText>
                    </ArrowWrapper>
                    <MainText className="main-text">Search by Item</MainText>
                </TextWrapper>
                <FilterButtonWrapper className="filter-button-wrapper">
                    <FilterButton className="filter-button">
                        <FilterButtonInnerCont className="filter-button-inner-cont">
                            <FilterButtonText className="filter-button-text">Room</FilterButtonText>
                            <FilterButtonArrow className="filter-button-arrow">
                                <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                            </FilterButtonArrow>
                        </FilterButtonInnerCont>
                    </FilterButton>
                    <FilterButton className="filter-button">
                        <FilterButtonInnerCont className="filter-button-inner-cont">
                            <FilterButtonText className="filter-button-text">Color</FilterButtonText>
                            <FilterButtonArrow className="filter-button-arrow">
                                <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                            </FilterButtonArrow>
                        </FilterButtonInnerCont>
                    </FilterButton>
                    <FilterButton className="filter-button">
                    <FilterButtonInnerCont className="filter-button-inner-cont">
                        <FilterButtonText className="filter-button-text">Style</FilterButtonText>
                            <FilterButtonArrow className="filter-button-arrow">
                                <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                            </FilterButtonArrow>
                        </FilterButtonInnerCont>
                    </FilterButton>                    
                </FilterButtonWrapper>
            </FilterBarWrapper>
        )
    }
}

export default FilterBar;
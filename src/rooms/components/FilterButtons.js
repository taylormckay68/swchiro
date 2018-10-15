import React, { Component } from 'react'
import {FilterButtonWrapper, FilterButton, FilterButtonInnerCont, FilterButtonText, FilterButtonArrow, RoomDropDown, StyleDropDown, FilterButtonInnerWrapper} from './styled-components/FilterButtons';
import ArrowsMinimalDown from 'overstock-component-library/lib/Icons/arrows/Minimal_Down';

class FilterButtons extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    
    render() {
        return(
            <FilterButtonWrapper className="filter-button-wrapper">
                <FilterButton className="filter-button">
                    <FilterButtonInnerWrapper onClick={() => this.props.toggleMenu("roomMenu")} >
                        <FilterButtonInnerCont className="filter-button-inner-cont">
                            <FilterButtonText className="filter-button-text">Room</FilterButtonText>
                            <FilterButtonArrow className="filter-button-arrow" open={this.props.roomMenu}>
                                <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                            </FilterButtonArrow>
                        </FilterButtonInnerCont>
                    </FilterButtonInnerWrapper>
                    <RoomDropDown className="drop-down-menu" open={this.props.roomMenu}></RoomDropDown>
                </FilterButton>
                <FilterButton className="filter-button">
                    <FilterButtonInnerWrapper onClick={() => this.props.toggleMenu("styleMenu")}>
                        <FilterButtonInnerCont className="filter-button-inner-cont">
                            <FilterButtonText className="filter-button-text">Style</FilterButtonText>
                            <FilterButtonArrow className="filter-button-arrow" open={this.props.styleMenu}>
                                <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                            </FilterButtonArrow>
                        </FilterButtonInnerCont>
                    </FilterButtonInnerWrapper>
                    <StyleDropDown onClick={(e) => e.preventDefault()} className="drop-down-menu" open={this.props.styleMenu}></StyleDropDown>
                </FilterButton>
            </FilterButtonWrapper>
        )
    }
}

export default FilterButtons;
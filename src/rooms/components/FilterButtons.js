import React, { Component } from 'react'
import {FilterButtonWrapper, FilterButton, FilterButtonInnerCont, FilterButtonText, FilterButtonArrow, RoomDropDown, StyleDropDown, ColorDropDown} from './styled-components/FilterButtons';
import ArrowsMinimalDown from 'overstock-component-library/lib/Icons/arrows/Minimal_Down';

class FilterButtons extends Component{
    constructor(props){
        super(props);

        this.state = {
            roomMenu: false,
            styleMenu: false,
            colorMenu: false
        }
        this.clickRoomMenu = this.clickRoomMenu.bind(this);
        this.blurRoomMenu = this.blurRoomMenu.bind(this);
    }
    blurRoomMenu(){
        console.log('blur')
        this.setState({
            roomMenu: false
        })
    }
    clickRoomMenu(menu){
        console.log('click')
        this.setState({
            [menu]: !this.state[menu]
        })
    }
    render() {
        return(
            <FilterButtonWrapper className="filter-button-wrapper">
                <FilterButton className="filter-button" onClick={() => this.clickRoomMenu("roomMenu")} onBlur={this.blurRoomMenu}>
                    <FilterButtonInnerCont className="filter-button-inner-cont">
                        <FilterButtonText className="filter-button-text">Room</FilterButtonText>
                        <FilterButtonArrow className="filter-button-arrow">
                            <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                        </FilterButtonArrow>
                    </FilterButtonInnerCont>
                    <RoomDropDown className="drop-down-menu" open={this.state.roomMenu}></RoomDropDown>
                </FilterButton>
                <FilterButton className="filter-button" onClick={() => this.clickRoomMenu("styleMenu")}>
                    <FilterButtonInnerCont className="filter-button-inner-cont">
                        <FilterButtonText className="filter-button-text">Style</FilterButtonText>
                        <FilterButtonArrow className="filter-button-arrow">
                            <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                        </FilterButtonArrow>
                    </FilterButtonInnerCont>
                    <StyleDropDown className="drop-down-menu" open={this.state.styleMenu}></StyleDropDown>
                </FilterButton>
                <FilterButton className="filter-button" onClick={() => this.clickRoomMenu("colorMenu")}>
                    <FilterButtonInnerCont className="filter-button-inner-cont">
                        <FilterButtonText className="filter-button-text">Color</FilterButtonText>
                        <FilterButtonArrow className="filter-button-arrow">
                            <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                        </FilterButtonArrow>
                    </FilterButtonInnerCont>
                    <ColorDropDown className="drop-down-menu" open={this.state.colorMenu}></ColorDropDown> 
                </FilterButton>
            </FilterButtonWrapper>
        )
    }
}

export default FilterButtons;
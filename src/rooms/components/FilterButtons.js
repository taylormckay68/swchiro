import React, { Component } from 'react'
import {FilterButtonWrapper, FilterButton, FilterButtonInnerCont, FilterButtonText, FilterButtonArrow, RoomDropDown, StyleDropDown, FilterButtonInnerWrapper} from './styled-components/FilterButtons';
import {FilterWrapper, FilterOptionWrapper, FilterOptionContainer, FilterOptionText, CheckWrapper} from './styled-components/Filters';
import ArrowsMinimalDown from 'overstock-component-library/lib/Icons/arrows/Minimal_Down';
import ActionCheckThin from 'overstock-component-library/lib/Icons/action/Check_Thin';
import {filterData} from '../utils';

class FilterButtons extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedRoom: '',
        }
    }
    componentDidMount(){
        let id = this.props.data.rooms.id ? this.props.data.rooms.id : '';
        let lowercase = id ? id.toLowerCase() : '';
        let capFirst = lowercase ? lowercase.slice(0,1).toUpperCase() + lowercase.slice(1) : '';
        let selectedRoom = capFirst ? capFirst.replace('-', ' ') : '';
        let validRoom = filterData.rooms.indexOf(selectedRoom) !== -1;
        this.setState({
            selectedRoom: validRoom ? selectedRoom : ''
        })
    }
    selectRoom(room) {
        this.setState({selectedRoom: room})
        this.props.toggleMenu("roomMenu");
    }
    renderRoomFilter() {
        let {rooms} = filterData;
        return (
            rooms.map((e, i, arr) => {
                let selected = e === this.state.selectedRoom;
                return(
                    <FilterOptionContainer key={e} className="filter-option-container" onClick={this.selectRoom.bind(this, e)}>
                        <FilterOptionWrapper className="filter-option-wrapper">
                            <CheckWrapper className="check-wrapper" visible={selected}>
                                <ActionCheckThin className="checkmark" fill="#545658" height="100%" width="100%"/>
                            </CheckWrapper>
                            <FilterOptionText key={e} className="filter-option-text">{e}</FilterOptionText>
                        </FilterOptionWrapper>
                    </FilterOptionContainer>
                )
            })
        )
    }
    
    render() {
        return(
            <FilterButtonWrapper className="filter-button-wrapper">
                <FilterButton className="filter-button">
                    <FilterButtonInnerWrapper className="filter-button-inner-wrapper" onClick={() => this.props.toggleMenu("roomMenu")} >
                        <FilterButtonInnerCont className="filter-button-inner-cont">
                            <FilterButtonText className="filter-button-text">{this.state.selectedRoom ? this.state.selectedRoom : 'Room'}</FilterButtonText>
                            <FilterButtonArrow className="filter-button-arrow" open={this.props.roomMenu}>
                                <ArrowsMinimalDown className="downArrow" style={{width: '13px'}} color="#545658" />
                            </FilterButtonArrow>
                        </FilterButtonInnerCont>
                    </FilterButtonInnerWrapper>
                    <RoomDropDown className="drop-down-menu" open={this.props.roomMenu}>
                        <FilterWrapper className="filter-wrapper">
                        {this.renderRoomFilter()}
                        </FilterWrapper>
                    </RoomDropDown>
                </FilterButton>
                <FilterButton className="filter-button">
                    <FilterButtonInnerWrapper onClick={() => this.props.toggleMenu("styleMenu")}>
                        <FilterButtonInnerCont className="filter-button-inner-cont">
                            <FilterButtonText className="filter-button-text">Style</FilterButtonText>
                            <FilterButtonArrow className="filter-button-arrow" open={this.props.styleMenu}>
                                <ArrowsMinimalDown 
                                    className="downArrow" 
                                    style={{width: '13px'}} 
                                    color="#545658" />
                            </FilterButtonArrow>
                        </FilterButtonInnerCont>
                    </FilterButtonInnerWrapper>
                    <StyleDropDown 
                        onClick={(e) => e.preventDefault()} 
                        className="drop-down-menu" 
                        open={this.props.styleMenu}
                    >
                        
                    </StyleDropDown>
                </FilterButton>
            </FilterButtonWrapper>
        )
    }
}

export default FilterButtons;
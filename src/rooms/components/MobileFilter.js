import React, { Component } from 'react'
import { MobFilterWrapper, MobFilterHeader, HeaderTextWrapper, HeaderText, HeaderClear, RoomsFilterContainer, RoomsFilterWrapper, RoomsFilterLabel, RoomsFilterOptionsCont, MobCheckWrapper, MobFilterOptionText, MobFilterFooter, ResultsButton, CloseButtonWrapper, CloseButtonText } from './styled-components/MobileFilter';
import {filterData} from '../utils';
import ActionCheckThin from 'overstock-component-library/lib/Icons/action/Check_Thin';
import ActionCloseThin from 'overstock-component-library/lib/Icons/action/Close_Thin';

class MobileFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            pending: ''
        }
    }
    handleRoomSelect(room){
        this.setState({pending: room})
    }
    applyResults() {
        this.state.pending !== this.props.selectedRoom && this.props.selectRoom(this.state.pending);
        this.props.toggleMenu('mobileMenu');
        this.setState({pending: ''});
    }
    clearFilters() {
        this.setState({pending: ''})
        this.props.selectRoom('');
    }
    renderRoomsFilters() {
        let {rooms} = filterData;
        return(
            <RoomsFilterContainer className="rooms-filter-container">
                <RoomsFilterWrapper className="rooms-filter-wrapper">
                    <RoomsFilterLabel className="rooms-filter-label">Rooms</RoomsFilterLabel>
                    {rooms.map(e => {
                        let selected = this.state.pending ? e === this.state.pending : e === this.props.selectedRoom;
                        return(
                            <RoomsFilterOptionsCont key={e} className="rooms-filter-opt-cont" onClick={this.handleRoomSelect.bind(this, e)}>
                                <MobCheckWrapper className="mob-check-wrapper" visible={selected}>
                                    <ActionCheckThin className="mob-checkmark" fill="#545658" height="100%" width="100%"/>
                                </MobCheckWrapper>
                                <MobFilterOptionText  className="mob-filter-option-text" bold={selected}>{e}</MobFilterOptionText>
                            </RoomsFilterOptionsCont>
                        )
                    })}
                </RoomsFilterWrapper>
            </RoomsFilterContainer>
        )
    }
    render(){
        return(
            <MobFilterWrapper className="mob-filter-wrapper" visible={this.props.visible}>
                    <MobFilterHeader className="mob-filter-header">
                        <HeaderTextWrapper className="header-text-wrapper">
                            <HeaderText>Filters</HeaderText>
                            <HeaderClear className="mob-header-clear" onClick={() => this.clearFilters()}>Clear</HeaderClear>
                        </HeaderTextWrapper>
                    </MobFilterHeader>
                    {this.renderRoomsFilters()}
                    <MobFilterFooter className="mob-filter-footer">
                        <CloseButtonWrapper className="close-button-wrapper" onClick={() => this.props.toggleMenu('mobileMenu')}>
                            <ActionCloseThin className="close-logo" height="16px" fill="#545658"/>
                            <CloseButtonText className="close-button-text">Close</CloseButtonText>
                        </CloseButtonWrapper>
                        <ResultsButton onClick={() => this.applyResults()}>Show Results</ResultsButton>
                    </MobFilterFooter>
            </MobFilterWrapper>
        )
    }
}

export default MobileFilter;
import React, { Component } from 'react'
import { MobFilterWrapper, MobFilterHeader, HeaderTextWrapper, HeaderText, HeaderClear, RoomsFilterContainer, RoomsFilterWrapper, RoomsFilterLabel, RoomsFilterOptionsCont, MobCheckWrapper, MobFilterOptionText, MobFilterFooter, ResultsButton, CloseButtonWrapper, CloseButtonText, ShowMoreRoomsButton } from './styled-components/MobileFilter';
import {filterData} from '../utils';
import ActionCheckThin from 'overstock-component-library/lib/Icons/action/Check_Thin';
import ActionCloseThin from 'overstock-component-library/lib/Icons/action/Close_Thin';

class MobileFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            pending: '',
            showMoreRooms: true,
            clearedRoom: ''
        }
        this.showMoreRooms = this.showMoreRooms.bind(this);
        this.hideMoreRooms = this.hideMoreRooms.bind(this);
        this.resetClearedRoom = this.resetClearedRoom.bind(this);
    }
    applyResults() {
        this.state.pending !== this.props.selectedRoom && this.props.selectRoom(this.state.pending);
        this.props.toggleMenu('mobileMenu');
        this.setState({pending: '', showMoreRooms: true, clearedRoom: ''});
    }
    clearFilters() {
        this.setState({pending: '', clearedRoom: this.props.selectedRoom})
        // this.props.selectRoom('');
    }
    handleRoomSelect(room){
        this.setState({pending: room, clearedRoom: ''})
    }
    showMoreRooms() {
        this.setState({showMoreRooms: true})
    }
    hideMoreRooms() {
        this.setState({showMoreRooms: false})
    }
    resetClearedRoom() {
        if(this.state.clearedRoom && !this.state.pending) {
            this.props.selectRoom(this.state.clearedRoom);
            this.props.toggleMenu('mobileMenu');
            this.setState({clearedRoom: '', pending: ''});
        } else if(!this.state.clearedRoom && this.state.pending) {
            this.props.toggleMenu('mobileMenu');
            this.setState({pending: ''})
        } else {
            this.props.toggleMenu('mobileMenu');
        }
    }

    renderRoomsFilters() {
        let rooms = filterData.rooms.slice()
        const index = rooms.indexOf(this.props.selectedRoom)
        const modifiedRooms = index !== -1 ? rooms.splice(rooms.indexOf(this.props.selectedRoom), 1).concat(rooms) : rooms;
        return(
            <RoomsFilterContainer className="rooms-filter-container">
                <RoomsFilterWrapper className="rooms-filter-wrapper" showMore={this.state.showMoreRooms}>
                    <RoomsFilterLabel className="rooms-filter-label">Rooms</RoomsFilterLabel>
                    {modifiedRooms.map(e => {
                        let selected = this.state.pending && !this.state.clearedRoom 
                        ? 
                        e === this.state.pending 
                        : 
                        (!this.state.pending && this.state.clearedRoom ? false : e === this.props.selectedRoom);
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
                <ShowMoreRoomsButton 
                    className="show-more-rooms-button"
                    onClick={this.hideMoreRooms} 
                    showMore={this.state.showMoreRooms}>
                    Show more rooms
                </ShowMoreRoomsButton>
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
                        <CloseButtonWrapper className="close-button-wrapper" onClick={this.resetClearedRoom}>
                            <ActionCloseThin className="close-logo" height="16px" fill="#545658"/>
                            <CloseButtonText className="close-button-text">Close</CloseButtonText>
                        </CloseButtonWrapper>
                        <ResultsButton className="results-button" onClick={() => this.applyResults()}>Show Results</ResultsButton>
                    </MobFilterFooter>
            </MobFilterWrapper>
        )
    }
}

export default MobileFilter;
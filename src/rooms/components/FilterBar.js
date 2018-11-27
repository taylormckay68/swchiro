import React, { Component } from 'react'
import {FilterBarWrapper, ArrowWrapper, RoomIdeasText, TextWrapper, MainText, FixedFilterButton, FilterBarContainer} from './styled-components/FilterBar';
// import ArrowsMinimalLeft from 'overstock-component-library/lib/Icons/arrows/Minimal_Left';
import FilterButtons from './FilterButtons';

class FilterBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render() {
        return(
            <FilterBarContainer className="filter-bar-container">
                <FilterBarWrapper className="filter-bar-wrapper">
                    <TextWrapper className="text-wrapper">
                        <MainText className="main-text">
                        {this.props.selectedRoom 
                            ? (this.props.selectedStyles.length >= 1 
                                ? `${this.props.selectedStyles[0]} ${this.props.selectedRoom}`
                                : this.props.selectedRoom) 
                            : (this.props.selectedStyles.length > 1 
                                ? `${this.props.selectedStyles[0]} ${this.props.selectedStyles[1]}`
                                : (this.props.selectedStyles.length === 1 
                                    ? this.props.selectedStyles[0] 
                                    : 'Room'))} Ideas
                        </MainText>
                    </TextWrapper>
                    <FilterButtons {...this.props}/>
                    <FixedFilterButton onClick={() => this.props.toggleMenu('mobileMenu')} className="fixed-filter-button">Filters</FixedFilterButton>
                </FilterBarWrapper>
            </FilterBarContainer>
        )
    }
}

export default FilterBar;
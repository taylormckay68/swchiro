import React, { Component } from 'react'
import {
  FilterButtonWrapper,
  FilterButton,
  FilterButtonInnerCont,
  FilterButtonText,
  FilterButtonArrow,
  Dropdown,
  FilterButtonInnerWrapper
} from './styled-components/FilterButtons'
import {
  FilterWrapper,
  FilterOptionWrapper,
  FilterOptionContainer,
  FilterOptionText,
  CheckWrapper,
  StyleFilterContainer
} from './styled-components/Filters'
import ArrowsMinimalDown from 'overstock-component-library/lib/Icons/arrows/Minimal_Down'
import ActionCheckThin from 'overstock-component-library/lib/Icons/action/Check_Thin'
import { filterData } from '../utils'

class FilterButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  renderRoomFilter() {
    let rooms = filterData.rooms.slice()
    const index = rooms.indexOf(this.props.selectedRoom)
    const modifiedRooms =
      index !== -1
        ? rooms.splice(rooms.indexOf(this.props.selectedRoom), 1).concat(rooms)
        : rooms
    return modifiedRooms.map((e, i, arr) => {
      let selected = e === this.props.selectedRoom
      return (
        <FilterOptionContainer
          key={e}
          className="filter-option-container"
          onClick={this.props.selectRoom.bind(this, e)}
        >
          <FilterOptionWrapper className="filter-option-wrapper">
            <CheckWrapper className="check-wrapper" visible={selected}>
              <ActionCheckThin
                className="checkmark"
                fill="#545658"
                height="100%"
                width="100%"
              />
            </CheckWrapper>
            <FilterOptionText
              key={e}
              className="filter-option-text"
              bold={selected}
            >
              {e}
            </FilterOptionText>
          </FilterOptionWrapper>
        </FilterOptionContainer>
      )
    })
  }
  renderStyleFilter() {
    return (
      <StyleFilterContainer>
        {filterData.styles['all-rooms'].map((s, i) => {
          const selected = this.props.selectedStyles.indexOf(s) !== -1

          return (
            <FilterOptionContainer
              key={i}
              onClick={() => this.props.toggleStyle(s)}
            >
              <FilterOptionWrapper>
                <CheckWrapper visible={selected}>
                  <ActionCheckThin
                    className="checkmark"
                    fill="#545658"
                    height="100%"
                    width="100%"
                  />
                </CheckWrapper>
                <FilterOptionText
                  key={s}
                  className="filter-option-text"
                  bold={selected}
                >
                  {s}
                </FilterOptionText>
              </FilterOptionWrapper>
            </FilterOptionContainer>
          )
        })}
      </StyleFilterContainer>
    )
  }

  render() {
    return (
      <FilterButtonWrapper className="filter-button-wrapper">
        <FilterButton className="filter-button">
          <FilterButtonInnerWrapper
            className="filter-button-inner-wrapper"
            onClick={() => this.props.toggleMenu('roomMenu')}
          >
            <FilterButtonInnerCont className="filter-button-inner-cont">
              <FilterButtonText className="filter-button-text">
                {this.props.selectedRoom ? this.props.selectedRoom : 'Room'}
              </FilterButtonText>
              <FilterButtonArrow
                className="filter-button-arrow"
                open={this.props.roomMenu}
              >
                <ArrowsMinimalDown
                  className="downArrow"
                  style={{ width: '13px' }}
                  color="#545658"
                />
              </FilterButtonArrow>
            </FilterButtonInnerCont>
          </FilterButtonInnerWrapper>
          <Dropdown className="room-menu" open={this.props.roomMenu}>
            <FilterWrapper className="filter-wrapper">
              {this.renderRoomFilter()}
            </FilterWrapper>
          </Dropdown>
        </FilterButton>
        <FilterButton className="filter-button">
          <FilterButtonInnerWrapper
            onClick={() => this.props.toggleMenu('styleMenu')}
          >
            <FilterButtonInnerCont className="filter-button-inner-cont">
              <FilterButtonText className="filter-button-text">
                Style
              </FilterButtonText>
              <FilterButtonArrow
                className="filter-button-arrow"
                open={this.props.styleMenu}
              >
                <ArrowsMinimalDown
                  className="downArrow"
                  style={{ width: '13px' }}
                  color="#545658"
                />
              </FilterButtonArrow>
            </FilterButtonInnerCont>
          </FilterButtonInnerWrapper>
          <Dropdown
            onClick={e => e.preventDefault()}
            className="style-menu"
            open={this.props.styleMenu}
          >
            <FilterWrapper>{this.renderStyleFilter()}</FilterWrapper>
          </Dropdown>
        </FilterButton>
      </FilterButtonWrapper>
    )
  }
}

export default FilterButtons

import React from 'react'
import ArrowsMinimalDown from 'overstock-component-library/lib/Icons/arrows/Minimal_Down'
import {
  FilterButtonInnerCont,
  FilterButtonText,
  FilterButtonArrow,
  FilterButtonInnerWrapper
} from './styled-components/FilterButtons'

export default ({ roomMenu, selectedRoom, styleMenu, toggleMenu, type }) => (
  <FilterButtonInnerWrapper
    className="filter-button-inner-wrapper"
    onClick={() => toggleMenu(type === 'room' ? 'roomMenu' : 'styleMenu')}
  >
    <FilterButtonInnerCont className="filter-button-inner-cont">
      <FilterButtonText className="filter-button-text">
        {type === 'room' ? (selectedRoom ? selectedRoom : 'Room') : 'Style'}
      </FilterButtonText>
      <FilterButtonArrow
        className="filter-button-arrow"
        open={type === 'room' ? roomMenu : styleMenu}
      >
        <ArrowsMinimalDown
          className="downArrow"
          style={{ width: '13px' }}
          color="#545658"
        />
      </FilterButtonArrow>
    </FilterButtonInnerCont>
  </FilterButtonInnerWrapper>
)

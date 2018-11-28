import React from 'react'
import { filterData } from '../utils'
import ActionCheckThin from 'overstock-component-library/lib/Icons/action/Check_Thin'

import {
  CheckContainer,
  CheckWrapper,
  FilterOptionContainer,
  FilterOptionText,
  FilterOptionWrapper
} from './styled-components/Filters'

export default ({
  selectRoom,
  selectedRoom,
  selectedStyles,
  toggleStyle,
  type
}) => {
  let rooms = filterData.rooms.slice()
  const styles = filterData.styles['all-rooms']
  const index = rooms.indexOf(selectedRoom)
  const modifiedRooms =
    index !== -1
      ? rooms.splice(rooms.indexOf(selectedRoom), 1).concat(rooms)
      : rooms

  return (type === 'room' ? modifiedRooms : styles).map((e, i) => {
    const selected =
      type === 'room' ? e === selectedRoom : selectedStyles.indexOf(e) !== -1
    let modifiedRoom = selectedRoom ? selectedRoom.toLowerCase().replace(' ', '-') : '';
    const grayStyle = 
      modifiedRoom && type === 'style' ? filterData.styles[modifiedRoom].indexOf(e) === -1 : false;
    return (
      <FilterOptionContainer
        key={e}
        className="filter-option-container"
        onClick={
          type === 'room' ? selectRoom.bind(this, e) : (!grayStyle ? () => toggleStyle(e) : '')
        }
      >
        <FilterOptionWrapper 
          className="filter-option-wrapper"
          grayStyle={grayStyle}
          >
          {type === 'room' ? (
            <CheckWrapper className="check-wrapper" visible={selected}>
              <ActionCheckThin
                className="checkmark"
                fill="#545658"
                height="100%"
                width="100%"
              />
            </CheckWrapper>
          ) : (
            <CheckContainer className="check-container">
              <CheckWrapper className="check-wrapper" visible={selected}>
                <ActionCheckThin
                  className="checkmark"
                  fill="#545658"
                  height="100%"
                  width="100%"
                />
              </CheckWrapper>
            </CheckContainer>
          )}
          <FilterOptionText
            key={e}
            className="filter-option-text"
            bold={selected}
            grayStyle={grayStyle}
          >
            {e}
          </FilterOptionText>
        </FilterOptionWrapper>
      </FilterOptionContainer>
    )
  })
}

import React from 'react'
import ActionCheckThin from 'overstock-component-library/lib/Icons/action/Check_Thin'
import { filterData } from '../utils'

import {
  RoomsFilterContainer,
  RoomsFilterWrapper,
  RoomsFilterLabel,
  RoomsFilterOptionsCont,
  MobCheckWrapper,
  MobFilterOptionText,
  ToggleMore
} from './styled-components/MobileFilter'
import { CheckContainer } from './styled-components/Filters'

const renderCheckmark = visible => (
  <MobCheckWrapper className="mob-check-wrapper" visible={visible}>
    <ActionCheckThin
      className="mob-checkmark"
      fill="#545658"
      height="100%"
      width="100%"
    />
  </MobCheckWrapper>
)

export default ({
  arr,
  selected,
  selectFunction,
  showAll,
  toggleMore,
  type
}) => {
  const array = showAll ? arr : arr.slice(0, 5)
  return (
    <RoomsFilterContainer className="rooms-filter-container">
      <RoomsFilterWrapper>
        <RoomsFilterLabel>{type}</RoomsFilterLabel>
        {array.map(e => {
          let visible =
            type.toLowerCase() === 'rooms'
              ? e === selected
              : selected.indexOf(e) !== -1

          return (
            <RoomsFilterOptionsCont
              key={e}
              className="rooms-filter-opt-cont"
              onClick={selectFunction.bind(this, e)}
            >
              {type.toLowerCase() === 'rooms' ? (
                renderCheckmark(visible)
              ) : (
                <CheckContainer className="check-container">
                  {renderCheckmark(visible)}
                </CheckContainer>
              )}
              <MobFilterOptionText
                className="mob-filter-option-text"
                bold={visible}
              >
                {e}
              </MobFilterOptionText>
            </RoomsFilterOptionsCont>
          )
        })}
      </RoomsFilterWrapper>
      <ToggleMore onClick={() => toggleMore('showMore' + type)}>
        Show {showAll ? 'fewer' : 'more'} {type.toLowerCase()}
      </ToggleMore>
    </RoomsFilterContainer>
  )
}

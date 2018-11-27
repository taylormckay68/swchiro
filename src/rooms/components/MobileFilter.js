import React, { Component } from 'react'
import {
  MobFilterWrapper,
  MobFilterHeader,
  HeaderTextWrapper,
  HeaderText,
  HeaderClear,
  MobFilterFooter,
  MobileInnerWrapper,
  ResultsButton,
  CloseButtonWrapper,
  CloseButtonText
} from './styled-components/MobileFilter'
import ActionCloseThin from 'overstock-component-library/lib/Icons/action/Close_Thin'
import { filterData } from '../utils'
import MobileOptions from './MobileOptions'

class MobileFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clearedRoom: '',
      pending: props.selectedRoom || '',
      selectedStyles: props.selectedStyles || [],
      showMoreRooms: false,
      showMoreStyles: false
    }
  }
  applyResults = () => {
    this.props.selectFilter(this.state.pending, this.state.selectedStyles)
    this.props.toggleMenu('mobileMenu')
    this.setState({
      clearedRoom: ''
    })
  }
  clearFilters = () => {
    this.setState({
      pending: '',
      clearedRoom: this.props.selectedRoom,
      selectedStyles: []
    })
  }
  handleRoomSelect = room => {
    this.setState(state => ({
      pending: state.pending !== room ? room : '',
      clearedRoom: ''
    }))
  }
  handleStyleSelect = style => {
    this.setState(state => {
      const { selectedStyles: ss } = state
      const index = ss.indexOf(style)

      console.log(
        'ONE',
        ss,
        'TWO',
        ss.slice(0, index).concat(ss.slice(index + 1))
      )

      return {
        selectedStyles:
          index !== -1
            ? ss.slice(0, index).concat(ss.slice(index + 1))
            : [...ss, style]
      }
    })
  }
  toggleMore = key => this.setState(state => ({ [key]: !state[key] }))

  resetClearedRoom = () => {
    this.setState({
      clearedRoom: '',
      pending: this.props.selectedRoom,
      selectedStyles: this.props.selectedStyles
    })
    this.props.toggleMenu('mobileMenu')
    this.setState({ clearedRoom: '', pending: this.props.selectedRoom })
  }

  render() {
    let rooms = filterData.rooms.slice()
    const {
      applyResults,
      clearFilters,
      handleRoomSelect,
      handleStyleSelect,
      props: { selectedRoom, visible },
      resetClearedRoom,
      state: { pending, selectedStyles, showMoreRooms, showMoreStyles },
      toggleMore
    } = this
    const index = rooms.indexOf(selectedRoom)
    const modifiedRooms =
      index !== -1
        ? rooms.splice(rooms.indexOf(selectedRoom), 1).concat(rooms)
        : rooms
    const styles = filterData.styles['all-rooms']

    return (
      <MobFilterWrapper className="mob-filter-wrapper" visible={visible}>
        <MobileInnerWrapper>
          <MobFilterHeader className="mob-filter-header">
            <HeaderTextWrapper className="header-text-wrapper">
              <HeaderText>Filters</HeaderText>
              <HeaderClear
                className="mob-header-clear"
                onClick={() => clearFilters()}
              >
                Clear
              </HeaderClear>
            </HeaderTextWrapper>
          </MobFilterHeader>
          <MobileOptions
            arr={modifiedRooms}
            selected={pending}
            selectFunction={handleRoomSelect}
            showAll={showMoreRooms}
            toggleMore={toggleMore}
            type="Rooms"
          />
          <MobileOptions
            arr={styles}
            selected={selectedStyles}
            selectFunction={handleStyleSelect}
            showAll={showMoreStyles}
            toggleMore={toggleMore}
            type="Styles"
          />
        </MobileInnerWrapper>
        <MobFilterFooter className="mob-filter-footer">
          <CloseButtonWrapper
            className="close-button-wrapper"
            onClick={resetClearedRoom}
          >
            <ActionCloseThin
              className="close-logo"
              height="16px"
              fill="#545658"
            />
            <CloseButtonText className="close-button-text">
              Close
            </CloseButtonText>
          </CloseButtonWrapper>
          <ResultsButton
            className="results-button"
            onClick={() => applyResults()}
          >
            Show Results
          </ResultsButton>
        </MobFilterFooter>
      </MobFilterWrapper>
    )
  }
}

export default MobileFilter

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  RoomIdeasDiv,
  OffClick,
  LoadMore,
  HeroImg
} from './styled-components/RoomIdeas'
import FilterBar from './FilterBar'
import MobileFilter from './MobileFilter'
import { fetchModsData, fetchNextModsData } from './redux/actions'
import ProductGrid from 'lpo-component-library/module/ProductGrid'
import { config, styleData } from '../utils'
import LoadingLogo from 'lpo-component-library/module/LoadingLogo'

class RoomIdeas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenu: false,
      roomMenu: false,
      style: this.props.data.style,
      styleMenu: false,
      selectedRoom: this.props.data.room || '',
      selectedStyles: this.props.data.style || []
    }
  }

  loadMore = () => {
    this.props.nextRoomsData &&
      this.props.fetchNextModsData(
        this.props.nextRoomsData,
        this.state.selectedRoom
      )
  }
  selectRoom = room => {
    const rm = room === this.state.selectedRoom ? '' : room
    this.setState({ selectedRoom: rm , selectedStyles: []})
    room && this.props.fetchModsData(rm, [])
    this.toggleMenu('roomMenu')
  }
  mobileSelectFilter = (room, styles) => {
    this.props.fetchModsData(room, styles)
    this.setState({ selectedRoom: room, selectedStyles: styles })
  }

  setStyles = styles =>
    this.setState({ selectedStyles: styles }, () => {
      this.props.fetchModsData(
        this.state.selectedRoom,
        this.state.selectedStyles
      )
    })

  offClick = () => {
    this.setState({
      roomMenu: false,
      styleMenu: false
    })
  }
  toggleMenu = menu => {
    if (menu === 'mobileMenu') {
      this.setState({
        mobileMenu: !this.state.mobileMenu,
        roomMenu: false,
        styleMenu: false
      })
    }
    if (menu === 'roomMenu')
      this.setState({
        mobileMenu: false,
        roomMenu: !this.state.roomMenu,
        styleMenu: false
      })
    if (menu === 'styleMenu')
      this.setState({
        mobileMenu: false,
        roomMenu: false,
        styleMenu: !this.state.styleMenu
      })
  }

  // componentDidMount(){
  //     window.onpopstate = () => {
  //         console.log('url changed');
  //     }
  // }

  render() {
    config.data =
      this.props && this.props.modsData
        ? this.props.modsData
        : this.props.data.data
    return (
      <RoomIdeasDiv className="room-ideas-div">
        {this.state.roomMenu || this.state.styleMenu ? (
          <OffClick onClick={this.offClick} className="offclick" />
        ) : (
          ''
        )}
        <HeroImg alt="Explore hundreds of room ideas to inspire your style"/>
        <MobileFilter
          className="mobile-filter"
          visible={this.state.mobileMenu}
          toggleMenu={this.toggleMenu}
          selectedRoom={this.state.selectedRoom}
          selectedStyles={this.state.selectedStyles}
          selectFilter={this.mobileSelectFilter}
          ref="mobileFilter"
        />
        <FilterBar
          {...this.props}
          setStyles={this.setStyles}
          toggleMenu={this.toggleMenu}
          roomMenu={this.state.roomMenu}
          styleMenu={this.state.styleMenu}
          selectedRoom={this.state.selectedRoom}
          selectedStyles={this.state.selectedStyles}
          selectRoom={this.selectRoom}
        />
        {this.props.isFetching ? (
          <LoadingLogo center />
        ) : (
          <ProductGrid className="product-grid" config={config} />
        )}
        {/* {this.props.isFetchingNext && <LoadingLogo center/> } */}
        {this.props.nextRoomsData &&
          !this.props.isFetchingNext &&
          !this.props.isFetching && (
            <LoadMore onClick={this.loadMore} className="load-more">
              Load More Rooms{' '}
            </LoadMore>
          )}
      </RoomIdeasDiv>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps,
  { fetchModsData, fetchNextModsData }
)(RoomIdeas)

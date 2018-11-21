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
      selectedRoom: this.props.data.room || ''
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.offClick = this.offClick.bind(this)
    this.selectRoom = this.selectRoom.bind(this)
    this.mobileSelectRoom = this.mobileSelectRoom.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  loadMore() {
    this.props.nextRoomsData &&
      this.props.fetchNextModsData(
        this.props.nextRoomsData,
        this.state.selectedRoom
      )
  }
  selectRoom(room) {
    room && this.props.fetchModsData(room)
    this.setState({ selectedRoom: room })
    this.toggleMenu('roomMenu')
  }
  mobileSelectRoom(room) {
    this.props.fetchModsData(room)
    this.setState({ selectedRoom: room })
  }

  offClick() {
    this.setState({
      roomMenu: false,
      styleMenu: false
    })
  }
  toggleMenu(menu) {
    if (menu === 'mobileMenu') {
      this.setState({
        mobileMenu: !this.state.mobileMenu,
        roomMenu: false,
        styleMenu: false
      })
      this.state.mobileMenu && this.refs.mobileFilter.showMoreRooms()
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
        <HeroImg />
        <MobileFilter
          className="mobile-filter"
          visible={this.state.mobileMenu}
          toggleMenu={this.toggleMenu}
          selectedRoom={this.state.selectedRoom}
          selectRoom={this.mobileSelectRoom}
          ref="mobileFilter"
        />
        <FilterBar
          {...this.props}
          toggleMenu={this.toggleMenu}
          roomMenu={this.state.roomMenu}
          styleMenu={this.state.styleMenu}
          selectedRoom={this.state.selectedRoom}
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

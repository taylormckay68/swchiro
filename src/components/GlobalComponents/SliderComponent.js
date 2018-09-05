import React, { Component } from 'react';
import Swipeable from 'react-swipeable';
import Draggable from 'react-draggable';
import shortid from 'shortid';
import { throttle } from 'lodash';
import withSizes from 'react-sizes';
import ReactResizeDetector from 'react-resize-detector';
import ArrowButton from './../GlobalComponents/ArrowButton';
import { SliderContainerSlotCount2, SliderWrapperSlotCount2, SliderSlotSlotCount2, OverflowWrapperSlotCount2 } from './styled-components/SliderComponentSlotCount2';
import { SliderContainerAll, SliderWrapperAll, SliderSlotAll, OverflowWrapperAll } from './styled-components/SliderComponentAll';
import PropTypes from 'prop-types';


class SliderComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            position: 0,
            sliding: false,
            slotWidth: null,
            diff: 0
        };
    }

    slideSlot = (position) => {
        this.setState({
            sliding: true,
            position
        });
        setTimeout(() => {
            this.setState({sliding: false})
        }, 1000);
    };

    showNextSlot = () => {
        const { position } = this.state;
        const slots = this.props.data;
        if(this.props.slotCount == 2){
          if(this.props.firstBp || this.props.secondBp) {
              if(position < (slots.length - 1)) this.slideSlot(position + 1);
          } else {
              if(position + 2 < slots.length) this.slideSlot(position + 1);
          }
        } else {
          if(this.props.firstBp || this.props.secondBp) {
              if(position + 2 < (slots.length)) this.slideSlot(position + 1);
          } else if(this.props.thirdBp) {
              if(position + 3 < (slots.length)) this.slideSlot(position + 1);
          } else {
              if(position + 4 < slots.length) this.slideSlot(position + 1);
          }
        }

    };

    showPrevSlot = () => {
        const { position } = this.state;
        if(position >= 1) this.slideSlot(position - 1);
    };

    handleSwipe = throttle((isNext) => {
       if(isNext) this.showNextSlot();
       else this.showPrevSlot();
    }, 1000, { trailing: false});

    mapSlots(props) {
        const Slot = this.props.slotComponent;
        const slots = this.props.data;
        const slotCount = this.props.slotCount;
        var self = this;
        return (
          slots.map(function(slot, idx){
            if(slotCount == 2){
              return (
                <SliderSlotSlotCount2 id={idx} key={shortid.generate()} slots={slots.length} slotWidth={self.state.slotWidth}>
                  <Slot slotdata={slot}/>
                </SliderSlotSlotCount2>
              )
            } else {
              return (
                <SliderSlotAll id={idx} key={shortid.generate()} slots={slots.length} slotWidth={self.state.slotWidth}>
                  <Slot slotdata={slot}/>
                </SliderSlotAll>
              )
            }
          })
        );
    }

    onResize = () => {
        if(this.props.slotCount == 2){
          if(this.props.firstBp) {
              this.calcSlotWidth(24, 24, 0, 1);
          } else if(this.props.secondBp) {
              this.calcSlotWidth(24, 24, 0, 1);
          } else if(this.props.thirdBp) {
              this.calcSlotWidth(24, 24, 16, 2);
          } else if(this.props.fourthBp) {
              this.calcSlotWidth(24, 24, 16, 2);
          }
        } else {
          if(this.props.firstBp) {
              this.calcSlotWidth(24, 24, 12, 2);
          } else if(this.props.secondBp) {
              this.calcSlotWidth(24, 24, 16, 2);
          } else if(this.props.thirdBp) {
              this.calcSlotWidth(24, 24, 32, 3);
          } else if(this.props.fourthBp) {
              this.calcSlotWidth(24, 24, 48, 4);
          }
        }
    };

    calcSlotWidth = (leftMargin, rightMargin, middleMargin, slots) => {
        const sliderWidth = this.slider.clientWidth;
        const slotWidth = (sliderWidth - leftMargin - rightMargin - middleMargin) / slots;
        const slotWidthPercentage = (slotWidth / (sliderWidth - leftMargin)) * 100;
        this.setState({ slotWidth: slotWidthPercentage });
    };

    renderSlider() {
        const { sliding, position } = this.state;
        const images  = this.props.data.length;
        if(this.props.slotCount == 2){
          return (
              <SliderWrapperSlotCount2 className="handle" display={this.props.display} innerRef={slider => this.slider = slider }>
                  <ReactResizeDetector handleWidth={true} onResize={this.onResize}/>
                  <OverflowWrapperSlotCount2 display={this.props.display}>
                      <SliderContainerSlotCount2 position={position} sliding={sliding} slotWidth={this.state.slotWidth}>
                          {this.mapSlots()}
                      </SliderContainerSlotCount2>
                  </OverflowWrapperSlotCount2>
                  <ArrowButton bump30={this.props.slotCount == 2 ? true : null} images={images} position={position} onClick={()=> this.handleSwipe(true)} right={true} display={true}/>
                  <ArrowButton bump30={this.props.slotCount == 2 ? true : null} images={images} position={position} onClick={()=> this.handleSwipe()} right={false}/>
              </SliderWrapperSlotCount2>
          );
        } else {
          return (
              <SliderWrapperAll className="handle" display={this.props.display} innerRef={slider => this.slider = slider }>
                  <ReactResizeDetector handleWidth={true} onResize={this.onResize}/>
                  <OverflowWrapperAll display={this.props.display}>
                      <SliderContainerAll position={position} sliding={sliding} slotWidth={this.state.slotWidth}>
                          {this.mapSlots()}
                      </SliderContainerAll>
                  </OverflowWrapperAll>
                  <ArrowButton bump30={this.props.slotCount == 2 ? true : null} images={images} position={position} onClick={()=> this.handleSwipe(true)} right={true} display={true}/>
                  <ArrowButton bump30={this.props.slotCount == 2 ? true : null} images={images} position={position} onClick={()=> this.handleSwipe()} right={false}/>
              </SliderWrapperAll>
          );
        }
    }
    handleDrag = throttle((e) => {
        this.setState({diff: e.x});
    }, 1000, {trailing: false})

    handleEnd = throttle((e) => {
        this.setState({diff: this.state.diff - e.x});
        if(this.state.diff > 0) this.showNextSlot();
        else if(this.state.diff < 0) this.showPrevSlot();
        this.setState({diff: 0});
    }, 1000, {trailing: false})

    render() {
        const { isMobile } = this.props;
        const images = this.props.data;

        if(isMobile && images.length > 1) {
            return (
                <Swipeable onSwipingLeft={() => this.handleSwipe(true)} onSwipingRight={() => this.handleSwipe()}>
                    {this.renderSlider()}
                </Swipeable>
            )
        } else {
          return (
              <Draggable bounds={{left: 0, top: 0, right: 0, bottom: 0}} onStop={this.handleEnd} onDrag={this.handleDrag}>
                {this.renderSlider()}
              </Draggable>
          )
        }
    }
}

SliderComponent.propTypes = {
    display: PropTypes.bool,
};

const os = window.os || {};
  const isTouchDevice = os.isTouchDevice || false;
const mapSizestoProbs = ({ width }) => ({
    firstBp: width < 570,
    secondBp: width < 744,
    thirdBp: width <  970,
    fourthBp: width < 1128,
    isMobile: isTouchDevice
});

export default withSizes(mapSizestoProbs)(SliderComponent);

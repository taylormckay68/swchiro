import styled from 'styled-components';

export const SliderWrapperSlotCount2 = styled.div`
    height: auto;
    position: relative;
    background: ${props => props.display ? '#FFFFFF' : '#E7E8EA'};
    transition: ${props => props.display ? 'background 500ms ease 1000ms' : 'none'};
    @media only screen and (min-width: 1128px) {
        width: 1032px;
        margin: auto;
    }
`;

export const OverflowWrapperSlotCount2 = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
    max-height: ${props => props.display ? '400px' : '0'};
    opacity: ${props => props.display ? '1' : '0'};
    padding: ${props => props.display ? '16px 0' : '0'};
    transition: ${props => props.display ? 'max-height 1000ms ease-out, opacity 500ms ease 500ms' : 'none'};
`;

export const SliderContainerSlotCount2 = styled.div`
    display: flex;
    margin-left: 24px;

    transition: ${(props) => props.sliding ? 'transform 1s ease' : 'none'};

    transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 12px` : '-91.892% - 12px'})))`};

    @media only screen and (min-width: 570px) {
        transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 12px` : '-95.604396% - 12px'})))`};
    }

    @media only screen and (min-width: 744px) {
        transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 16px` : '-47.222222% - 16px'})))`};
    }

    @media only screen and (min-width: 970px) {
        transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 16px` : '-47.885835% - 16px'})))`};
    }

    @media only screen and (min-width: 1128px) {
        transform: ${(props) => `translateX(calc(${props.position}*(-49.224806% - 16px)))`};
        margin-left: 0;
    }
`;

export const SliderSlotSlotCount2 = styled.div`
    position: relative;
    flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '91.891892%'};
    min-height: 131px;
    margin-right: ${(props) => props.slots === 1 ? '24px' : '12px'};
    height: auto;
    flex-flow: column;

    @media only screen and (min-width: 570px) {
        flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '95.604396%'};
    }

    @media only screen and (min-width: 744px) {
        flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '47.222222%'};
        margin-right: ${(props) => (props.slots === 1) || (props.slots === 2 && props.id === 1) ? '24px' : '16px'};
    }

    @media only screen and (min-width: 970px) {
        flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '47.885835%'};
    }

    @media only screen and (min-width: 1128px) {
        flex: 1 0 49.224806%;
        margin-right: ${(props) => props.slots === 1 ? '0' : '16px'}
    }
`;

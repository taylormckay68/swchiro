import styled from 'styled-components';

export const SliderWrapperAll = styled.div`
    height: auto;
    position: relative;
    background: ${props => props.display ? '#FFFFFF' : '#E7E8EA'};
    transition: ${props => props.display ? 'background 500ms ease 1000ms' : 'none'};
    opacity: ${props => props.display ? '1' : '0'};
    @media only screen and (min-width: 1128px) {
        width: 1032px;
        margin: auto;
    }
`;

export const OverflowWrapperAll = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
    max-height: ${props => props.display ? '400px' : '0'};
    opacity: ${props => props.display ? '1' : '0'};
    padding: ${props => props.display ? '16px 0' : '0'};
    transition: ${props => props.display ? 'max-height 1000ms ease-out, opacity 500ms ease 500ms' : 'none'};
`;

export const SliderContainerAll = styled.div`
   display: flex;
    margin-left: 24px;

    transition: ${props => props.sliding ? 'transform 1s ease' : 'none'};

    transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 12px` : '-43.918919% - 12px'})))`};

     @media only screen and (min-width: 570px) {
        transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 16px` : '-46.336996% - 16px'})))`};
    }

    @media only screen and (min-width: 744px) {
        transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 16px` : '-30.694444% - 16px'})))`};
    }

    @media only screen and (min-width: 970px) {
        transform: ${(props) => `translateX(calc(${props.position}*(${props.slotWidth ? `-${props.slotWidth}% - 16px` : '-23.044397% - 16px'})))`};
    }

    @media only screen and (min-width: 1128px) {
        margin-left: 0px;
        transform: ${(props) => `translateX(calc(${props.position}*(-23.837209% - 16px)))`};
    }
`;

export const SliderSlotAll = styled.div`
    position: relative;
    flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '43.918919%'};
    margin-right: 12px;
    height: inherit;
    flex-flow: column;

     @media only screen and (min-width: 570px) {
        flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '46.336996%'};
        margin-right: 16px;
     }
    @media only screen and (min-width: 744px) {
        flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '30.694444%'};
        margin-right: 16px;
    }

    @media only screen and (min-width: 970px) {
        flex: 1 0 ${(props) => props.slotWidth ? `${props.slotWidth}%` : '23.044397%'};
    }

    @media only screen and (min-width: 1128px) {
        flex: 1 0 23.837209%;
        margin-right: ${(props) => props.slots === 1 ? '0' : '16px'}
    }
`;

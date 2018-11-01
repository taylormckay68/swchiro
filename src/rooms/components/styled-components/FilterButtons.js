import styled from 'styled-components';

export const FilterButton = styled.div`
    height: 44px;
    min-width: 100px;
    border-radius: 22px;
    border: solid 1px #d5d5d5;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    &:nth-child(n+2){
        margin-left: 8px;
    }
    &:hover{
        background-color: #0272a2;
        div {
            color: #ffffff;
        }
        .downArrow polyline {
            stroke: #ffffff;
        }
    } 
`
export const FilterButtonArrow = styled.div`
    margin-right: 16px;
    transform: ${props => props.open && 'rotate(180deg)'};
`
export const FilterButtonInnerCont = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
    justify-content: space-between;
    width: 100%;
`
export const FilterButtonInnerWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`
export const FilterButtonText = styled.div`
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #545658;
    margin-right: 8px;
`
export const FilterButtonWrapper = styled.div`
    display: none;
    margin-top: 16px;
    z-index: 4;
    @media(min-width: 569px) {
        display: flex;
    }
    @media(min-width:743px) {
        align-items: flex-end;
    }
`
//Drop Downs
export const RoomDropDown = styled.div`
    height: ${props => props.open ? '272px' : '0px'};
    width: 231px;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    position: fixed;
    background-color: #f5f5f5;
    position: absolute;
    right: 0;
    top: 61px;
    transition: height .3s;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 4px;
    z-index: 4;
    -webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    }
    -webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    }
    @media(max-width:743px) {
        left: 0
    }
`
export const StyleDropDown = styled.div`
    height: ${props => props.open ? '288px' : '0px'};
    width: 231px;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    position: fixed;
    background-color: #f5f5f5;
    position: absolute;
    right: 0;
    top: 61px;
    transition: height .3s ;
    border-radius: 4px;
    z-index: 4;
    padding: 4px;
    @media(max-width:743px) {
        left: 0;
    }
`
import styled from 'styled-components';

export const FilterButton = styled.div`
    height: 44px;
    width: 100px;
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
`
export const FilterButtonInnerCont = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
    justify-content: space-between;
    width: 100%;
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
`
export const FilterButtonWrapper = styled.div`
    display: none;
    margin-top: 16px;
    @media(min-width: 569px) {
        display: flex;
    }
    @media(min-width:743px) {
        align-items: flex-end;
    }
`
//Drop Downs
export const ColorDropDown = styled.div`
    height: ${props => props.open ? '256px' : '0px'};
    width: 231px;
    position: fixed;
    background: black;
    position: absolute;
    right: 0;
    top: 60px;
    transition: height .3s ease-in;
`
export const RoomDropDown = styled.div`
    height: ${props => props.open ? '256px' : '0px'};
    width: 231px;
    position: fixed;
    background: black;
    position: absolute;
    right: 0;
    top: 60px;
    transition: height .3s ease-in;
`
export const StyleDropDown = styled.div`
    height: ${props => props.open ? '256px' : '0px'};
    width: 231px;
    position: fixed;
    background: black;
    position: absolute;
    right: 0;
    top: 60px;
    transition: height .3s ease-in;
`
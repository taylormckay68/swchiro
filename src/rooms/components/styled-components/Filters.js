import styled from 'styled-components';

export const CheckWrapper = styled.div`
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    /* display: ${props => !props.visible && 'none'}; */
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    padding-top: 4px;
`
export const FilterWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
`
export const FilterOptionContainer = styled.div`
    width: 100%;
    height: 48px;
    background-color: #f5f5f5;
    padding: 0 16px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    &:hover {
        background-color: #ffffff;
    }
`
export const FilterOptionWrapper = styled.div`
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center;
`
export const FilterOptionText = styled.p`
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #545658;
    margin-left: 8px;
`
//Style Filters
export const StyleFilterContainer = styled.div`
    height: 100%;
    width: 100%;
    background: blue;
`
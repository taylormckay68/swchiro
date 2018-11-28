import styled from 'styled-components';

export const CheckContainer = styled.div`
    height: 24px;
    width: 24px;
    border: 1px solid #f5f5f5;
    background-color: #ffffff;
    box-sizing: border-box;
`
export const CheckWrapper = styled.div`
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    /* display: ${props => !props.visible && 'none'}; */
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    position: relative;
    left: 2px;
    top: 2px;
`
export const StyleButtonWrapper = styled.div`
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
`
export const RoomFilterWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
`
export const FilterOptionContainer = styled.div`
    width: 100%;
    height: 48px;
    background-color: #f5f5f5;
    padding: 0 12px;
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
    cursor: ${props => props.grayStyle ? 'default' : 'pointer'};
`
export const FilterOptionText = styled.p`
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    line-height: 1.71;
    color: #545658;
    margin-left: 8px;
    opacity: ${props => props.grayStyle ? '.5' : '1'};
`
export const StyleFilterWrapper = styled.div`
    height: 264px;
    width: 100%;
`
//Style Filters
export const StyleFilterContainer = styled.div`
    height: 264px;
    width: 100%;
    overflow: scroll;
`
export const ApplyButton = styled.div`
    width: 38px;
    height: 24px;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.71;
    color: #0272a2;
`
export const ClearButton = styled.div`
    width: 33px;
    height: 24px;
    font-family: HelveticaNeue;
    font-size: 14px;
    line-height: 1.71;
    color: #545658;
`
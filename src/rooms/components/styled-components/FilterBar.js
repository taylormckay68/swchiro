import styled from 'styled-components';

export const FilterBarContainer = styled.div`
    width: 100vw;
    height: max-content;
    background-color: #f5f5f5;
    margin-bottom: 24px;
`
export const FilterBarWrapper = styled.div`
    max-width: 1780px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    margin: auto;
    @media(min-width:743px) {
        flex-direction: row;
        justify-content: space-between;
    }
    @media(min-width: 1128px) {
        padding: 16px 80px;
    }
`
export const FixedFilterButton = styled.div`
    position: fixed;
    width: calc(100vw - 80px);
    height: 48px;
    background-color: #f5f5f5;
    border-radius: 4px;
    bottom: 22px;
    left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: normal;
    color: #545658;
    z-index: 4;
    cursor: pointer;
    @media(min-width: 569px) {
        display: none;
    }
`
export const MainText = styled.div`
    height: 44px;
    font-family: HelveticaNeue;
    font-size: 28px;
    font-weight: bold;
    font-style: normal;
    color: #545658;
    line-height: 1.57;
`
export const TextWrapper = styled.div`
`


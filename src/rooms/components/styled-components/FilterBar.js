import styled from 'styled-components';


export const ArrowContainer = styled.div`
    width: 24px;
    height: 24px;
    `
export const ArrowWrapper = styled.div`
    height: 24px;
    width: max-content;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    @media(min-width: 1128px) {
        margin-left: -24px;
    }
`
export const FilterBarWrapper = styled.div`
    width: 100vw;
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
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
export const RoomIdeasText = styled.div`
    font-size: 12px;
    height: 24px;
    width: 76px;
    line-height: 26px;
    font-family: HelveticaNeue;
    font-weight: normal;
    color: #545658;
    margin-left: 12px;
`
export const TextWrapper = styled.div`
`


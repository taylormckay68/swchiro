import styled from 'styled-components';

export const MobCheckWrapper = styled.div`
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    padding-top: 4px;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
`
export const MobFilterOptionText = styled.p`
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
export const HeaderTextWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HeaderText = styled.p`
    font-family: HelveticaNeue;
    font-size: 28px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.86;
    letter-spacing: normal;
    color: #545658;
`
export const HeaderClear = styled.p`
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #545658;
    cursor: pointer;
`
export const MobFilterWrapper = styled.div`
    height: 100vh;
    min-height: 100vh;
    width: 100vw;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    transform: ${props => props.visible ? 'translateX(0)' : 'translateX(-100vw)'};
    transition: all .3s;
    z-index: 6000;
    overflow-y: scroll;
` 
export const MobFilterHeader = styled.div`
    height: 68px;
    width: 100%;
    background-color: #f5f5f5;
    padding: 8px 24px;
    box-sizing: border-box;
`
export const MobFilterFooter = styled.div`
    height: 72px;
    width: 100%;
    background-color: #f5f5f5;
    padding: 14px 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 100%;
`
export const ResultsButton = styled.div`
    height: 44px;
    width: 120px;
    border-radius: 22px;
    background-color: #0272a2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: HelveticaNeue;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #ffffff;
    cursor: pointer;
`
export const CloseButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const CloseButtonText = styled.p`
    margin-left: 10px;
    font-family: HelveticaNeue;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #545658;
`

//Rooms filter
export const RoomsFilterContainer = styled.div`
    width: 100%;
    min-height: 100px;
    border-bottom: 1px solid rgba(151, 151, 151, .2);
    padding: 24px;
    box-sizing: border-box;
`
export const RoomsFilterWrapper = styled.div`
    height: ${props => props.showMore ? '295px' : 'max-content'};
    width: 100%;
    overflow: hidden;
`
export const RoomsFilterLabel = styled.div`
    font-family: HelveticaNeue;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #545658;
`
export const RoomsFilterOptionsCont = styled.div`
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 24px;
    cursor: pointer;
`
export const ShowMoreRoomsButton = styled.div`
    width: 116px;
    height: 24px;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #0272a2;
    cursor: pointer;
    display: ${props => props.showMore ? 'block' : 'none'}
`


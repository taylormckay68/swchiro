import styled, {keyframes} from 'styled-components';


export const RoomIdeasDiv = styled.div`
    width: 100vw;
    position: relative;
`;

export const OffClick = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 4;
`
export const LoadMore = styled.button`
    width: 200px;
    height: 34px;
    background-color: #2F3337;
    color: #fff;
    border-radius: 1px;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial;
    font-weight: 400;
    margin: -56px auto 16px;
    display: flex;
    justify-content: center;
`
export const HeroImg = styled.div`
    width:100vw;
    height: 0;
    padding-bottom: calc(100vw/1.5); 
    max-width: 1780px;
    background-image: url('https://cdn2.webdamdb.com/1280_gLj9PkeYcj79.jpg?1541529106');
    background-size: cover;
    background-position: contain;
    background-repeat: no-repeat;
    @media(min-width: 570px){
        padding-bottom: calc(100vw/3);
        background-image: url('https://cdn2.webdamdb.com/1280_Ucd6O2fnKrR3.jpg?1541529112');
    }
    @media(min-width: 1128px){
        padding-bottom: calc(100vw/4);
        background-image: url('https://cdn2.webdamdb.com/1280_MOrXT6VOXGO5.jpg?1541529105');
    }
    @media(min-width: 1780px){
        padding-bottom: calc(1780px/4);
        margin: auto;
    }
`
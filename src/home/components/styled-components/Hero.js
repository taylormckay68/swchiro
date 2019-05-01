import styled from 'styled-components';

export const HeroWrapper = styled.div`
    background: url('https://s3-us-west-1.amazonaws.com/sw-chiro/slc-valley-min.jpg');
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BusinessWrapper = styled.div`
    width: 450px;
    height: 300px;
    background-color: rgba(0,0,0,.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const BusinessName = styled.h1`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    font-size: 50px;
`
export const CallButton = styled.button`
    width: 150px; 
    height: 40px;
    background-color: white;
    color: black;
`
import styled from 'styled-components';

export const MobFilterWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    transform: ${props => props.visible ? 'translateX(0)' : 'translateX(-100vw)'};
    transition: all .3s ease-in-out;
    z-index: 1;
` 
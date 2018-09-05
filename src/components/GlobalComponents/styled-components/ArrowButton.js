import styled from 'styled-components';

export const ArrowContainer = styled.div`
    opacity: 1;
    width: 32px;
    height: 42px;
    position: absolute;
    right: ${(props) => props.right ? '-16px' : ''};
    left: ${(props) => props.right ? '' : '-16px'};
    top: 0;
    bottom: ${(props) => props.bump30 ? '30px' : '0'};
    margin: auto;
    border-radius: 3px;
    border: 1px solid #DADCDF;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    display: none;
    @media only screen and (min-width: 1128px) {
        display:  ${(props) => {
            if(props.right) return (props.position + 4 < props.images)? 'block' : 'none';
            else return props.position === 0 ? 'none' : 'block';
        }};
    }
    @media only screen and (min-width: 1510px) {
        display:  ${(props) => {
            if(props.right) return (props.position + 5 < props.images)? 'block' : 'none';
            else return props.position === 0 ? 'none' : 'block';
        }};
    }
    @media only screen and (min-width: 1780px) {
        display:  ${(props) => {
            if(props.right) return (props.position + 6 < props.images)? 'block' : 'none';
            else return props.position === 0 ? 'none' : 'block';
        }};
    }
    svg {
        position: absolute;
        top: 12px;
        bottom: 12px;
        left: 7px;
        right: 7px;
        margin: auto;
    }
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

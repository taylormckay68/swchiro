import React from 'react';
import ArrowsMinimalRight from 'overstock-component-library/lib/svg-icons/arrows/Minimal_Right';
import ArrowsMinimalLeft from 'overstock-component-library/lib/svg-icons/arrows/Minimal_Left';
import { ArrowContainer } from './styled-components/ArrowButton';

const ArrowButton = (props) => {
    const renderSVG = () => {
        if(props.right) return <ArrowsMinimalRight color="#666" height="20" width="20"/>
        else return <ArrowsMinimalLeft color="#666"  height="20" width="20"/>;
    };
    return (
        <ArrowContainer
            bump30={props.bump30}
            right={props.right}
            position={props.position}
            images={props.images}
            onClick={() => props.onClick()}
        >
          { renderSVG() }
        </ArrowContainer>
    )
};

export default ArrowButton;

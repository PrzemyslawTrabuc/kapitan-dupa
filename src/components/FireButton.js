import React from 'react';
import './FireButton.scss';

function FireButton(props){

    const handleClick = (event) =>{
        props.handleClickFireButton(event);
    }

    return(
    <div id="FireButton" onMouseDown={handleClick} onMouseUp={handleClick} onTouchStart={handleClick} onTouchEnd={handleClick}>
        <h3>Fire</h3>
        <h3 className="not-visible-in-mobile"><i style={{fontWeight: 450}}>"space"</i></h3>
    </div>
    )
}

export default FireButton;
import React from 'react';
import './FireButton.scss';

function FireButton(props){

    const handleClick = (event) =>{
        props.handleClickFireButton(event);
    }

    return(
    <div id="FireButton" onMouseDown={handleClick} onMouseUp={handleClick}><h3>Fire</h3></div>
    )
}

export default FireButton;
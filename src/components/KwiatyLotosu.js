import React from 'react';
import { useState, useEffect } from 'react';
import './KwiatyLotosu.scss'


function KwiatyLotosu(props){

    return(
        <div id="KwiatyLotosu">
        <img  src={props.currentKwiatyLotosu} alt="abc" />
        </div>
    )
}

export default KwiatyLotosu;
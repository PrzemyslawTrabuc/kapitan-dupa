import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) =>{

    return ReactDOM.createPortal(
    <div className="modal-background" onClick={props.onDismiss}>
        <div className="modal-content" onClick={(event)=>event.stopPropagation()}>
            <div className="main__text--color" onClick={props.onDismiss} style={{float:'right', fontSize:"1.5rem"}}><p style={{textShadow: '0px 0px 3px #00ff00', marginTop:'5px'}}>X</p></div>
            {props.content}
        </div>
    </div>, document.querySelector('#modal')
    );
};

export default Modal
import React from 'react';
import './Modal.scss';

const Modal = ({visible, setVisible, children}) => {

    function clickHandler() {
        document.body.classList.remove("lock");
        setVisible(false);
    }

    return (
        <div
            className={visible ? 'modal active ' : 'modal'}
            onClick={clickHandler}
        >
            <div className={visible ? 'modal-content active' : 'modal-content'}
                 onClick={(e) => e.stopPropagation()}
            >
                <span onClick={clickHandler}>&#10006;</span>
            {children}
            </div>
        </div>
    );
};

export default Modal;
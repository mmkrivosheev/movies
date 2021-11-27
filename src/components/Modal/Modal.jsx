import React from 'react';
import './Modal.scss';

const Modal = ({visible, setVisible, children}) => {

    return (
        <div
            className={visible ? 'modal active ' : 'modal'}
            onClick={() => setVisible(false)}
        >
            <div className={visible ? 'modal-content active' : 'modal-content'}
                 onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

export default Modal;
import React from 'react';
import './Modal.scss';

const Show = ({children, visible, setVisible}) => {

    return (
        <div
            className={visible ? 'modal active' : 'modal'}
            onClick={() => setVisible(false)}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

export default Show;
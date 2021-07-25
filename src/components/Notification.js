import React from 'react';
import PropTypes from 'prop-types';


const Notification = ({message}) => (
    <div className="Notification">
        <p>{message}</p>
    </div>        
);
Notification.defaultProps = {
    message: ""
};

Notification.propTypes = {
    message: PropTypes.string
};
export default Notification;
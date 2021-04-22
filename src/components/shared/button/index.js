import propTypes from 'prop-types';
import React from 'react';

   
const Button = ({
    styles,
    disabled,
    icon,
    onClick,
    label,
}) => {

    return (
        <button className={styles} id={label} onClick={onClick} disabled={disabled}>{label}</button>
    )
}

Button.propTypes = {
    styles: propTypes.string
}
export default Button;
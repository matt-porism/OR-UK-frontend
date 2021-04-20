import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, placeholder, value, error, onChange, inputClass}) => {


    return (
        <div className={inputClass}>
            <label aria-labelledby={label} htmlFor={name}>{label}</label>
            <div className="formfield">
            <input type="text" name={name} className="form-control" 
            placeholder={placeholder} value={value} onChange={onChange} />
            {error && <div className="erroralert"> {error}</div>}
            </div>
        </div>
    );
}

TextInput.propType = {
    error: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
export default TextInput;
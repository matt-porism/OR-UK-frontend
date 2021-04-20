import React from 'react';
import PropTypes from "prop-types";

const SelectInput = ({
    error,  label,name, onChange, options
}) => {

    return (
        <div className="inputStyle">
            <label htmlFor={name}>{label}</label>
            <div className={fieldClass}>
                <select className={formControlClass}
                name={name}
                value={value}
                onChange={onChange}>
                    <option value=""></option>
                    {options.map( option => {
                        return ( <option key={option.value} value={option.value}>
                            {option.text}
                        </option>)
                    })}
                </select>
                {error && <div className="error-alert">{error}</div>}
            </div>
        </div>
    )

}

export default SelectInput;
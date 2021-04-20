import React from 'react';
import PropTypes from "prop-types";

const SelectInput = ({
    error,  label,name, value, onChange, fieldClass, formControlClass, options
}) => {

    return (
        <div className="inputStyle">
            <label htmlFor={name}>{label}</label>
            <div className={fieldClass}>
                <select className={formControlClass}
                name={name}
                onChange={onChange}>
                    {options.map( option => {
                        let selected = null;
                        if (option.value == value){
                            selected = true;
                        }
                        return ( <option selected={selected} key={option.value} value={option.value}>
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
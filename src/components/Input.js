import React from 'react';

const Input = ({ placeholder, type }) => {
    return (
        <input
            className="input-field"
            placeholder={placeholder}
            type={type}
        />
    );
}

export default Input;
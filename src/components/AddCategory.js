import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AddCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategory(c => [inputValue, ...c]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    );

};

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
};
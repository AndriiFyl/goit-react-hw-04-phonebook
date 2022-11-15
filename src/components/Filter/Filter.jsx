import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={css.filter__wrapper}>
            Find contacts by Name
            <input
                type="text"
                value={value }
                onChange= { onChange}>
                
            </input>
        </label>

    );
}

export default Filter;


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
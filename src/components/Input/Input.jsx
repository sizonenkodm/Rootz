import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
    const { type, placeholder, value, handler } = props;
    return (
        <>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handler}
            />
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
}

Input.defaultProps = {
    type: 'text'
}

export default Input;
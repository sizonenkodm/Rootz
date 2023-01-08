import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
    const { text, type, width, handler } = props;

    return (
        <button
            className={styles.btn}
            type={type}
            style={{ width: `${width}px` }}
            onClick={handler}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    width: PropTypes.number.isRequired,
    handler: PropTypes.func.isRequired
}

Button.defaultProps = {
    type: 'submit'
}

export default Button;
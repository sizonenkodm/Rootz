import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Accordion.module.scss';

const Accordion = (props) => {
    const { title, info } = props;
    const [open, setOpen] = useState(false);

    const showText = cn({
        [styles.info__content_text]: true,
        [styles.fadeInUp]: open,
    });

    const rotateIcon = cn({
        [styles.rotateOut]: open,
        [styles.rotateIn]: !open
    });

    const handleClick = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <div className={styles.info}>
            <div className={styles.info__content}>
                <h1 className={styles.info__content_title}>{title}</h1>
                {open && <p className={showText}>{info}</p>}
            </div>
            <button
                className={styles.info__btn}
                onClick={handleClick}
            >
                {
                    open
                        ? <img className={rotateIcon} src='assets/accordion/sub_icon.svg' alt='sub-icon' />
                        : <img className={rotateIcon} src='assets/accordion/add_icon.svg' alt='add_icon' />
                }
            </button>
        </div>
    );
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}

export default Accordion;
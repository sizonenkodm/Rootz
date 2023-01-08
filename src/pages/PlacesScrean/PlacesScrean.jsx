import React from 'react';
import cn from 'classnames';
import styles from './PlacesScrean.module.scss';

const PlacesScrean = () => {
    const placesPageClass = cn({
        [styles.places]: true,
        [styles.fadeIn]: true
    });

    return (
        <div className={placesPageClass}>
            <h1 className={styles.title}>Places</h1>
        </div>
    );
};

export default PlacesScrean;
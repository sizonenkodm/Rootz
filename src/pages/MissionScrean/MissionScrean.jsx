import React from 'react';
import cn from 'classnames';
import styles from './MissionScrean.module.scss';

const MissionScrean = () => {
    const missionPageClass = cn({
        [styles.mission]: true,
        [styles.fadeIn]: true
    });

    return (
        <div className={missionPageClass}>
            <h1 className={styles.title}>Our mission</h1>
        </div>
    );
};

export default MissionScrean;
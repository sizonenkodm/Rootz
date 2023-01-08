import React from 'react';
import cn from 'classnames';
import styles from './TeamScrean.module.scss';

const TeamScrean = () => {
    const teamPageClass = cn({
        [styles.team]: true,
        [styles.fadeIn]: true
    });

    return (
        <div>
            <div className={teamPageClass}>
            <h1 className={styles.title}>Team</h1>
        </div>
        </div>
    );
};

export default TeamScrean;
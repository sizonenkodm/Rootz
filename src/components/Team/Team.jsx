import React from 'react';
import styles from './Team.module.scss';

const Team = () => {

    return (
        <div className={styles.team}>
            <img className={styles.thread1} src='assets/team/thread1.svg' alt='thread1' />
            <img className={styles.thread2} src='assets/team/thread2.svg' alt='thread2' />
            <div className={styles.team__title}>
                <h1>Our top team</h1>
                <p>Learn more about how you can save <br /> our planet's nature.</p>
            </div>
            <div className={styles.team__photos}>
                <img className={styles.photo1} src='assets/team/photo1.png' alt='photo1' />
                <img className={styles.photo2} src='assets/team/photo2.png' alt='photo2' />
                <img className={styles.photo3} src='assets/team/photo3.png' alt='photo3' />
            </div>
        </div>
    );
};

export default Team;
import React from 'react';
import cn from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
    const bigTitle = cn({
        [styles.footer__contacts]: true,
        [styles.footer__title_big]: true
    });

    const smallTitle = cn({
        [styles.footer__contacts]: true,
        [styles.footer__title_small]: true
    });

    const gridTitle = cn({
        [styles.footer__content]: true,
        [styles.grid_title]: true
    });

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={gridTitle}>
                    <p className={bigTitle}>CONTACTS</p>
                    <p className={styles.footer__contacts}>2019 Rootz Foundation. <br /> All rights reserved</p>
                </div>
                <div className={styles.footer__content}>
                    <p className={smallTitle}>Headquarters</p>
                    <p className={styles.footer__contacts}>1234 USA <br /> Los Angeles, LA 1234567 <br /> (123) 456-7890</p>
                </div>
                <div className={styles.footer__content}>
                    <p className={smallTitle}>Social media</p>
                    <div className={styles.footer__contacts}>
                        <div className={styles.footer__icons}>
                            <a href='#' target='_blank'>
                                <img src='assets/footer/Twitter.svg' alt='twitter-icon' />
                            </a>
                            <a href='#' target='_blank'>
                                <img src='assets/footer/Facebook.svg' alt='facebook-icon' />
                            </a>
                            <a href='#' target='_blank'>
                                <img src='assets/footer/LinkedIn.svg' alt='linkedin-icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
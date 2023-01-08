import React from 'react';
import styles from './Header.module.scss';

import Search from 'components/Search';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__content}>
                    <img src='assets/header/Headline.png' alt='Headline' />
                    <p>The scale of the challenges facing our planet can seem daunting, but we can all do something.</p>
                    <Search />
                </div>
                <div className={styles.header__img}>
                    <img className={styles.header__img_parrot} src='assets/header/Parrot.svg' alt='Perrot' />
                    <img className={styles.header__img_card} src='assets/header/Сard.png' alt='Card' />
                </div>
            </div>
        </div>
    );
};

export default Header;
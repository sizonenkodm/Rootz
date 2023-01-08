import React from 'react';
import cn from 'classnames';
import styles from './HomeScrean.module.scss';

import Header from 'components/Header';
import Main from 'components/Main';
import Carousel from 'components/Carousel';

const HomeScrean = () => {
    const homePageClass = cn({
        [styles.home]: true,
        [styles.fadeIn]: true
    });

    return (
        <div className={homePageClass}>
            <Header />
            <Main />
            <Carousel />
        </div>
    );
};

export default HomeScrean;
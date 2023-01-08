import React from 'react';
import styles from './Main.module.scss';

import Team from 'components/Team';
import LogIn from 'components/LogIn';
import Info from 'components/Info';

const Main = () => {
    return (
        <div className={styles.container}>
            <Team />
            <LogIn />
            <Info />
        </div>
    );
};

export default Main;
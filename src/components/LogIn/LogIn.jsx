import React from 'react';
import styles from './LogIn.module.scss';

import Form from 'components/Form';

const LogIn = () => {
    return (
        < div className={styles.container} >
            <div className={styles.content}>
                <h1>Get Started Today!</h1>
                <p>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet.</p>
            </div>
            <Form />
        </div>
    );
};

export default LogIn;
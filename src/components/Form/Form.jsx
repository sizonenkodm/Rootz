import React, { useState } from 'react';
import styles from './Form.module.scss';

import Input from 'components/Input';
import Button from 'components/Button';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const handleClick = (event) => {

        // This function for future functionality with API connection

        event.preventDefault();

        const user = {};
        user.name = name;
        user.email = email;

        console.log(user);

        setTimeout(() => {
            setName('');
            setEmail('');
        }, 1000);
    }

    return (
        <form className={styles.form}>
            <img className={styles.form__decor_big} src='assets/form/petal_big.svg' alt='decor' />
            <img className={styles.form__decor_small} src='assets/form/petal_small.svg' alt='decor' />
            <h1 className={styles.form__title}>Log In</h1>
            <div className={styles.form__inputs}>
                <Input
                    className={styles.form__input}
                    type='text'
                    placeholder='Name'
                    value={name}
                    handler={nameHandler}
                />
                <Input
                    className={styles.form__input}
                    type='email'
                    placeholder='Email'
                    value={email}
                    handler={emailHandler}
                />
            </div>
            <Button
                type='submit'
                text='Book a demo'
                width={312}
                handler={handleClick}
            />
        </form>
    );
};

export default Form;
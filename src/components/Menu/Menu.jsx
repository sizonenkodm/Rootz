import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from 'App';
import styles from './Menu.module.scss';

import MenuList from 'components/MenuList';

const Menu = () => {
    const { menuOpen, setMenuOpen } = useContext(Context);
    const navigate = useNavigate();

    const handleOpen = () => {
        setMenuOpen(true);
        navigate('/menu');
    }

    const handleClose = () => {
        setMenuOpen(false);
        navigate(-1);
    }

    return (
        <div className={styles.menu}>
            <img src='assets/menu/Logo.svg' alt='logo' />
            {
                menuOpen
                    ? <img className={styles.menu__icon} src='assets/menu/icon-close.svg' alt='close-icon' onClick={handleClose} />
                    : <img className={styles.menu__icon} src='assets/menu/menu_icon.svg' alt='menu-icon' onClick={handleOpen} />
            }
            <MenuList />
        </div>
    );
};

export default Menu;
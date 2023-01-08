import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from 'App';
import styles from './Menu.module.scss';

import MenuList from 'components/MenuList';

const Menu = () => {
    const { menuOpen, setMenuOpen, home, setHome, setMission, setPlaces, setTeam } = useContext(Context);
    const navigate = useNavigate();

    const handleOpen = () => {
        setMenuOpen(true);
        navigate('/menu');
    }

    const handleClose = () => {
        setMenuOpen(false);
        navigate(-1);
    }

    const handleRedirect = () => {
        menuOpen && setMenuOpen(false);
        if (!home) {
            setHome(true);
            setMission(false);
            setPlaces(false);
            setTeam(false);
        }
        navigate('/');
    }

    return (
        <div className={styles.menu}>
            <img className={styles.menu__logo} src='assets/menu/Logo.svg' alt='logo' onClick={handleRedirect} />
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
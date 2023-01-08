import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Context } from 'App';
import styles from './MenuList.module.scss';

const MenuList = ({ mobileVariant = false }) => {
    const {
        setMenuOpen,
        home,
        setHome,
        mission,
        setMission,
        places,
        setPlaces,
        team,
        setTeam,
    } = useContext(Context);

    const navigate = useNavigate();

    const menuClass = cn({
        [styles.menu]: true,
        [styles.dflex]: mobileVariant,
        [styles.fadeInRight]: mobileVariant
    });

    const homeClass = cn({
        [styles.menu__list_item]: true,
        [styles.active]: home
    });

    const missionClass = cn({
        [styles.menu__list_item]: true,
        [styles.active]: mission
    });

    const placesClass = cn({
        [styles.menu__list_item]: true,
        [styles.active]: places
    });

    const teamClass = cn({
        [styles.menu__list_item]: true,
        [styles.active]: team
    });

    const handleNavigate = (event) => {
        switch (event.target.id) {
            case 'home':
                if (window.innerWidth <= 750) setMenuOpen(false);
                setHome(true);
                setMission(false);
                setPlaces(false);
                setTeam(false);
                navigate('/');
                break
            case 'mission':
                if (window.innerWidth <= 750) setMenuOpen(false);
                setHome(false);
                setMission(true);
                setPlaces(false);
                setTeam(false);
                navigate('/mission');
                break
            case 'places':
                if (window.innerWidth <= 750) setMenuOpen(false);
                setHome(false);
                setMission(false);
                setPlaces(true);
                setTeam(false);
                navigate('/places');
                break
            case 'team':
                if (window.innerWidth <= 750) setMenuOpen(false);
                setHome(false);
                setMission(false);
                setPlaces(false);
                setTeam(true);
                navigate('/team');
                break
            default: navigate('/');
        }
    }

    return (
        <div className={menuClass}>
            <div className={styles.menu__list}>
                <span className={homeClass} id='home' onClick={handleNavigate}>Home</span>
                <span className={missionClass} id='mission' onClick={handleNavigate}>Our mission</span>
                <span className={placesClass} id='places' onClick={handleNavigate}>Places</span>
                <span className={teamClass} id='team' onClick={handleNavigate}>Team</span>
            </div>
            <button className={styles.menu__btn}>Apply</button>
        </div>
    );
};

MenuList.propTypes = {
    mobileVariant: PropTypes.bool
}

MenuList.defaultProps = {
    mobileVariant: false
}

export default MenuList;
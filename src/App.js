import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import HomeScrean from 'pages/HomeScrean';
import MissionScrean from 'pages/MissionScrean';
import PlacesScrean from 'pages/PlacesScrean';
import TeamScrean from 'pages/TeamScrean';
import MenuList from 'components/MenuList';
import Footer from 'components/Footer';

export const Context = createContext(null);

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [home, setHome] = useState(true);
    const [mission, setMission] = useState(false);
    const [places, setPlaces] = useState(false);
    const [team, setTeam] = useState(false);

    return (
        <div className="App">
            <Context.Provider value={{
                menuOpen,
                setMenuOpen,
                home,
                setHome,
                mission,
                setMission,
                places,
                setPlaces,
                team,
                setTeam,
            }}>
                <Menu />
                <Routes>
                    <Route path='/' element={<HomeScrean />} />
                    <Route path='/mission' element={<MissionScrean />} />
                    <Route path='/places' element={<PlacesScrean />} />
                    <Route path='/team' element={<TeamScrean />} />
                    <Route path='/menu' element={<MenuList mobileVariant={true} />} />
                </Routes>
                <Footer />
            </Context.Provider>
        </div>
    );
}

export default App;

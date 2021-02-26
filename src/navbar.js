import React from 'react';
import { Nav } from 'react-bootstrap';
import NavIcon from './nav-icon';
import LangButton from './lang-button';

import { faAddressBook, faCog, faBriefcase, faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';
import GetString from './language';

const MyNavbar = ({ lang, setLanguage }) => {
    return (
        <Nav className="my-nav sticky-top flex-lg-column align-items-center bg-primary px-3 px-lg-0 py-lg-3">
            <NavIcon icon={faAddressBook} target="profile" title={ GetString(lang, 'profile') } />
            <NavIcon icon={faCog} target="skills" title={ GetString(lang, 'skills') } />
            <NavIcon icon={faBriefcase} target="experience" title={ GetString(lang, 'experience') } />
            <NavIcon icon={faBook} target="education" title={ GetString(lang, 'education') } />
            <LangButton icon={faGlobe} setLanguage={setLanguage} title={ GetString(lang, 'change_language') } />
        </Nav>
    );
};

export default MyNavbar;
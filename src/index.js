import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import MySelf from './myself';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import Arrow from './arrow';

import './styles.css';

// Importamos Bootstrap asincrónicamente
import('./bootstrap.scss');

import Container from 'react-bootstrap/Container';

const App = _ => {
    const [language, setLanguage] = useState('english');

    return (
        <div className="d-flex flex-lg-row flex-column">
            <Navbar lang={language} setLanguage={setLanguage} />
            <Container fluid>
                <MySelf lang={language} />
                <Skills lang={language} />
                <Experience lang={language} />
                <Education lang={language} />
            </Container>
            <Arrow />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
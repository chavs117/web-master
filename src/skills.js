import React from 'react';
import GetString from './language';
import Star from './star';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Skills = ({ lang }) => {
    return (
        <section className="main-section" id="skills">
            <h1>{ GetString(lang, 'skills') }</h1>
            <p>{ GetString(lang, 'skills_desc') }</p>
            <p>{ GetString(lang, 'skills_indication') }</p>
            <h3 className="mt-4">Front-end</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>HTML5</strong><Star r={3} /> WebWorkers, WebGL, WebSockets, WebRTC, requestAnimationFrame, etc.</ListGroupItem>
                <ListGroupItem><strong>CSS3</strong><Star r={3} /> Flex box, grid layout, transitions, pseudo elements, attribute selectors, etc.</ListGroupItem>
                <ListGroupItem><strong>JavaScript</strong><Star r={2} /> I feel very confident with vanilla JavaScript. Event loop, Promises, async-await, JSON, and a long etc.</ListGroupItem>
                <ListGroupItem><strong>JQuery</strong><Star r={1} /> Easy DOM manipulation and event handling.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Back-end</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>NodeJS</strong><Star r={2} /> As I said, I like JS. I normally use <strong>npm</strong> as packet manager.</ListGroupItem>
                <ListGroupItem><strong>PHP</strong><Star r={3} /> I started with PHP more than 10 years ago. The language changed but I keep myself updated.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Databases</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>MySQL</strong><Star r={3} /> Relational database that use SQL syntax.</ListGroupItem>
                <ListGroupItem><strong>MariaDB</strong><Star r={3} /> Derived from MySQL.</ListGroupItem>
                <ListGroupItem><strong>ArangoDB</strong><Star r={2} /> NoSQL database oriented to documents.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Desktop Applications</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>Java</strong><Star r={2} /> Design patterns, unit testing, Java API.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Others</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>Git</strong><Star r={3} /> Version control system.</ListGroupItem>
                <ListGroupItem><strong>GNU/Linux</strong><Star r={2} /> Knowledge of operating systems and bash scripting.</ListGroupItem>
                <ListGroupItem><strong>Python</strong><Star r={1} /> Simple scripts for handling and operating over text files and binary data.</ListGroupItem>
            </ListGroup>
        </section>
    );
};

export default Skills;
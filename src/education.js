import React from 'react';

import GetString from './language';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Education = ({ lang }) => {
    return (
        <section className="main-section" id="education">
            <h1>{ GetString(lang, 'education') }</h1>
            <p>{ GetString(lang, 'education_desc') }</p>
            <ListGroup variant="flush">
                <ListGroupItem className="mt-4">
                    <h3>Ingeniería en Sistemas Computacionales.</h3>
                    <p className="mb-0">Instituto Tecnológico de San Juan del Río.</p>
                    <span className="text-primary">2016 - Presente</span>
                </ListGroupItem>
                <ListGroupItem className="mt-4">
                    <h3>Tecnico en reparación de celulares y tabletas.</h3>
                    <p className="mb-0">Centro de Capacitación Superior para el Estado de Querétaro.</p>
                    <span className="text-primary">2015 - 2016</span>
                </ListGroupItem>
            </ListGroup>
        </section>
    );
};

export default Education;
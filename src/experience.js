import React from 'react';

import GetString from './language';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faBootstrap, faAws, faReact, faNodeJs, faSass } from '@fortawesome/free-brands-svg-icons';

import TooEzzi from './images/tooezzi.gif';
import CodeIgniter from './images/codeigniter.svg';
import GraphQL from './images/graphql.svg';
import VentusWeb from './images/ventusweb.gif';
import Argentum20 from './images/argentum20.png';
import AoLibre from './images/aolibre.png';
import MongoDB from './images/mongodb.svg';

const Experience = ({ lang }) => {
    return (
        <section className="main-section" id="experience">
            <h1>{ GetString(lang, 'experience') }</h1>
            <h3 className="mt-4">Ultramedic <small>(Enero 2021 - Presente)</small></h3>
            <Row>
                <Col xs="auto">
                    <Image src={TooEzzi} alt="TooEzzi" rounded thumbnail />
                </Col>
                <Col>
                    <p>Trabajo en el desarrollo de un proyecto por parte de las residencias profecioanles, en el cual
                        se realizará una página donde Doctores y pacientes puedan llevar un control de sus visitas y sus
                        antecedentes, además de una tienda en línea para comprar y rentar equipo médico.
                    </p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faPhp} className="brand-icon" title="PHP" />
                            <Image src={CodeIgniter} alt="CodeIgniter" className="brand-icon ml-4" title="CodeIgniter" width="50px" />
                            <FontAwesomeIcon icon={faBootstrap} className="brand-icon ml-4" title="Bootstrap" />
                            <FontAwesomeIcon icon={faAws} className="brand-icon ml-4" title="Amazon S3" />
                            <Image src={GraphQL} alt="GraphQL" className="brand-icon ml-4" title="GraphQL" width="50px" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h3 className="mt-5 pt-5 border-top">Hakky <small>(Agosto 2020 - Diciembre 2020)</small></h3>
            <Row>
                <Col xs="auto">
                    <Image src={Argentum20} alt="Argentum20" width="410" style={{ paddingTop: "52px", paddingBottom: "52px" }} rounded thumbnail />
                </Col>
                <Col>
                    <p>Proyecto realizado como parte de la materia de Gestión de Proyectos, desarrollada en un ambiente totalmente
                        real, con juntas con el cliente y venta. Se realizó un control de entradas y salidas de efectivo, junto con 
                        generación de reportes semanales o mensuales.
                    </p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center">
                            <span className="brand-text">VB6</span>
                            <span className="brand-text ml-4">MySQL</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h3 className="mt-5 pt-5 border-top">Esta página</h3>
            <Row>
                <Col xs="auto">
                    <div
                        className="img-thumbnail rounded brand-icon"
                        style={{ width: "410px", fontSize: "10rem", padding: "50px 100px" }}
                    >
                        <FontAwesomeIcon icon={faCode} title="Esta web" />
                    </div>
                </Col>
                <Col>
                    <p>El código usado en esta página está disponible para cualquiera que quiera verlo, bajo licencia MIT.</p>
                    <p><a href="https://github.com/Wyr0X/web" target="_BLANK" className="text-info">https://github.com/Wyr0X/web</a></p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center">
                            <FontAwesomeIcon icon={faReact} className="brand-icon" title="React" />
                            <FontAwesomeIcon icon={faBootstrap} className="brand-icon ml-4" title="Bootstrap" />
                            <FontAwesomeIcon icon={faSass} className="brand-icon ml-4" title="Sass" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default Experience;
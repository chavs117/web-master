import React from 'react';
import GetString from './language';

import { Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import MePhoto from './images/me.jpg';

const MySelf = ({ lang }) => {
    return (
        <section className="main-section" name="profile">
            <h1 className="my-name">Javier García Mora</h1>
            <h2>{ GetString(lang, 'short_desc') }</h2>
            <Row className="mt-5">
                <Col xs="auto" className="pl-5">
                    <Image className="my-picture" src={MePhoto} roundedCircle alt={ GetString(lang, 'photo_me_desc') } />
                </Col>
                <Col className="introduction mt-5 mt-sm-0 ml-lg-5">
                    <p>{ GetString(lang, 'introduction1') }</p>
                    <p>{ GetString(lang, 'introduction2') }</p>

                    <Row>
                        <Col className=" d-lg-block d-flex justify-content-between">
                            <a className="brand-icon" href="https://github.com/chavs117" target="_BLANK">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </a>
                            <a className="brand-icon ml-lg-5" href={"https://www.linkedin.com/in/alexis-caraballo-7185061a2/?locale=" + GetString(lang, 'locale')} target="_BLANK">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="brand-icon ml-lg-5" href="mailto:javier.mora.5398@gmail.com" target="_BLANK">
                                <FontAwesomeIcon icon={faEnvelopeSquare} />
                            </a>
                            <a className="brand-icon ml-lg-5" href="https://www.facebook.com/WyroX" target="_BLANK">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                            <a className="brand-icon ml-lg-5" href="https://twitter.com/wyroxrlz" target="_BLANK">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default MySelf;
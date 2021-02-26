import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LangButton = ({ icon, setLanguage, title }) => {
    return (
        <Dropdown className="d-flex ml-auto ml-lg-0 mr-3 mr-lg-0 mt-lg-auto text-light w-auto" data-title={title}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" className="py-1 px-2">
                <FontAwesomeIcon icon={icon} />
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item onClick={_ => setLanguage('spanish')}>Español</Dropdown.Item>
                <Dropdown.Item onClick={_ => setLanguage('english')}>English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LangButton;
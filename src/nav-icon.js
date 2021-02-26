import React from 'react';
import { NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

const NavIcon = ({ icon, target, title }) => {
    return (
        <NavItem data-title={title}>
            <Link
                className="nav-link text-light cursor-pointer"
                to={target}
                spy={true}
                smooth="easeInOutQuart"
                duration={1000}
            >
                <FontAwesomeIcon icon={icon} />
            </Link>
        </NavItem>
    );
};

export default NavIcon;
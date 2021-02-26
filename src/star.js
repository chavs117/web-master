import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = ({ r = 1 }) => {
    const stars = [];

    // Renderizo las múltiples estrellas
    for (let s = 0; s < r; ++s) {
        stars.push(
            <FontAwesomeIcon icon={faStar} key={s} />
        );
    }

    return (
        <span className="stars px-2">{stars}</span>
    );
};

export default Star;
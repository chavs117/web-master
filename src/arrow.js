import React, { useEffect, useState } from 'react';
import { Link, scrollSpy } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Arrow = _ => {
    const [arrow, showArrow] = useState(true);
    const [fadingArrow, setFadingArrow] = useState(false);

    const hideArrow = _ => showArrow(false);
    
    const fadeArrow = _ => {
        setFadingArrow(true);
        setTimeout(hideArrow, 200);
    }

    useEffect(_ => {
        const scroll_y = scrollSpy.currentPositionY(document);

        const scrollHandler = (_, scroll_y) => {
            if (scroll_y !== 0) {
                fadeArrow();
            }
        };

        if (scroll_y === 0) {
            scrollSpy.addSpyHandler(scrollHandler, document);
        } else {
            hideArrow();
        }
    }, []);

    return (
        <Link
            className={"cursor-pointer" + (arrow ? '' : ' d-none')}
            to="skills"
            spy={true}
            smooth="easeInOutQuart"
            duration={1000}
            onClick={fadeArrow}
        >
            <div className="arrow-container mx-auto fixed-bottom zIndex-0">
                <div className={"text-secondary bounce" + (fadingArrow ? ' fade' : '')}>
                    <FontAwesomeIcon icon={faArrowDown} size="2x" />
                </div>
            </div>
        </Link>
    );
};

export default Arrow;
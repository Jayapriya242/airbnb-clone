


import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faBinoculars, faTractor, faUmbrellaBeach, faHotel, faTree, faSeedling, faWater, faCampground, faExclamation, faMountain, faChessRook, faSnowflake, faPalette, faGlobe, faShip, faGem, faHome, faBed, faBox, faSolarPanel, faCouch } from '@fortawesome/free-solid-svg-icons';
import './IconComponents.css';

const icons = [
    { name: 'Amazing Pool', icon: faSwimmer },
    { name: 'Amazing Views', icon: faBinoculars },
    { name: 'Countryside', icon: faTractor },
    { name: 'Tropical', icon: faUmbrellaBeach },
    { name: 'Mansions', icon: faHotel },
    { name: 'Treehouse', icon: faTree },
    { name: 'Farms', icon: faSeedling },
    { name: 'Beachfront', icon: faWater },
    { name: 'Cabins', icon: faCampground },
    { name: 'OMG!', icon: faExclamation },
    { name: 'Lakefront', icon: faWater },
    { name: 'Top of the World', icon: faMountain },
    { name: 'Castles', icon: faChessRook },
    { name: 'Arctic', icon: faSnowflake },
    { name: 'National Parks', icon: faTree },
    { name: 'Designs', icon: faPalette },
    { name: 'Earth Homes', icon: faGlobe },
    { name: 'Boats', icon: faShip },
    { name: 'Islands', icon: faGlobe },
    { name: 'Luxe', icon: faGem },
    { name: 'A-Frames', icon: faHome },
    { name: 'Rooms', icon: faBed },
    { name: 'Surfing', icon: faHome },
    { name: 'Container', icon: faBox },
    { name: 'Houseboat', icon: faShip },
    { name: 'Off the Grid', icon: faSolarPanel },
    { name: 'Dammusi', icon: faCouch }
];

const IconScroller = () => {
    const scrollerRef = useRef(null);

    const scrollLeft = () => {
        scrollerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    };

    return (
        <div className="scroller-container">
            <button className="scroll-button left-button" onClick={scrollLeft}>&#60;</button>
            <div className="icon-scroller" ref={scrollerRef}>
                {icons.map((item, index) => (
                    <div className="icon-item" key={index}>
                        <FontAwesomeIcon icon={item.icon} className="icon" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
            <button className="scroll-button right-button" onClick={scrollRight}>&#62;</button>
        </div>
    );
};

export default IconScroller;


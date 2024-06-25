import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ButtonComponents.css';
import {FaSearch } from 'react-icons/fa';
const cityData = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut"
];
const ButtonComponents = ({onSearch}) => {
  const [where, setWhere] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [showWhoOptions, setShowWhoOptions] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  
  const whoRef = useRef(null);

  // const handleSearch = () => {
  //   console.log({
  //     where,
  //     checkIn: checkIn ? checkIn.toISOString().split('T')[0] : '',
  //     checkOut: checkOut ? checkOut.toISOString().split('T')[0] : '',
  //     who: { adults, children, infants, pets },
  //   });
  // };
  const handleSearch = () => {
    onSearch({
      where,
      checkIn: checkIn ? checkIn.toISOString().split('T')[0] : '',
      checkOut: checkOut ? checkOut.toISOString().split('T')[0] : '',
      who: { adults, children, infants, pets },
    });
  };

  const toggleWhoOptions = () => {
    setShowWhoOptions(!showWhoOptions);
  };
  const handleClickOutside = (event) => {
    if (whoRef.current && !whoRef.current.contains(event.target)) {
      setShowWhoOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="outer-box">
      <button>
      <div className="inner-button">
        <div className='where'>
        <label>Where</label>
        <select
          value={where}
          onChange={(e) => setWhere(e.target.value)}
          className="input-field"
          placeholder="Search Destination">
          <option value="" disabled>Search Destination</option>
          {cityData.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        </div>
      </div>
      <span className="separator">|</span>
      <div className="inner-button">
        <div className='check-in'>
        <label>Check In</label>
        <DatePicker
          selected={checkIn}
          onChange={(date) => {
            setCheckIn(date);
            if (checkOut && date && checkOut < date) {
              setCheckOut(null);
            }
          }}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={new Date()}
          placeholderText="Add dates"
          className="input-field"/>
        </div>
        <span className="separator">|</span>
        <div className='check-out'>
        <label>Check Out</label>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn || new Date()}
          placeholderText="Add dates"
          className="input-field"
        />
        </div>
      </div>
      <span className="separator">|</span>
      <div className="inner-button" onClick={toggleWhoOptions}>
      <div className='check-out'>
      <label>Who</label>
        <input
          type="text"
          placeholder="Add guests"
          className="input-field"
          readOnly
        />
      </div>
      </div>
      
      {showWhoOptions && (
        <div className="who-options" ref={whoRef}>
          <div className="who-row">
            <span>Adults:</span>
            <button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</button>
            <span>{adults}</span>
            <button onClick={() => setAdults(adults + 1)}>+</button>
          </div>
         
          <div className="who-row">
            <span>Children:</span>
            <button onClick={() => setChildren(children > 0 ? children - 1 : 0)}>-</button>
            <span>{children}</span>
            <button onClick={() => setChildren(children + 1)}>+</button>
          </div>
          <div className="who-row">
            <span>Infants:</span>
            <button onClick={() => setInfants(infants > 0 ? infants - 1 : 0)}>-</button>
            <span>{infants}</span>
            <button onClick={() => setInfants(infants + 1)}>+</button>
          </div>
          <div className="who-row">
            <span>Pets:</span>
            <button onClick={() => setPets(pets > 0 ? pets - 1 : 0)}>-</button>
            <span>{pets}</span>
            <button onClick={() => setPets(pets + 1)}>+</button>          
          </div>
        </div>
      )}
      <button className="inner-button search-button" onClick={handleSearch}>
        <FaSearch></FaSearch>
      </button>
      </button>
    </div>
  );
};

export default ButtonComponents;



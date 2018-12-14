import React from 'react';
import { Link } from "react-router-dom";
import './TopBar.css';

const TopBar = () => {
  return (
    <div className='top_bar'>
      <Link to="/">Pokédex</Link>
    </div>
  );
};

export default TopBar;
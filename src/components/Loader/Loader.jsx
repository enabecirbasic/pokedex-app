import React from 'react';
import './Loader.css';
import loader from '../../images/loader.gif'

const Loader = () => {
  return (
    <div className="wrapper">
      <img src={loader} alt='loader'/>
    </div>
  );
};

export default Loader;
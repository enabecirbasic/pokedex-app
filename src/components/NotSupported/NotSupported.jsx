import React from 'react';
import './NotSupported.css';

const NotSupported = () => {
  return (
    <div className='wrapper'>
      <div className='message'>
        <h1 className='message_title'>
          We are currently not supporting bigger screen resolutions.
        </h1>
        <h2 className='message_subtitle'>
          Please use your mobile device for best user experience.
        </h2>
      </div>
    </div>
  );
};

export default NotSupported;
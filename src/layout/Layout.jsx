import React from 'react';
import TopBar from '../components/TopBar';
import NotSupported from '../components/NotSupported';

import { OtherMediaQuery, MobileMediaQuery } from './CustomMediaQuery';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <OtherMediaQuery>
        <NotSupported/>
      </OtherMediaQuery>
      <MobileMediaQuery>
        <TopBar/>
        {children}
      </MobileMediaQuery>
    </React.Fragment>
  );
};

export default Layout;
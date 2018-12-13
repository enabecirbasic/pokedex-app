import React from 'react';
import MediaQuery from 'react-responsive';

const customMediaQueryWrapper = (min, max) => {
  class CustomMediaQuery extends React.Component {
    render() {
      const { children } = this.props;
      return (
        <MediaQuery maxWidth={max} minWidth={min}>
          {children}
        </MediaQuery>
      );
    }
  }

  return CustomMediaQuery;
};

export default customMediaQueryWrapper;
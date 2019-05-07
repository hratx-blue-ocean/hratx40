import React from 'react';
import PropTypes from 'prop-types';

const HeroBanner = ({name}) => {

  const getMessage = () => {
    if(name) {
      return (
        <h1>Welcome Back, {name}</h1>
      )
    } else {
      return (
        <h1>Make a Ripple</h1>
      )
    }
  }

  return (  
    <div className={'heroImage'}>
      <div className={'heroText'}>
        {getMessage()}
      </div>
    </div>
  );
}

HeroBanner.propTypes = {
  name: PropTypes.string,
}
 
export default HeroBanner;
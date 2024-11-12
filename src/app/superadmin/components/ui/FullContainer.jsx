import React from 'react'
import PropTypes from 'prop-types';

export default function FullContainer({ children , className}) {
    return (
      <div className={`flex justify-top items-start w-full h-full ${className}`}>
        {children}
      </div>
    );
  }
  
  FullContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
  
  FullContainer.defaultProps = {
    className: '',
  };
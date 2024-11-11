import React from 'react'
import PropTypes from 'prop-types';

export default function Container({ children , className}) {
    return (
      <div className={`container flex justify-center items-start w-10/12 h-full ${className}`}>
        {children}
      </div>
    );
  }

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Container.defaultProps = {
    className: '',
};
  
import React from "react";
const withClass = (WrappedCoponent, className) => {
  return (props) => 
  <div className={className}>
      <WrappedCoponent {...props}/>
  </div>;
};

export default withClass;

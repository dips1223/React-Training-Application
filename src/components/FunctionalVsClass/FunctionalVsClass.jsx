import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import './FunctionalVsClass.css';

function FunctionalVsClass() {
  return (
    <>
      <div className="functional-class-demo">
        <h1>Comparing Functional & Class Components in React</h1>
        <div className="comparison-container">
          <div className="component-box">
            <FunctionalComponent />
          </div>
          <div className="component-box">
            <ClassComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default FunctionalVsClass;

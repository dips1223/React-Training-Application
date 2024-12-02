import React from 'react';
import './App.css';
import ClassComponentDemo from './components/ClassComponentDemo/ClassComponentDemo';
import LifecycleDemo from './components/LifecycleDemo/LifecycleDemo';
import PropsStateDemo from './components/PropsStateDemo/PropsStateDemo';
import FunctionalVsClass from './components/FunctionalVsClass/FunctionalVsClass';

function App() {
  return (
    <div className="container">
      <ClassComponentDemo />
      <hr />
      <LifecycleDemo />
      <hr />
      <PropsStateDemo parentMessage="Welcome! Experience the power of seamless communication between components." />
      <hr />
      <FunctionalVsClass />
    </div>
  );
}

export default App;

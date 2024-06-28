import React from 'react';
import logo from './logo.svg';
import './App.css';
import Job from './components/Job';
import PersonalInfo from './components/PersonalInfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PersonalInfo />
        <Skills />
      </div>
    );
  }
}

export default App;

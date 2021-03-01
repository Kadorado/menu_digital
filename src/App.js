import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Section from './components/Section'
import {DataProvider} from '../src/components/context/Context'
import "../src/assests/styles/App.scss"

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;

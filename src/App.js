import React from 'react';
import './App.css';
import Main from './component/Main';
import {Provider} from 'react-redux';
import ConfigureStore from './redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Provider store={ConfigureStore()}>
      <Router>
        <div className='app'>
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

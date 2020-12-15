import React, { Component } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';


export class App extends Component {
  render() {
    return  (
      <div className='box1'>
        <Aside />
        <div className='box2'>
          <div>
            <Header />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

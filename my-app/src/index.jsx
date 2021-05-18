import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Bulb from './Bulb';

const App = () => (
  <div className="container2"><Bulb on={true}/>
  <Bulb on={true}/>
  <Bulb on={false}/>
  <Bulb on={false}/>
    </div>
);

render(<App />, document.querySelector('#app'));

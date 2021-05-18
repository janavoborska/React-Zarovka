import React from 'react'
import './style.css';

const Bulb = (props) => (
  <div className={props.on ? "bulb bulb--on" : "bulb"}>
  </div>
)

export default Bulb
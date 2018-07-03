import React, { Component } from 'react';


class Action extends Component {
 render(){
    
  return (
      <div >
   <button className="big-button" onClick= {this.props.f} disabled= {!this.props.hasOptions}> what should i do </button>
 
      </div>


    );
  }
  }

export default Action;


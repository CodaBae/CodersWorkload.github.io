
import React, { Component } from 'react';


class OptionC extends Component {
 render(){
  return (
      <div className="wapper div">
          {this.props.optionText}
          <button onClick= {(e) => {this.props.addOC(this.props.optionText)}}>All Done</button>
      </div>


    );
  }
  }

export default OptionC;
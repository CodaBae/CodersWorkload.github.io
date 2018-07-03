
import React, { Component } from 'react';


class OptionC extends Component {
 render(){
  return (
      <div className="options">
         <p className='p'> {this.props.count}. {this.props.optionText}</p>
          <button className='R-button' onClick= {(e) => {this.props.addOC(this.props.optionText)}}>All Done</button>
      </div>


    );
  }
  }

export default OptionC;
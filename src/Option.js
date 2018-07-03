import React, { Component } from 'react';
import OptionC from './OptionC'

class Option extends Component {
 render(){
  console.log(this.props.del)
  
  
     return (
      <div className="wapper div">
      <div className='Task-header'>
      <h3> Your Task </h3>
      <button className='R-button' onClick= {this.props.del}> Remove All</button>
      </div>
    {this.props.options.length === 0 && <h3 className='h3-task'>Taxify Your Day</h3>}
    {this.props.options.map((num,index)=> <OptionC key={num} optionText= {num} addOC= {this.props.addOC} count={index +1}/>)}
     
      </div>


    );
  }
  }

export default Option;
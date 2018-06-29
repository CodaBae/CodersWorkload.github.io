import React, { Component } from 'react';
import OptionC from './OptionC'

class Option extends Component {
 render(){
  console.log(this.props.del)
  
  
     return (
      <div className="wapper div">
      <button onClick= {this.props.del}> Remove all</button>
    {this.props.options.length === 0 && <h3>Taxify Your Day</h3>}
    {this.props.options.map((num)=> <OptionC key={num} optionText= {num} addOC= {this.props.addOC} />)}
          
      </div>


    );
  }
  }

export default Option;
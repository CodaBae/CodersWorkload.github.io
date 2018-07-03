import React, { Component } from 'react';

class AddOption extends Component {
    onFormSubmit = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        
         if (option) {
        this.props.addO(option)
        e.target.elements.option.value = ''
        }
        
    
        else if(!option){
            alert('input a text')
        }

       
    }
 render(){
     console.log(this.props.addO)
    
  return (
      <div className="wapper div">
      <form className='addO' onSubmit= {this.onFormSubmit}>
      <input className='input' type= 'text' name='option' />
        <div className='bc'>
      <button className='button'>Add Task</button>
        </div>
      </form>
      </div>


    );
  
  }
}

export default AddOption;


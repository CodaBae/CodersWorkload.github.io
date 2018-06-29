import React, { Component } from 'react';

class AddOption extends Component {
    onFormSubmit = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        
         if (option) {
        this.props.addO(option)
        e.target.elements.option.value = ''
        }
        else if(this.props.options.indexOf(option) > -1){
            alert('you have added this task before')
        }
        else if(!option){
            alert('input a text')
        }

       
    }
 render(){
     console.log(this.props.addO)
    
  return (
      <div className="wapper div">
      <form  onSubmit= {this.onFormSubmit}>
      <input type= 'text' name='option' />
    
      <button >Add Options</button>
      </form>
      </div>


    );
  
  }
}

export default AddOption;


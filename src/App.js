 import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Action from './Action'
import Option from './Option'
import AddOption from './AddOption'
import SModal from './modal'


class App extends Component {
  state = {
    options: [],
    selected:undefined
  }

  componentDidMount(){
let json = localStorage.getItem('option')
let option = JSON.parse(json)
this.setState({options: option || []})

} 
componentDidUpdate(prevstate){
if (prevstate.options !== this.state.option){
  let json = JSON.stringify(this.state.options)

  localStorage.setItem('option',json)

}   
}

  removeF = () => {
    this.setState({options:[]});
    localStorage.clear()
}
  
  addF = () => {
    const pick  = Math.floor(Math.random()* this.state.options.length)
    const option = this.state.options[pick]
    this.setState(()=>({selected: option}))
  }
  addO = (option) => {
    
    let display = this.state.options.push(option)
        localStorage.setItem('option',JSON.stringify(this.state.options))
        this.setState({
          display
         })
  }
  addOC = (ad) =>{
    this.setState(prevstate=>({
      options:prevstate.options.filter((option) => {return ad !== option})
    }),()=>{
       localStorage.setItem('option',JSON.stringify(this.state.options))
    });
   
 }
okayF = () =>{
  this.setState(()=>({selected: false}))
}
  

 render(){
  
  return (
      <div className="wapper div">
        <Header /> 
        <Action hasOptions = {this.state.options.length > 0} f = {this.addF}  />
        <Option options ={this.state.options} del = {this.removeF} addOC= {this.addOC}/>
        <AddOption addO = {this.addO} options ={this.state.options} />
        <SModal selected = {this.state.selected} okayF={this.okayF}/>
 
      </div>



    );
  }
  }

export default App;


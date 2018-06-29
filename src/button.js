import React, { Component } from 'react';

class Button extends Component {

  componentDidMount(){
    let a = localStorage.getItem('optio')
    let json = parseInt(a, 10)
   
      this.setState(()=>({count: json }))
  }
      
      
      componentDidUpdate(prevstate){
        
        let json = this.state.count
      
        localStorage.setItem('optio',json)
      
      }   
    
    state={count:0};
    
  AddCount=()=>{
 
      this.setState(prev=>({
        count:prev.count+1
      })
    
    )
    }
    state={count:0};
    subCount=()=>{
      

        this.setState(prevstate=>({
          count:prevstate.count-1
        }))
      }
      state={count:0};
      resetCount=()=>{

          this.setState(prevstate=>({
            count:prevstate.count=0
          }))

        }
  render() {
    return (
      <div className="wapper div">
      <h1>counts: {this.state.count}</h1>
        <button onClick= {this.AddCount}> +likes</button>
        <button onClick= {this.subCount}> -likes</button>
        <button onClick= {this.resetCount}> likes </button>
      </div>
    );
  }
}

export default Button;

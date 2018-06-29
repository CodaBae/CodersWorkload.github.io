import React, { Component } from 'react';
import Modal from 'react-modal'




class SModal extends Component {
 render(){
  return (
      <div className="wapper div">
      <Modal
      isOpen={this.props.selected}
      contentLabel='selected'
      >
     <h1>Selected Options</h1>
     {this.props.selected && <p>{this.props.selected}</p> }
     <button onClick={this.props.okayF}>okay</button>
     </Modal>
      </div>


    );
  }
  }

export default SModal;
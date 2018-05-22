import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class DescriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.state.isOpen = false;//props.isOpen;
  }

  render() {
    //this.setState({isOpen: this.props.isOpen});
    return (
      <form style={{display: this.props.isOpen ? 'block' : 'none' }}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Descriptions</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success">Apply</button>
          <button onClick={this.props.handlerCollapse} type="button" className="btn btn-danger">Escape</button>
        </div>

      </form>
    )
  }
}

import React, { Component } from 'react';

class AddReview extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="mt-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add new review</label>
            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.content}/>
          </div>
        </form>
      </div>
    )
  }
}

export default AddReview;
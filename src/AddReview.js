import React, { Component } from 'react';

import StarRatingComponent from 'react-star-rating-component';

class AddReview extends Component {
  state = {
    content: '',
    rating: 1
  }

  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      content: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      content: ''
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="mt-3">
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add new review</label>
            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.content} />
          </div>
        </form>
      </div>
    )
  }
}

export default AddReview;
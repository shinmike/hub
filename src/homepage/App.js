import React, { Component } from 'react';
import Reviews from './Reviews';
import AddReview from './AddReview';
import Nav from '../components/Nav';
import Slider from './Slider';
import moment from 'moment';
import menu from "./menu.json";
import { Link } from "react-router-dom";


class HomePage extends Component {

  state = {
    reviews: [
      {
        id: 1,
        name: "Georgene",
        content: "Not enough chicken. Sauce is a bit watery",
        img: "../img/avatar2.jpeg",
        timeStamp: 20190320,
        menuItem: 1,
        rating: 2
      },
      {
        id: 2,
        name: "John",
        content: "It was really good!",
        img: "../img/avatar1.jpeg",
        timeStamp: 20190420,
        menuItem: 2,
        rating: 4
      }
    ],
    search: '',
  }

  deleteReview = (id) => {
    const reviews = this.state.reviews.filter(review => {
      return review.id !== id;
    })
    this.setState({
      reviews
    })
  }

  addReview = (review) => {
    review.id = Math.random();
    review.img = "../img/avatar3.jpeg";
    review.timeStamp = moment().format("YYYYMMDD")

    let reviews = [...this.state.reviews, review]
    this.setState({
      reviews
    })
  }

  renderMenu = (menu) => {
    return (
        <div className="card col-md mt-3 shadow-sm p-3 mb-5 bg-white rounded" key={menu.id}>
          <Link key={menu.id} to={"meal/" + menu.id} style={{ textDecoration: 'none', color: 'black' }}>
          <img src={menu.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{menu.title}</h5>
            <p className="card-text">{menu.description}</p>
          </div>
          </Link>
          <AddReview addReview={this.addReview} />
          <ul className="list-group list-group-flush">
            <Reviews reviews={this.state.reviews} deleteReview={this.deleteReview} />
          </ul>
        </div>
    )
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  render() {

    const { search } = this.state;
    const filteredMenu = menu.filter(menuItem => {
      return menuItem.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col-9"></div>
          <div className="col-md-3">
          <input type="text" className="form-control" onChange={this.onChange} placeholder="Search..." />
          </div>
        </div>
        <h1 className="display-2 text-center mt-3">Daily Special</h1>
        <Slider />
        <h1 className="display-2 text-center mt-3">Reviews</h1>
        <div className="row">
          <div className="card-columns">

            {filteredMenu.map(menu => {
              return this.renderMenu(menu);
            })}

          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;

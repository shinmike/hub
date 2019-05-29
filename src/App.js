import React, { Component } from 'react';
import Reviews from './Reviews';
import Stars from './Stars';
import AddReview from './AddReview'

import moment from 'moment';


class App extends Component {

  state = {
    reviews: [
      { id: 1, 
        name: "Rebecca", 
        content: "Not enough chicken. Sauce is a bit watery", 
        img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-fish.png",
        timeStamp: 20190320
      },
      { id: 2, 
        name: "John", 
        content: "It was really good!", 
        img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
        timeStamp: 20190420
      }
    ]
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
    review.img = "https://via.placeholder.com/150";
    review.timeStamp = moment().format("YYYYMMDD")
    let reviews = [...this.state.reviews, review]
    this.setState({
      reviews
    })

  }

  render() {
    return (
      <div className="container">
        <h1 className="display-2 text-center mt-3">Hub Reviews</h1>

        <div className="row">
          <div className="card-columns">
            <div className="card col-md mt-3 shadow-sm p-3 mb-5 bg-white rounded">
              <img src="https://static01.nyt.com/images/2014/08/24/magazine/24eat/mag-24Eat-t_CA0-articleLarge.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <Stars />
                <h5 className="card-title">Butter Chicken</h5>
                <p className="card-text">Authentic in house made sauce of butter, spices, tomato and ginger garlic mix with pieces of chicken breast to produce the most popular dish in the world, served with naan bread & basmati rice.</p>
              </div>

              <AddReview addReview={this.addReview}/>
              <ul className="list-group list-group-flush">
                <Reviews reviews={this.state.reviews} deleteReview={this.deleteReview} />
              </ul>
            </div>

            <div className="card col-md mt-3 shadow-sm p-3 mb-5 bg-white rounded">
              <img src="https://media-cdn.tripadvisor.com/media/photo-p/12/20/b3/da/barton-fish-chips.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <Stars />
                <h5 className="card-title">Fish and Chips</h5>
                <p className="card-text">Mild flavoured, moist, cooked in signature tempura style batter. Tender, crisp, wholesome goodness. Served with fresh cut fries and signature tartar sauce.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>

            <div className="card col-md mt-3 shadow-sm p-3 mb-5 bg-white rounded">
              <img src="https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/2015-r-xl-grilled-halloumi-and-lentil-salad.jpg?itok=yfaP7IKN" className="card-img-top" alt="..." />
              <div className="card-body">
                <Stars />
                <h5 className="card-title">Halloumi</h5>
                <p className="card-text">Beer Battered Halloumi, Zucchini + Potato Pancake, Smashed Peas, Mint Yogurt, Acorn Garden Lemon Balm.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default App;

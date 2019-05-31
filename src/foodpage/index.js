import React, { Component } from 'react'
import Nav from "../components/Nav"
import menu from "../homepage/menu.json"
import Reviews from '../homepage/Reviews';

import StarRatingComponent from 'react-star-rating-component';

class FoodPage extends Component {

    state = {
        reviews: [
            {
                id: 1,
                name: "Rebecca",
                content: "Not enough chicken. Sauce is a bit watery",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-fish.png",
                timeStamp: 20190320,
                menuItem: 1,
                rating: 4
            },
            {
                id: 2,
                name: "John",
                content: "It was really good!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2,
                rating: 5
            },
            {
                id: 3,
                name: "Calvin",
                content: "It was super good!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2,
                rating: 4
            },
            {
                id: 4,
                name: "Kirsty",
                content: "It was really incredible!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2,
                rating: 2
            },
            {
                id: 5,
                name: "Michelle",
                content: "Amazing!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2,
                rating: 2
            },
            {
                id: 6,
                name: "Jason",
                content: "Woohoo!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2,
                rating: 4
            }
        ],
        search: '',
        rating: 4
    }

    // handlePreOrder() {
    //     alert("Your order has been placed! Your order number is 7. Estimated Wait: 5 minutes")
    // }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    render() {

        let item = menu.filter(menu => {
            return menu.id == this.props.match.params.number;
        })

        let itemContent = item[0];
        let itemContentImage = itemContent.image;
        let itemContentTitle = itemContent.title;
        let itemContentDescription = itemContent.description;

        return (
            <div className="container">
                <Nav />
                <div className="card mb-3 mt-5">
                    <div className="row no-gutters">
                        <div className="col-md-8 d-flex">
                            <img src={itemContentImage} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h2 className="card-title">{itemContentTitle} <i className="fa fa-shopping-cart" data-toggle="modal" data-target="#exampleModal" onClick={this.handlePreOrder}></i></h2>
                                
                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Success, your order has been placed!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                         Your order number is 7. Estimated Wait: 5 minutes
            </div>
                    </div>
                </div>
            </div>

                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={this.state.rating}
                                    onStarClick={this.onStarClick.bind(this)}
                                />
                                <p className="card-text">{itemContentDescription}</p>
                                <Reviews reviews={this.state.reviews} />
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        );
    }

}

export default FoodPage;
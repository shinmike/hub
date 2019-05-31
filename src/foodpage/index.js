import React, { Component } from 'react'
import Nav from "../components/Nav"
import menu from "../homepage/menu.json"
import Reviews from '../homepage/Reviews';

class FoodPage extends Component {

    state = {
        reviews: [
            {
                id: 1,
                name: "Rebecca",
                content: "Not enough chicken. Sauce is a bit watery",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-fish.png",
                timeStamp: 20190320,
                menuItem: 1
            },
            {
                id: 2,
                name: "John",
                content: "It was really good!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2
            },
            {
                id: 3,
                name: "Calvin",
                content: "It was super good!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2
            },
            {
                id: 4,
                name: "Kirsty",
                content: "It was really incredible!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2
            },
            {
                id: 5,
                name: "Michelle",
                content: "Amazing!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2
            },
            {
                id: 6,
                name: "Jason",
                content: "Woohoo!",
                img: "https://int.nyt.com/applications/cooking/2161306/assets/user-img-tomato.png",
                timeStamp: 20190420,
                menuItem: 2
            }
        ],
        search: '',
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
                        <div className="col-md-6 d-flex">
                            <img src={itemContentImage} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h2 className="card-title">{itemContentTitle}</h2>
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
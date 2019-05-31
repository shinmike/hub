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
                <div className="card">
                    <div class="imagebox">
                        <img className="card-img-top" src={itemContentImage} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{itemContentTitle}</h5>
                        <p className="card-text">{itemContentDescription}</p>
                    </div>
                </div>
                <Reviews reviews={this.state.reviews} />
            </div>
        );
    }

}

export default FoodPage;
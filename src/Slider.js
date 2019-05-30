import React from 'react';
import { Card } from 'semantic-ui-react'
import * as style from "./style.css";

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                    <div className={style.sliderWidth}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img className="d-block w-100" src="../img/food1.jpeg"alt="Second slide" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className={style.sliderWidth}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img className="d-block w-100" src="../img/food2.jpeg" alt="Second slide" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className={style.sliderWidth}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img className="d-block w-100" src="../img/food3.jpeg" alt="Third slide" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>  */}
                    {/* <div className="carousel-item">
                    <img className="d-block w-100" src="https://food-guide.canada.ca/wp-content/uploads/2018/10/enjoy_your_food.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://pinchofyum.com/wp-content/uploads/Red-Curry-Noodles-Stir-Fry-Square.jpg" alt="Third slide" />
                </div> */}
                </div>



                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Slider;
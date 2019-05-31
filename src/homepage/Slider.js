import React from 'react';
import * as style from "./style.css";

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                    <div className={style.sliderWidth}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img className="d-block w-100" src="../img/food4.jpg"alt="Second slide" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">CHEF'S ENTREE</h2>
                                    <h3 class="card-title">Gnocchi with your choice of Sauce</h3>
                                    <p class="card-text">Marinara, Bolognese or Alfredo Served with Asparagus</p>
                                    <p class="card-text"><small class="text-muted">Last updated at 9:00AM </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className={style.sliderWidth}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img className="d-block w-100" src="../img/food5.jpg" alt="Second slide" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">HOMEMADE SOUP</h3>
                                    <h4 class="card-title2">Seafood Chowder</h4>
                                    <h5 class="card-title3">Fish ingredients,Halal,Shellfish ingredients</h5>
                                    <p class="card-text"><small class="text-muted">Last updated at 9:00AM</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className={style.sliderWidth}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img className="d-block w-100" src="../img/food6.jpg" alt="Third slide" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">DELI FEATURE</h2>
                                    <h3 class="card-title">Homemade Turkey Breast Sandwich</h3>
                                    <p class="card-text">with Brie and Spinach on Cramberry Bread</p>
                                    <p class="card-text"><small class="text-muted">Last updated at 9:02AM</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className={style.sliderWidth}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img className="d-block w-100" src="../img/food7.jpeg" alt="Fourth slide" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">GRILL FEATURE</h3>
                                    <h4 class="card-title">Shrimp Tacos</h4>
                                    <p class="card-text">Flour Tortilla, Chipotle Lime Shrimps, Cilantro Avo Crema, Slaw, Pickled Onions and Cilantro Sprigs. Lime wedges.</p>
                                    <p class="card-text"><small class="text-muted">Last updated at 9:02AM</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
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
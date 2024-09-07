// src/components/routes/Landing/Video/Video.js

import React from "react";
import "./Videos.css";

const Videos = () =>{
    return(
        <div>

        <section className="video-container ">
            <div className='headings'>
                <div className='heading-1'>SHOWCASE</div>
                <div className='heading-2'>Our Portfolio</div>
            </div>
            <div id="carouselPortfolioInterval" class="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/_8K0ZcDRgIQ" 
                                title="YouTube first" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/x5TfnpNvVzw" 
                                title="YouTube second" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/smlUn4wNBTU" 
                                title="YouTube third" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/0pxJN8mvQ5Q"  
                                title="YouTube fourth" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/Hmku0HzNZ6c" 
                                title="YouTube seventh" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/06MPRx9rjcs" 
                                title="YouTube fifth" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/46W6m-cglRE" 
                                title="YouTube sixth" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>
                    <div class="carousel-item" data-mdb-interval="auto">
                        <div class="d-flex justify-content-center">
                            <iframe 
                                src="https://www.youtube.com/embed/zuShviTsvJY" 
                                title="YouTube seventh" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                class="carousel-video">
                            </iframe>
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselPortfolioInterval" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselPortfolioInterval" data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        </div>
    )
}

export default Videos;
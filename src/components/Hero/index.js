import React from 'react';

// CSS
import "./style.css";

function Hero(props) {
    
    return (
        <div className="col-12 hero-container">
            <div style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.57) 87.03%, rgba(255, 255, 255, 0) 138.73%), url(${props.background})` }} className="hero-background col-12"></div>
            <div className="col-12 hero">
                <div className="content-container">
                    <div className="col-xs-12 col-sm-7 col-md-6 col-lg-8 left-side text-light" data-page={props.appName}>
                        <div className="title-container">
                            <div className="mb-3 logo">
                                <img src={props.logo} alt={props.appName} />
                            </div>
                            <div className="">
                                <div className="mb-2 deskripsi">
                                    <h5>
                                        {props.deskripsi}
                                    </h5>
                                </div>
                                <div className="mb-2 title">
                                    <h1>
                                        {props.title}
                                    </h1>
                                </div>
                            </div>
                            <div className="slogan">
                                <p>
                                    {props.slogan}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 right-side" data-page={props.appName}>
                        <div className="logo-title mt-5 mb-2">
                            <div className="d-flex justify-content-center w-100 mb-5">
                                <div className="logo d-flex justify-content-center col-4">
                                    <img src={props.logo} alt={props.appName} />
                                </div>
                                <div className="d-flex align-items-center deskripsi">
                                    <h4>
                                        <b>
                                            Bantul Projotamansari <br /> Blended Learning
                                        </b>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {props.children}
                    </div>

                </div>

            </div>

        </div>
        
    );
}

export default Hero;
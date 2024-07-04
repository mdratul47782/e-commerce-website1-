import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Imag1 from '../assets/Images/gh.jpg';
import Imag2 from '../assets/Images/kl.jpg';
import Imag3 from '../assets/Images/th.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
    return (
        <div>
            <Carousel className="pt-5">
                <Carousel.Item>
                    <div className="position-relative">
                        <Image src={Imag1} className="d-block w-100 carousel-image" />
                        <div className="carousel-overlay"></div>
                        <Carousel.Caption className="carousel-caption-custom">
                            <h3>BEST SALES!!</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <Image src={Imag2} className="d-block w-100 carousel-image" />
                        <div className="carousel-overlay"></div>
                        <Carousel.Caption className="carousel-caption-custom">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <Image src={Imag3} className="d-block w-100 carousel-image" />
                        <div className="carousel-overlay"></div>
                        <Carousel.Caption className="carousel-caption-custom">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
            <style jsx>{`
                .carousel-image {
                    height: 500px;
                    object-fit: cover;
                }
                .carousel-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                }
                .carousel-caption-custom {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    text-align: center;
                    color: white;
                }
                .carousel-caption-custom h3 {
                    font-size: 2rem;
                    font-weight: bold;
                }
                .carousel-caption-custom p {
                    font-size: 1.2rem;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;

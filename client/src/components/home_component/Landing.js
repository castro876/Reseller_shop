import { motion } from "framer-motion"
import { useState } from "react";

const Landing = () => {
 
 return ( 
      <>
     <motion.div className="mt-5 d-md-none"
     initial={{y:100,opacity:0}}
     animate={{y:120,opacity:1.5}}
     transition={{delay:4.5,duration:1, stiffness:120}}>

   <h2 className="title"><span className="text-danger">Trending</span> Products</h2>
    <div className="bg-warning p-1 mt-1 text-dark text-center w-100">Get 15% Off Clothes & Appliances</div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-cont" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={'/images/product-1.jpg'} className="d-block w-100 mw-100" alt="product-1"/>
      <div className="carousel-caption">
      <h5 className="text-success fs-2">Men Red T-shirt</h5>
        <p className="text-white fs-5">Some representative placeholder content for the second slide.</p>
        <button type="button" class="btn btn-dark text-white px-4 py-1 fs-2 rounded-pill">Shop Now &rarr;</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={'/images/product-2.jpg'} className="d-block w-100" alt="product-2"/>
      <div className="carousel-caption">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={'/images/product-3.jpg'} className="d-block w-100" alt="product-3"/>
      <div className="carousel-caption">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</motion.div>


<motion.div className="mt-5 slider-container container-fluid">
      <h2 className="title"><span className="text-danger">Trending</span> Products</h2>
    <div className="row border border-0 mb-4 gx-2 gy-3 text-center">

  <div className="col">    
    <div className="bg-warning p-1 text-dark text-center w-100">Get 15% Off Clothes & Appliances</div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-cont" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={'/images/magazine-cover1.jpg'} className="d-block w-100 mw-100" alt="product-1"/>
      <div className="carousel-caption">
      <h5 className="text-success fs-2">Men Red T-shirt</h5>
        <p className="text-white fs-5">Some representative placeholder content for the second slide.</p>
        <button type="button" class="btn btn-dark text-white px-4 py-1 fs-2 rounded-pill">Shop Now &rarr;</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={'/images//magazine-cover.jpg'} className="d-block w-100" alt="product-2"/>
      <div className="carousel-caption">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={'/images/product-3.jpg'} className="d-block w-100" alt="product-3"/>
      <div className="carousel-caption">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div> 
</div>
</motion.div>
</>
     );
}
 
export default Landing;
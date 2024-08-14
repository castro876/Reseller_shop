import { Link } from "react-router-dom/cjs/react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Cart from "../cart_component/Cart";
import Hero from "./Hero";

const Store = () => {

  const [cartStorage, setCartStorage] = useState([]);

useEffect(() => {
  // Load data from sessionStorage on component mount
  const cartData = JSON.parse(sessionStorage.getItem("store") || "[]");
  setCartStorage(cartData);

}, []);

const count = cartStorage.length


  const [secondAnimationVisible, setSecondAnimationVisible] = useState(false);
   
  const handleAnimationComplete = () => {
    setSecondAnimationVisible(true);
  };

    return ( 
        <>
        <motion.div className="nike-cont d-md-none"
        initial={{scale:4.5,y:0}}
        animate={{scale:1,y:157}}
        transition={{delay:1.5,duration:3, stiffness:120}}
        >
        
          <div className="nike-set bg-white text-dark text-center position-absolute w-100 py-1">
            <div className="box-style text-center rounded-pill w-50 m-auto p-4"></div>
            <img src="/images/nike-1.png" alt="nike" className="img-fluid w-25"/>
            </div>
            {secondAnimationVisible && <motion.div className="d-md-none"
              initial={{opacity:0, x:100}}
             animate={{opacity:100, x:-50}}
             transition={{delay:1,duration:1}}>
              <h1 className="text-white sign-img fw-bolder fs-1">Unlock a world of style!<br/>
              <span className="text-success fs-5 mt-3">yard Sale!</span><br/>
              <button type="button" class="btn btn-danger px-4 text-white" style={{"fontSize":"16px"}}>Shop Now&rarr;</button>
              </h1>
          {/*<img src="/images/welcome-sign.png" alt="store" className="img-fluid d-md-none sign-img"/>*/}
          </motion.div>}  
         <motion.img src="/images/store-1.jpg" alt="store" className="img-fluid"/>
        </motion.div>
        <motion.nav className="navbar navbar-dark bg-dark py-4 d-md-none mb-1 fixed-top" 
      initial={{opacity:0}}
      animate={{opacity:1.1}}
      transition={{delay:3,duration:3}}
      onAnimationComplete={handleAnimationComplete}
     >
      <div className="container">
        <div className="position-relative">
       <button className="navbar-toggler">
      <span className="navbar-toggler-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></span>
    </button>
    <h1 className="text-danger position-absolute d-inline">G<span className="text-white">aGAND</span></h1>
     </div>
     <Link to={'/shoppingcart'} class="btn btn-success" type="button"><i className="fa fa-shopping-cart text-white" aria-hidden="true"></i></Link>
     <div className="row w-100 m-auto pt-4 gx-0"> 
     <div className="col-10">
     <input className="form-control py-2 " placeholder="Type to search..."/>
     </div>
     <div className="col-2">
     <button type="button" class="btn btn-danger px-4" style={{"fontSize":"20px"}}>&rarr;</button>
    </div>
   </div>
   </div>
   <div class="offcanvas offcanvas-start w-75" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>

   </motion.nav>

   {/* lg navBar */}
   <motion.div className="fixed-top pt-0 pb-3 bg-white nav-cont container-fluid"
   initial={{y:-50}}
   animate={{y:0}}
   transition={{delay:1,duration:3}}
   >
     <div className="d-inline-block"><a href="#" className="mx-2 text-decoration-none fs-4 text-dark"><span style={{"color":"orangered"}}>G</span>aGAND</a></div>
     <div className="d-inline-block text-end" style={{"width":"50%","paddingBottom":"0px"}}><img src="/images/nike-1.png" alt="nike" className="img-fluid" style={{"width":"15%","marginBottom":"7px"}}/></div>
     <div className="d-inline-block float-end mt-2 mx-2"><input class="form-control d-inline" style={{"fontSize":"14px","width":"70%"}} placeholder="Type to search..."/> <button className="btn btn-dark" style={{"fontSize":"15px","backgroundColor":"orangered","border":"none"}}>Search</button></div>
    
     <nav className="inner-nav text-center bg-white rounded-pill w-50 m-auto border-0">
       <ul className="mt-2 mb-2">
       <Link to={"/"} className="text-decoration-none mx-1" style={{"color":"orangered"}}> <s>Home</s></Link>
       <Link to={"/product"} className="text-decoration-none mx-1 text-dark">Products</Link>
       <Link to={"/"} className="text-decoration-none mx-1 text-dark">Policy</Link>
       <Link to={"/"} className="text-decoration-none mx-1 text-dark">Blogs</Link>
       <Link to={"/"} className="text-decoration-none mx-1 text-dark">Contact</Link>
       <Link to={"/shoppingcart"}><i class="fa fa-shopping-cart text-success fs-4" aria-hidden="true"><sup className="text-dark">{count}</sup></i></Link>
       </ul>
    </nav>
   </motion.div>
   <Hero/>
        </>
     );
}
 
export default Store;
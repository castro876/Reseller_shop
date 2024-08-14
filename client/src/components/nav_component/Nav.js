import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Nav = () => {

  const [cartStorage, setCartStorage] = useState([]);

useEffect(() => {
  // Load data from sessionStorage on component mount
  const cartData = JSON.parse(sessionStorage.getItem("store") || "[]");
  setCartStorage(cartData);

}, []);

const count = cartStorage.length


  return ( 
    <>
    <nav className="navbar navbar-dark bg-dark py-4 d-md-none mb-1 fixed-top">
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
</nav>

{/* lg navBar */}
<div className="fixed-top pt-0 pb-3 nav-cont container-fluid" style={{"backgroundColor":"rgba(255, 255, 255, 1)","box-shadow": "0px 25px 20px -14px rgba(0,0,0,0.11)"}}>
 <div className="d-inline-block"><a href="#" className="mx-2 text-decoration-none fs-4 text-dark"><span style={{"color":"orangered"}}>W</span>eBBIE</a></div>
 <div className="d-inline-block text-end" style={{"width":"50%","paddingBottom":"0px"}}><img src="/images/nike-1.png" alt="nike" className="img-fluid" style={{"width":"15%","marginBottom":"7px"}}/></div>
 <div className="d-inline-block float-end mt-2 mx-2"><input class="form-control d-inline" style={{"fontSize":"14px","width":"70%"}} placeholder="Type to search..."/> <button className="btn btn-dark" style={{"fontSize":"15px","backgroundColor":"orangered","border":"none"}}>Search</button></div>

 <nav className="inner-nav text-center rounded-pill w-50 m-auto border-0" style={{"backgroundColor":"rgba(255, 255, 255, 1)","box-shadow": "0px 25px 20px -14px rgba(0,0,0,0.11)"}}>
   <ul className="mt-2 mb-2">
   <Link to={"/"} className="text-decoration-none mx-1" style={{"color":"orangered"}}> <s>Home</s></Link>
   <Link to={"/product"} className="text-decoration-none mx-1 text-dark">Products</Link>
   <Link to={"/"} className="text-decoration-none mx-1 text-dark">Policy</Link>
   <Link to={"/"} className="text-decoration-none mx-1 text-dark">Blogs</Link>
   <Link to={"/"} className="text-decoration-none mx-1 text-dark">Contact</Link>
   <Link to={"/shoppingcart"}><i class="fa fa-shopping-cart text-success fs-4" aria-hidden="true"><sup className="text-dark">{count}</sup></i></Link>
   </ul>
</nav>
</div>
    </>
   );
}
 
export default Nav;
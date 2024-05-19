const Related = () => {
    return ( 
        <>
         <h2 className="title text-danger" style={{"marginTop":"50px","textAlign":"center"}}>Related <span className="text-dark">Products</span> </h2>
         <div className="container-fluid btn-cont">
  <div className="row border border-0 mb-4 gx-1 gy-3 text-center">
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img src="/images/product-4.jpg" alt="product" style={{"width":"100%"}}/>
        <h2>Item-1</h2>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <h3>$50.00</h3>
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img src="/images/product-5.jpg" alt="product" style={{"width":"100%"}}/>
        <h2>Item-2</h2>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <h3>$60.00</h3>
        <button className="btn btn-dark">Buy Now &rarr;</button>
    </div>
    </div>

    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img src="/images/product-6.jpg" alt="product" style={{"width":"100%"}}/>
        <h2>Item-1</h2>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <h3>$50.00</h3>
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img src="/images/product-7.jpg" alt="product" style={{"width":"100%"}}/>
        <h2>Item-2</h2>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <h3>$60.00</h3>
        <button className="btn btn-dark">Buy Now &rarr;</button>
    </div>
    </div>
    </div>
   </div>
        </>
     );
}
 
export default Related;
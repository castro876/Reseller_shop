import Foot from "../foot_component/Foot";
import Nav from "../nav_component/Nav";

const Product = () => {
    return ( 
        <>
         <Nav/>
         <div>
                <div className="container-fluid mb-5 banner-cont border" style={{"marginTop":"180px"}}>
                <img src="/images/product-banner.jpg" alt="magazine-cover" className="w-100 img-fluid" />
                </div>

<div className="container-fluid">
    <div className="d-inline-block">
    <p>Home / <span className="text-danger">Clothes</span></p>
    </div>
<div className="d-inline-block float-end">
 <label for="sort">Sort by:&nbsp;</label>
<select name="cars" id="cars">
  <option value="Men">Men</option>
  <option value="Women">Women</option>
  <option value="Kids">Kids</option>
</select>
</div>
</div><br />

<div className="container-fluid btn-cont">    
  <div className="row border border-0 mb-4 gx-1 gy-3 text-center">
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-1</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-2</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-3</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-4</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    </div>
   </div><br /><br />

   <div className="container-fluid btn-cont">    
  <div className="row border border-0 mb-4 gx-1 gy-3 text-center">
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-1</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-2</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-3</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-4</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    </div>
   </div><br /><br />

   <div className="container-fluid btn-cont">    
  <div className="row border border-0 mb-4 gx-1 gy-3 text-center">
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-1</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-2</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-3</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-4</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    </div>
   </div><br /><br />

   <div className="container-fluid btn-cont">    
  <div className="row border border-0 mb-4 gx-1 gy-3 text-center">
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-1</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-2</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    
    <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>Women</p>
        <div className="text-start">
        <p>Item-3</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
      </div>
    
    <div className="d-inline-block" style={{"width":"48%"}}>
    <img className="border" src="/images/home_pic2.png" alt="product" style={{"width":"100%"}}/>
    <p className="text-white py-2" style={{"backgroundColor":"black"}}>Men</p>
    <div className="text-start">
        <p>Item-4</p>
        <s className="text-danger">$150.00</s>
        <span>$50.00</span><br />
        <span>Price Reflects 40% Off</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <button className="btn btn-dark">Buy Now &rarr;</button>
      </div>
    </div>
    </div>
    </div>
   </div><br /><br />


   <nav aria-label="Page navigation example" className="mx-3">
  <ul class="pagination justify-content-start">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </div>
  <Foot/>
 </>

        
     );
}
 
export default Product;
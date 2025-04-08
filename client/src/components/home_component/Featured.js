import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Featured = () => {

  const [prodData, setproData] = useState(null)

    useEffect(() => {
         const func = async () => {
                const response = await fetch('http://localhost:4001/all_product')
                const data = await response.json()
                setproData(data)
         }
           
         func()
    },[])

    return ( 
        <>
  <div className="container-fluid btn-cont">
  <h2 style={{"marginTop":"20px", "marginBottom":"20px"}}><span className="text-danger">Featured</span> Products <span style={{'fontSize':"35px"}}>&rarr;</span></h2>
  <div className="row border border-0 mb-4 gx-1 gy-3 text-center">
   
  <div className="col-sm">
      <div className="d-inline-block" style={{"width":"48%","marginRight":"12px"}}>
        <img className="border" src={`/images/${prodData && prodData[0].image}`} alt="product" style={{"width":"100%"}}/>
        <p className="text-white py-2" style={{"backgroundColor":"black"}}>{prodData && prodData[0].gender}</p>
        <div className="text-start">
        <p>{prodData && prodData[0].title}</p>
        <s className="text-danger">${prodData && prodData[0].discount}</s>
        <span>${prodData && prodData[0].price}</span><br />
        <span>{prodData && prodData[0].discount_details}</span><br />
        <span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>&nbsp;(5.5)</span>
        </span><br /><br />
        <Link to={`/singleproduct/${prodData && prodData[0]._id}`}><button className="btn btn-dark">Buy Now &rarr;</button></Link>
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
    </div>

    <div className="container-fluid btn-cont">
    <h2 style={{"marginTop":"40px", "marginBottom":"20px"}}><span className="text-danger">Latest</span> Products <span style={{'fontSize':"35px"}}>&rarr;</span></h2>
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
    </div>   
<br/>
 <div className="view-box"><p>&larr; Load More &rarr;</p></div>
   </>
  );
}
 
export default Featured;
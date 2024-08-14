import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Nav from "../nav_component/Nav";
import { motion } from "framer-motion";
import Toast from "../toast_component/Toast"

const Single = () => {

  let  id  = useParams()

    const [fun, setfun] = useState(null)
    const endpoint = `http://localhost:4001/single_product/${id}`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id) 
    };

    useEffect(() => {
      const func = async () => {
             const response = await fetch(endpoint, options)

             if (!response.ok) {
                 throw new Error('Network response was not ok');
               }

             const data = await response.json()
             setfun(data)
      }
        
      func()

       //scroll at the top of the page
  window.scrollTo(0, 0);
 },[])

   //change qunatity state
   const [Quantity, setQuantity] = useState(1)

   //Handler useRef
   const myElementRef = useRef();
   const imgRef = useRef();
   const imgRefA = useRef();
   const imgRefB = useRef();
   const imgRefC = useRef();

 // Function to call method on the DOM element
 const handleClick = () => {
   // Access method of the DOM element using the ref
      console.log(myElementRef.current.src = imgRef.current.src); // Call method on the DOM element
 };    
 
 const handleClickA = () => {
      console.log(myElementRef.current.src = imgRefA.current.src)
 }

 const handleClickB = () => {
   console.log(myElementRef.current.src = imgRefB.current.src)
}

const handleClickC = () => {
   console.log(myElementRef.current.src = imgRefC.current.src)
}

//Add To cart Logics
const [dataStorage, setDataStorage] = useState([])

const titleRef = useRef();
const priceRef = useRef();
const sizeRef = useRef();

useEffect(() => {
  // Load data from sessionStorage on component mount
  const storedData = JSON.parse(sessionStorage.getItem('store') || '[]');
  setDataStorage(storedData);
}, []);


const [added, setAdded] = useState(false)
const [play, setPlay] = useState(false)

const addToCart = () => {
    
  const title = titleRef.current.innerText
  const price = priceRef.current.innerText.slice(1)
  const size = sizeRef.current.value
  const image = myElementRef.current.src

   try {
       const obj = { 
         title: title,
         price: price,
         quantity: Quantity,
         size: size,
         image: image,
         id: id.id

     }; // Example object
       const newData = [...dataStorage, obj]; // Create new array with the new object
       setDataStorage(newData); // Update state
       sessionStorage.setItem('store', JSON.stringify(newData)); // Update sessionStorage
       setPlay(true)
     } catch (error) {
       console.log('Failed to add to sessionStorage: ' + error.message);
     }
}


 


    return ( 
     <>
    <div className="container w-75" style={{"marginTop":"150px","background":"#fff","boxShadow": "0 0 20px 0px rgba(0, 0, 0, 0.1)"}}>
     

    {/* Row-One */} 
    <div className="row">
     {/* Column-One */}  
    <div className="col-sm">
    
     {/* Row-Two */}    
  <div className="row pb-2"> 
    <div className="col ">
      <div className="d-inline-block  text-white">
      <img className="w-100" src={`/images/${fun && fun.data.image}`} alt="instagram"  ref={myElementRef}/>
      </div>
    </div>
    </div> 

  <div className="row">   
    <div className="col border">
      <div className="d-inline-block  text-white">
      <img className="w-100" src="/images/m01107014__1_48.jpg" alt="instagram" ref={imgRef} onClick={handleClick}/>
      </div>
    </div>

    <div className="col border">
      <div className="d-inline-block  text-white">
      <img className="w-100" src="/images/product-2.jpg" alt="instagram" ref={imgRefA} onClick={handleClickA}/>
      </div>
    </div>

    <div className="col border">
      <div className="d-inline-block  text-white">
      <img className="w-100" src="/images/product-3.jpg" alt="instagram" ref={imgRefB} onClick={handleClickB}/>
      </div>
    </div>

    <div className="col border">
      <div className="d-inline-block  text-white">
      <img className="w-100" src="/images/product-4.jpg" alt="instagram" ref={imgRefC} onClick={handleClickC}/>
      </div>
    </div>
 </div>
</div>

{/* Column-Two */} 
<div className="col-sm">
 <div className="mx-2 mt-5 mb-5 position-relative">
  <p>Home / <span className="text-danger">Cart</span></p>
  {added && <motion.div className='py-2 px-2 text-center' style={{"position":"absolute","top":"20px","left":"70px","width":"50%","backgroundColor":"lightgreen","opacity":"0.8"}}
   initial={{opacity:1.1,y:0}}
   animate={{opacity:0,y:100}}
   transition={{delay:1,duration:3}}
  >
      Added to cart
     </motion.div>} <br />
  <h1 className="fw-bolder" ref={titleRef}>{fun && fun.data.title}</h1>
    <strike className="text-danger">${fun && fun.data.discount}</strike><h4 ref={priceRef}>${fun && fun.data.price}</h4>
    <p>{fun && fun.data.discount_details}</p>
    <input type="number" value={Quantity} style={{"width":"15%","textAlign":"left"}} onChange={(e) =>  {
                     if (e.target.value >= 1) {
                    setQuantity(parseInt(e.target.value))
                     } else{}
                  }}/><br /><br />
  <select ref={sizeRef}>
    <option>L</option>
    <option>XXL</option>
    <option>XL</option>
    <option>M</option>
    <option>S</option>
    </select><br /><br />
<button type="submit" className="btn btn-outline-dark rounded-0" onClick={addToCart}>Add To Cart &rarr;</button><br />

 <h3 className="fw-bolder">Product Details <i className="fa fa-indent text-danger"></i></h3> 
 <p>{fun && fun.data.description}</p>
 </div>
  </div>
 </div>
</div>

{/* Toast */} 
{play && <Toast
  message="Item added to cart!"
  show={play}
  onClose={() => setPlay(false)}
/>}

 </>
     );
}
 
export default Single;
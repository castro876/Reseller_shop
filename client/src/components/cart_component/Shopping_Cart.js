import { useState, useEffect, useRef } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from 'axios';
import escapeHtml from 'escape-html';
import Cookies from 'js-cookie';
import Nav from "../nav_component/Nav";
import Foot from "../foot_component/Foot"
import Truck from "../../page/Truck";

const Shopping_Cart = () => {
const [cartStorage, setCartStorage] = useState([]);

useEffect(() => {
  // Load data from sessionStorage on component mount
  const cartData = JSON.parse(sessionStorage.getItem("store") || "[]");
  setCartStorage(cartData);
  //scroll at the top of the page
  window.scrollTo(0, 0);
}, []);


 

  // Function to remove an item
  const deleteHandler = (index) => {
    // Create a copy of the cartStorage array
    const updatedCart = [...cartStorage];
    // Remove the item at the specified index
    updatedCart.splice(index, 1);
    // Update sessionStorage
    sessionStorage.setItem("store", JSON.stringify(updatedCart));
    // Update state to reflect the removal
    setCartStorage(updatedCart)
    //Refresh page
    window.location.reload();
  };

  // Calculate subtotal
  const subtotal = cartStorage.reduce((acc, item) => {
    const price = parseFloat( item.price);
    const quantity = parseInt(item.quantity);

    if (!isNaN(price) && !isNaN(quantity)) {
      return acc + (price * quantity);
    } else {
      return acc;
    }
  }, 0);

  // Define shipping cost
  const shippingCost = 0; // Assuming shipping is free

  // Calculate total
  const total = subtotal + shippingCost;


  //Login Toggle function
 const [showUser, setshowUser] = useState(true)


  //Submitting form data to Backend_Api
  //Submit form to backend 
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null) 
  const [showPassword, setShowPassword] = useState(false);

  const [isVerified, setisVerified] = useState(false)
  const [isError, setisError] = useState('')
  const [isPlaced, setisPlaced] = useState(false)


    const fetchInfo = async (e) => {
      e.preventDefault();
      
      sessionStorage.setItem('guessemail', JSON.stringify(email))

      //sanetize user input
      const sanitizedEmail = escapeHtml(email);
      const sanitizedPassword = escapeHtml(password);

      // Validate user input
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      //const regexSymbol = /<|>|\s/g;
  
      if (!sanitizedEmail) {
          setisError("Email field cannot be empty");
      } else if (!sanitizedPassword) {
            setisError("Password field cannot be empty");
      } else {
          setisError(""); // Clear error message if all validation passes
  
          // Proceed with fetching data
          const fetchData = {
              email: sanitizedEmail,
              password: sanitizedPassword
          };
  
          const endpoint = 'https://reseller-shop-backend.onrender.com/checkout';
  
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(fetchData),
              credentials: 'include' // Include cookies in the request
          };
  
            
          useEffect(() => {
            const func = async () => {
              const response = await fetch(endpoint, options);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
                console.log(data.result);
              // Handle successful response
              setisVerified(data.result)
              setisError(data.err)
            }
              func()
    },[])
      
  };
    }

        {/** PayPal SDK Here --> */}
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
        const [currency, setCurrency] = useState(options.currency);
    
        const onCurrencyChange = ({ target: { value } }) => {
            setCurrency(value);
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: value,
                },
            });
        }

        
        //FedEx or TARA delivery
        const deliveryRef = useRef('');
        const delivery = deliveryRef.current.value
      
        const onCreateOrder = (data, actions) => {
          return actions.order.create({
              purchase_units: [
                  {
                      amount: {
                          currency_code: "USD",
                          value: total.toFixed(2),
                          breakdown: {
                              item_total: { currency_code: "USD", value: subtotal.toFixed(2) },
                              shipping: { currency_code: "USD", value: shippingCost.toFixed(2) },
                              handling: { currency_code: "USD", value: "0.00" },
                              tax_total: { currency_code: "USD", value: "0.00" },
                              shipping_discount: { currency_code: "USD", value: "0.00" }
                          }
                      },
                      items: cartStorage.map(item => ({
                          name: item.title + " " + item.size,
                          unit_amount: { currency_code: "USD", value: item.price },
                          quantity: item.quantity,
                          description: delivery,
                          category: "PHYSICAL_GOODS"
                      }))
                  }
              ]
          });
      };


      const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name
            setisPlaced(true)
    
            const guessEmail = JSON.parse(sessionStorage.getItem("guessemail") || "[]")
            /*setorderDeatials(details.purchase_units[0].payee.merchant_id)*/
            const message = details.purchase_units[0].items[0].description
            const detale = details.purchase_units[0].items[0].name
            const parish = details.purchase_units[0].shipping.address.admin_area_2
            console.log(detale)


            fetch('https://reseller-shop-backend.onrender.com/send_email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: guessEmail,
                message: message,
                cost: total.toFixed(2),
                dete: detale,
                place: parish
              }),
            })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log('Email sent successfully:', data);
            })
            .catch(error => {
              console.error('There was an error sending the email:', error);
            });
           
        });
    }

    //Order deatail fetch
     const [orderDeatials, setorderDeatials] = useState('')
         
     useEffect( () => {

       const orderD = async () => {
        const endpoint = `https://reseller-shop-backend.onrender.com/profile`;
  
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'data': orderDeatials}),
            credentials: 'include' // Include cookies in the request
        };

        try {
            const response = await fetch(endpoint, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }

       orderD()
     },[orderDeatials])


   {/**Button styles */}

   const mystyle = {
    color: "gold",
    layout: "vertical",
  }

  {/*Verify user login */}

  useEffect(() => {
    // Get cookie value
    const myCookie = Cookies.get('shopCookie');
    //console.log('Cookie value:', myCookie);
    if (myCookie) {
        setisVerified(true)
    }

  }, []);   

   
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


    return ( 
        <>
  <Nav/>
 <div className="container-fluid table-cont">
 <div className="row">
 <div className="col-sm-8 border-3">
 <table className="table cart-table" style={{"marginTop":"180px"}}>
  <thead className="thead-dark">
    <tr className="text-white" style={{"backgroundColor":"orangered"}}>
      <th scope="col">Product</th>
     <th scope="col">Size</th>
     <th scope="col">Quantity</th>
     <th scope="col">Price</th>
     <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {cartStorage.map((item, index) => (
    <tr key={item.id}>
      <th scope="row">
        <img src={item.image} alt={item.title} className="w-100 img-fluid"/>
        <p className="fw-light">{item.title}</p>
        </th>
      <td>{item.size}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
      <td><i className="fa fa-trash-o text-danger fs-2" onClick={() => deleteHandler(index)} aria-hidden="true"></i></td>
    </tr>
     ))}
  </tbody>
</table>
</div>

<div className="col-sm-4">
 <div className="border" style={{"marginTop":"100px","background":"#fff","boxShadow": "0 0 20px 0px rgba(0, 0, 0, 0.1)"}}>
<h2 className="text-center text-danger"> Order Summary</h2>
<table className="table fw-bold">
  <tbody>
    <tr>
      <th scope="row">Subtotal</th>
      <td className="float-end">${subtotal.toFixed(2)}</td>
    </tr>
    <tr>
      <th scope="row">Shipping</th>
      <td className="float-end">{ shippingCost <= 0 ? 'FREE' : '$' + shippingCost.toFixed(2)}</td>
    </tr>
    <tr>
      <th scope="row">Coupon</th>
      <td className="float-end"><input type={"text"} className="form-control" placeholder="Coupon Code..."/></td>
    </tr>
    <tr>
      <th scope="row">Method</th>
      <td className="float-end">
      <select ref={deliveryRef}>
    <option>Knutsford Express</option>
    <option>TARA (unavailable)</option>
    </select><br />
      </td>
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td className="float-end">${total.toFixed(2)}</td>
    </tr>
  </tbody>
</table>
</div>

 {cartStorage.length > 0 && !isVerified ? <div className="border" style={{"marginTop":"10px","marginBottom":"30px","background":"#fff","boxShadow": "0 0 20px 0px rgba(0, 0, 0, 0.1)"}}>
      <div className="border">
            <form className="text-center">
            <div className="mb-4 mt-1 fw-bold fs-4"><span className="text-danger pb-1" style={{"borderBottom":"solid 5px green"}}>Login</span></div>
                <input type="email" placeholder="Email" name="email" className="form-control w-75 m-auto" onChange={(e) => setEmail(e.target.value)}/><br />
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" className="form-control w-75 m-auto" onChange={(e) => setPassword(e.target.value)}/>
                <div className="w-75 m-auto text-start"><input type="checkbox" id="showPassword" onChange={togglePasswordVisibility} /><label className="text-danger" htmlFor="showPassword">Show Password</label></div><br />
                <button className="btn btn-dark text-white rounded-pill w-75" onClick={ (e) => {fetchInfo(e)}}>Checkout &#8594;</button><br /><br />
                <p>{isError}</p>
                <div className="mb-2"><a href="#">Forget Password?</a><a href="#"> <a href="https://reseller-shop-backend.onrender.com/forgot_password" target="_blank" rel="noreferrer" className="text-info">click</a></a> or <a href="https://reseller-shop-backend.onrender.com/register" target="_blank" rel="noreferrer" ><u className="text-info">Register</u></a></div>
            </form>  
            </div>  
    </div> :<></> }

      
{isVerified && cartStorage.length > 0 ? (
                <div className="text-center p-2" style={{"height":"auto", "marginTop":"10px","marginBottom":"30px", "background":"#fff","boxShadow": "0 0 20px 0px rgba(0, 0, 0, 0.1)"}}>
                  <h1>Verified <span className="text-success fs-1 fw-bolder">&#10003;</span></h1>
                    <PayPalButtons 
                        style={mystyle}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    /> 
                    <select value={currency} onChange={onCurrencyChange}>
                            <option value="USD">💵 USD</option>
                            <option value="EUR">💶 Euro</option>
                    </select>
                    <div>
                    <img className="img-fluid w-md-100 mt-3" src="/images/cc_paypal.png" alt="cc_paypal" />
                    </div>
                </div>
            ) : <></>}
            {isPlaced && <Truck/>}
</div>
</div>

</div>
<div className="nav-cont"><Foot/></div>
        </>
     );
}
 
export default Shopping_Cart;
import Nav from "../nav_component/Nav";
import { useState, useEffect, useRef } from "react";
import Shopping_Cart from "./Shopping_Cart";


const Cart = () => {
  

    return ( 
        <>
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0" id="scrollspy-example">
  
<Shopping_Cart/>

</div>
        </>
     );
}
 
export default Cart;
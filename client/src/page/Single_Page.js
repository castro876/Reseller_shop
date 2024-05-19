import Foot from "../components/foot_component/Foot";
import Nav from "../components/nav_component/Nav";
import Related from "../components/single_components/Related";
import Single from "../components/single_components/Single";

const Single_Page = () => {
    return ( 
        <>
         <Nav/>
         <Single/>
         <Related/>
         <Foot/>
        </>
     );
}
 
export default Single_Page;
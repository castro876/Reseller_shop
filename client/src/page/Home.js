import Banner from "../components/home_component/Banner";
import Credit from "../components/home_component/Credit";
import Featured from "../components/home_component/Featured";
import Foooter from "../components/home_component/Footer";
import Seller from "../components/home_component/Seller";
import Social from "../components/home_component/Social";
import Statistic from "../components/home_component/Statistic";
import Store from "../components/home_component/Store";

const Home = () => {
    return ( 
        <>
        <Store/>
        <Credit/>
         <Featured/>
         <Banner/>
         <Seller/>
         <Statistic/>
         <Social/>
         <Foooter/>
        </>
     );
}
 
export default Home;
const Hero = () => {
    return ( 
        <div className="container-fluid hero-cont">
         <div className="row">
            <div className="col" style={{"paddingTop":"100px", "paddingLeft":"30px"}}>
                <h1 className="text-white mt-5 mb-5 text-start fw-bolder" style={{"backgroundColor":"black","width":"46%"}}>Sale 20% Off</h1>
                <h1 className="fw-bolder fs-1 text-start" style={{"color":"red"}}>On <br/> Everything</h1>
                <p className="text-white text-start">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                <button className="btn text-white px-4 py-2" style={{"backgroundColor":"black"}}>Shop Now &rarr;</button>
            </div>
            <div className="col">
            <img src="/images/home_pic2.png" alt="store" className="img-fluid w-100 pt-5 px-2"/>
         </div>
         </div>
        </div>
     );
}
 
export default Hero;
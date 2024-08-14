const Hero = () => {
    return ( 
        <div className="container-fluid hero-cont">
         <div className="row">
            <div className="col" style={{"paddingTop":"60px","paddingBottom":"50px", "paddingLeft":"30px"}}>
                <h5 className="mt-5 mb-5 text-start fw-bolder" style={{"color":"green"}}>Sale 20% Off everything</h5>
                <h1 className="fw-bolder fs-1 text-start" style={{"color":"orangeRed"}}>DRESS <br/> TO IMPRESS</h1>
                <p className="text-white text-start">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                <button className="btn text-white px-4 py-2" style={{"backgroundColor":"red"}}>Shop Now &rarr;</button>
            </div>
            <div className="col">
            <img src="" alt="store" className=""/>
         </div>
         </div>
        </div>
     );
}
 
export default Hero;
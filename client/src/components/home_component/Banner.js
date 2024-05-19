const Banner = () => {
    return ( 
      <>
        <div className="container-fluid" style={{"marginTop":"100px"}}>
         <div className="row"  style={{"background":"rgb(131,58,180)","background":"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(253,100,48,1) 0%, rgba(253,42,32,1) 100%, rgba(252,176,69,1) 100%)"}}>
         <div className="col-sm-6"  style={{"color":"white"}}>
            <div><img src="/images/richard_mille.png" style={{"width":"100%"}} alt="richard_mille" /></div>
         </div>
        <div className="col-sm-6 mille-cont">
         <div className="text-center p-3">
           <p className="fs-4">Experience Time At Its Most Exquisite</p>
           <h1 style={{"font-size":"3rem","fontWeight":"900"}}>Richard Mille Watch</h1>
           <p className="text-white">Elevate your wrist with precision, innovation, and unparalleled craftsmanship. Discover the world of Richard Mille watches today. Time waits for no one - seize it in style.</p>
           <button className="btn btn-dark text-white rounded-pill px-4 mt-1">Explore Now &rarr;</button>
         </div>
        </div>
      </div>
     </div>
        </>
     );
}
 
export default Banner;
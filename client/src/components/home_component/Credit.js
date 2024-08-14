const Credit = () => {
    return ( 
    <>
<h2 className="title" style={{"marginTop":"170px", "marginBottom":"20px","textAlign":"center"}}><span className="text-danger">Why Shop </span> With Us</h2>
  <div className="container-fluid mb-5">
  <div className="row gx-1 gy-3 text-center fs-5">
    <div className="col-sm">
      <div className="d-inline-block p-4 text-white bg-danger" style={{"width":"90%"}}>
      <i class="fa fa-truck fs-2" aria-hidden="true"></i>
        <h3>Fast Delivery</h3>
        <p>variations of passages of Lorem Ipsum available</p>
      </div>
    </div>

    <div className="col-sm">
      <div className="d-inline-block p-4 text-white bg-success" style={{"width":"90%"}}>
      <i class="fa fa-lock fs-2" aria-hidden="true"></i>
        <h3>Secure Payment</h3>
        <p>variations of passages of Lorem Ipsum available</p>
      </div>
    </div>

    <div className="col-sm">
      <div className="d-inline-block p-4 text-white bg-danger" style={{"width":"90%"}}>
      <i class="fa fa-certificate fs-2" aria-hidden="true"></i>
        <h3>Best Quality</h3>
        <p>variations of passages of Lorem Ipsum available</p>
      </div>
    </div>

    </div>
    </div>
        </>
     );
}
 
export default Credit;
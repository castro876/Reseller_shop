const Statistic = () => {
    return ( 
        <div style={{"marginTop":"100px"}}>
         <div className="container-fluid py-0 px-0">
  <div className="row gx-0 gy-0 text-center">
    <div className="col-sm">
      <div className="d-inline-block text-white p-5" style={{"width":"100%","backgroundColor":"green"}}>
      <i class="fa fa-users fs-2" aria-hidden="true"></i>
      <h2>1000</h2>
      <p>Happy Customers</p>
      </div>
    </div>

    <div className="col-sm">
      <div className="d-inline-block text-white p-5" style={{"width":"100%","backgroundColor":"green"}}>
      <i class="fa fa-handshake-o fs-2" aria-hidden="true"></i>
      <h2>1000</h2>
      <p>Partners</p>
      </div>
    </div>

    <div className="col-sm">
      <div className="d-inline-block text-white p-5" style={{"width":"100%","backgroundColor":"green"}}>
      <i class="fa fa-trophy fs-2" aria-hidden="true"></i>
      <h2>50</h2>
      <p>Awards</p>
      </div>
    </div>

    <div className="col-sm">
      <div className="d-inline-block text-white p-5" style={{"width":"100%","backgroundColor":"green"}}>
      <i class="fa fa-home fs-2" aria-hidden="true"></i>
      <h2>100</h2>
      <p>Branches</p>
      </div>
    </div>

    </div>
    </div>
        </div>
     );
}
 
export default Statistic;
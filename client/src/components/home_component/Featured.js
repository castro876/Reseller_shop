import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="d-inline-block" style={{ width: "48%", marginRight: "12px" }}>
      <img
        className="border"
        src={`/images/${product.image}`}
        alt={product.title}
        style={{ width: "100%" }}
      />
      <p className="text-white py-2" style={{ backgroundColor: "black" }}>
        {product.gender}
      </p>
      <div className="text-start">
        <p>{product.title}</p>
        <s className="text-danger">${product.discount}</s>
        <span>${product.price}</span>
        <br />
        <span>{product.discount_details}</span>
        <br />
        <span>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <span>&nbsp;(5.5)</span>
        </span>
        <br />
        <br />
        <Link to={`/singleproduct/${product._id}`}>
          <button className="btn btn-dark">Buy Now &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

const Featured = () => {
  const [prodData, setProdData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://reseller-shop-backend.onrender.com/all_product"
        );
        const data = await response.json();
        setProdData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid btn-cont">
        <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>
          <span className="text-danger">Featured</span> Products{" "}
          <span style={{ fontSize: "35px" }}>&rarr;</span>
        </h2>
        <div className="row border-0 mb-4 gx-1 gy-3 text-center">
          {prodData.slice(0, 2).map((product, index) => (
            <div className="col-sm" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid btn-cont">
        <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>
          <span className="text-danger">Latest</span> Products{" "}
          <span style={{ fontSize: "35px" }}>&rarr;</span>
        </h2>
        <div className="row border-0 mb-4 gx-1 gy-3 text-center">
          {prodData.slice(2, 4).map((product, index) => (
            <div className="col-sm" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="view-box">
        <p>&larr; Load More &rarr;</p>
      </div>
    </>
  );
};

export default Featured;

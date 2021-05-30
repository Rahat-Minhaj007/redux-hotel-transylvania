import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id,breakImg,breakName,breakPrice,type} = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image" style={{alignSelf:'center'}}>
              <img src={breakImg} alt={breakName} style={{width:'150px',height:'200px'}}/>
            </div>
            <div className="content">
              <div className="header">{breakName}</div>
              <div className="meta price">$ {breakPrice}</div>
              <div className="meta">{type}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;

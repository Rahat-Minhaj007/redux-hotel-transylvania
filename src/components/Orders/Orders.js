import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllOrders } from "../../redux/actions/productActions";

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  console.log(orders);
  const sum = orders.reduce((accumulator, element) => {
    return accumulator + element.price * element.Quantity;
  }, 0);
  //place order and remove all orders
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  const handlePlaceOrder = () => {
    alert("Press OK to place order");
    dispatch(removeAllOrders());
    setOrderPlaced(true);
  };
  return (
    <div style={{ marginTop: "100px" }} className="container">
      {orderPlaced ? (
        <div className="text-center my-5 text-success">
          <h2>
            <strong>Your Order Will be at your Door in 30 Minutes</strong>
          </h2>
        </div>
      ) : (
        <div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((foodItem, index) => {
                let { id, name, Quantity, price } = foodItem;
                let totalPrice = Quantity * price;
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{Quantity}</td>
                    <td>$ {price}</td>
                    <td>$ {totalPrice}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope="row"></th>
                <td>
                  <strong>Total Price</strong>
                </td>
                <td></td>
                <td></td>
                <td>
                  <strong>$ {sum}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center pt-3">
            <button
              className="btn btn-brand fw-bold text-light"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

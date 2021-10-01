import React from "react";
function SingleHotel({ hotel }) {
  const { name, price, city, available_on } = hotel;
  return (
    <div className="grid-item">
      <p>
        <strong>Name : </strong>
        {name}
        <br />
        <strong>Price : </strong>
        {`${price} AED`}
        <br />
        <strong>City : </strong>
        {city}
      </p>
    </div>
  );
}
function hotelPropsAreEqual(prevHotel, nextHotel) {
  return prevHotel.name === nextHotel.name;
}
export default React.memo(SingleHotel, hotelPropsAreEqual);

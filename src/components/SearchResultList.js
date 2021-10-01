import { useState } from "react";
import SingleHotel from "./SingleHotel";
function SearchResultList({ hotels }) {
  const [list, setList] = useState(hotels);
  const [term, setTerm] = useState("");
  const [priceRange, setPriceRange] = useState(100);
  return (
    <div className="row row-container">
      <div className="col-md-3">
        <div>
          <input
            value={term}
            type="text"
            className="form-control"
            placeholder="Search Hotel Name..."
            autoFocus
            onChange={(e) => {
              setTerm(e.target.value);
              filterByHotelName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <p>Price Filter</p>
          <input
            type="range"
            className="range-slider"
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value);
              sortHotelsByPriceRange(e.target.value);
            }}
            step="10"
            min="100"
            max="400"
          />
          <p>{priceRange} AED - 400 AED</p>
        </div>
      </div>
      <div className="col-md-9">{renderListOfHotels()}</div>
    </div>
  );
  function renderListOfHotels() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row row-padding">
            <div className="col-md-4">
              <button className="btn btn-default">
                <strong>Total Nights : </strong>
                {list.length}
              </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary" onClick={sortByName}>
                Sort by name
              </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-success" onClick={sortByPrice}>
                Sort by price
              </button>
            </div>
          </div>
          <div className="grid-container">
            {list.length ? (
              <>
                {list.map((hotel, index) => {
                  const { name } = hotel;
                  return <SingleHotel key={`${index}-${name}`} hotel={hotel} />;
                })}
              </>
            ) : (
              <h6>No matches results 😓 😓</h6>
            )}
          </div>
        </div>
      </div>
    );
  }
  function sortByPrice() {
    resetPriceRange(100);
    const sortedList = [...list].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setList(sortedList);
  }
  function sortByName() {
    resetPriceRange();
    const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name));
    setList(sortedList);
  }
  function filterByHotelName(term) {
    resetPriceRange();
    if (term) {
      const filteredList = [...hotels].filter((hotel) => {
        const { name } = hotel;
        return name.toLowerCase().includes(term.toLowerCase().trim());
      });
      if (filteredList.length) {
        setList(filteredList);
      } else {
        setList([]);
      }
    } else {
      setList([...hotels]);
    }
  }
  function sortHotelsByPriceRange(priceRangeX) {
    const filteredList = [...hotels].filter((hotel) => {
      const { price } = hotel;
      const Price = parseFloat(price);
      return Price >= priceRangeX && Price <= 400;
    });
    if (filteredList.length) {
      setList(filteredList);
    } else {
      setList([]);
    }
  }
  function resetPriceRange() {
    setPriceRange(100);
  }
}
export default SearchResultList;

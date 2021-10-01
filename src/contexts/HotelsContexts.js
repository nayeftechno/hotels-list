import { createContext, useReducer } from "react";
import { hotelsService } from "../services/hotelsService";
import { hotelTypes } from "./types/hotelTypes";
import { hotelReducer } from "./reducers/hotelReducer";
import { hotelInitialState } from "./state/hotelInitialState";
export const HotelsContext = createContext();
function HotelsContextProvider({ children }) {
  ////////////////////////////////////////////
  const [state, dispatch] = useReducer(hotelReducer, hotelInitialState);
  const { loading, isSearchTriggered, hotels, startDate, endDate, error } =
    state;
  ////////////////////////////////////////////
  function searchHotelsBasedDates() {
    if (checkDatesValidation()) {
      handleSearchLoading();
      hotelsService
        .getHotels()
        .then(({ hotels }) => {
          handleSearchSuccess(hotels);
        })
        .catch(({ error }) => {
          handleSearchFailed(error);
        });
    }
  }
  ////////////////////////////////////////////
  function handleSearchLoading() {
    dispatch({ type: hotelTypes.LOADING, payload: true });
    dispatch({ type: hotelTypes.SET_SEARCH_TRIGGERED, payload: true });
  }
  ////////////////////////////////////////////
  function handleSearchSuccess(hotels) {
    dispatch({
      type: hotelTypes.SET_HOTELS,
      payload: searchHotelsBasedDatesFilter(hotels),
    });
    dispatch({ type: hotelTypes.LOADING, payload: false });
    dispatch({ type: hotelTypes.SET_ERROR, payload: null });
  }
  ////////////////////////////////////////////
  function handleSearchFailed(error) {
    dispatch({ type: hotelTypes.SET_SEARCH_TRIGGERED, payload: false });
    dispatch({ type: hotelTypes.LOADING, payload: false });
    dispatch({ type: hotelTypes.SET_HOTELS, payload: [] });
    dispatch({
      type: hotelTypes.SET_ERROR,
      payload: "Something get wrong please try again 😓 😓",
    });
    console.error(error);
  }
  ////////////////////////////////////////////
  function checkDatesValidation() {
    if (endDate < startDate) {
      dispatch({ type: hotelTypes.SET_SEARCH_TRIGGERED, payload: false });
      dispatch({ type: hotelTypes.LOADING, payload: false });
      dispatch({ type: hotelTypes.SET_HOTELS, payload: [] });
      dispatch({
        type: hotelTypes.SET_ERROR,
        payload: "End Date Should Be Greater Than Or Equal Start Date 😓 😓",
      });
      return false;
    }
    return true;
  }
  ////////////////////////////////////////////
  function searchHotelsBasedDatesFilter(hotels) {
    const { startDate, endDate } = state;
    const filteredHotels = [...hotels].filter((hotel) => {
      const { available_on } = hotel;
      const availableOn = new Date(available_on).setHours(0, 0, 0, 0);
      return availableOn >= startDate && availableOn <= endDate;
    });
    return [...filteredHotels];
  }
  ////////////////////////////////////////////
  function editStartDate(startDate) {
    dispatch({ type: hotelTypes.SET_START_DATE, payload: startDate });
  }
  ////////////////////////////////////////////
  function editEndDate(endDate) {
    dispatch({ type: hotelTypes.SET_END_DATE, payload: endDate });
  }
  ////////////////////////////////////////////
  return (
    <HotelsContext.Provider
      value={{
        loading,
        isSearchTriggered,
        hotels,
        startDate,
        endDate,
        error,
        editStartDate,
        editEndDate,
        searchHotelsBasedDates,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
}
export default HotelsContextProvider;

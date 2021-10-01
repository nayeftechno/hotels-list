import { hotelTypes } from "../types/hotelTypes";
import { hotelInitialState } from "../state/hotelInitialState";
const hotelReducer = (state, { type, payload }) => {
  switch (type) {
    case hotelTypes.LOADING:
      return { ...state, loading: payload };
    case hotelTypes.SET_SEARCH_TRIGGERED:
      return { ...state, isSearchTriggered: payload };
    case hotelTypes.SET_HOTELS:
      return { ...state, hotels: payload };
    case hotelTypes.SET_START_DATE:
      return { ...state, startDate: payload };
    case hotelTypes.SET_END_DATE:
      return { ...state, endDate: payload };
    case hotelTypes.SET_ERROR:
      return { ...state, error: payload };
    case hotelTypes.RESET:
      return { ...hotelInitialState };
    default:
      return { ...state };
  }
};
export { hotelReducer };

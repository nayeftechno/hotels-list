import { useContext } from "react";
import DatePicker from "react-datepicker";
import { HotelsContext } from "../contexts/HotelsContexts";
function StartDatePicker() {
  const { startDate, editStartDate } = useContext(HotelsContext);
  return (
    <DatePicker
      className="form-control text-center"
      dateFormat="dd MMM yyyy"
      selected={startDate}
      onChange={(date) => {
        editStartDate(date);
      }}
    />
  );
}
export default StartDatePicker;

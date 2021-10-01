import { useContext } from "react";
import DatePicker from "react-datepicker";
import { HotelsContext } from "../contexts/HotelsContexts";
function EndDatePicker() {
  const { endDate, editEndDate } = useContext(HotelsContext);
  return (
    <DatePicker
      className="form-control text-center"
      dateFormat="dd MMM yyyy"
      selected={endDate}
      onChange={(date) => {
        editEndDate(date);
      }}
    />
  );
}
export default EndDatePicker;

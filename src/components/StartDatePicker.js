import { memo } from "react";
import DatePicker from "react-datepicker";
function StartDatePicker({ startDate, editStartDate }) {
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
function startDatePropsAreEqual(prevProps, nextProps) {
  return prevProps.startDate === nextProps.startDate;
}
export default memo(StartDatePicker, startDatePropsAreEqual);

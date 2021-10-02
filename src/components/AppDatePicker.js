import { memo } from "react";
import DatePicker from "react-datepicker";
function AppDatePicker({ currentDate, onDateChange }) {
  return (
    <DatePicker
      className="form-control text-center"
      dateFormat="dd MMM yyyy"
      selected={currentDate}
      onChange={(date) => {
        onDateChange(date);
      }}
    />
  );
}
function datePropsAreEqual(prevProps, nextProps) {
  return prevProps.currentDate === nextProps.currentDate;
}
export default memo(AppDatePicker, datePropsAreEqual);

import { memo } from "react";
import DatePicker from "react-datepicker";
function EndDatePicker({ endDate, editEndDate }) {
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
function endDatePropsAreEqual(prevProps, nextProps) {
  return prevProps.endDate === nextProps.endDate;
}
export default memo(EndDatePicker, endDatePropsAreEqual);

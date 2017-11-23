import React from "react";
import moment from "moment";
import { DayPickerRangeController } from "react-dates";

export default props => (
  <div>
    <DayPickerRangeController
      {...props}
      isDayBlocked={day => day.isBefore(moment(), "day")}
      numberOfMonths={2}
      hideKeyboardShortcutsPanel
    />
  </div>
);

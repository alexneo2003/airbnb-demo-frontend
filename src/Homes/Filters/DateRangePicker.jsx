import React from "react";
import moment from "moment";
import styled from "styled-components";
import { DayPickerRangeController } from "react-dates";

const Box = styled.div`
  height: calc(100% - 64px);
  width: 100%;
`;

export default props => (
  <Box>
    <DayPickerRangeController
      {...props}
      isDayBlocked={day => day.isBefore(moment(), "day")}
      numberOfMonths={2}
      hideKeyboardShortcutsPanel
    />
  </Box>
);

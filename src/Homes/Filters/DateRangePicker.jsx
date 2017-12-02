import React from "react";
import moment from "moment";
import styled from "styled-components";
import { MobileOnly, DesktopOnly, TabletOnly } from "./../../Media";
import { DayPickerRangeController } from "react-dates";

const Box = styled.div`
  height: calc(100% - 64px);
  width: 100%;
`;

export default props => (
  <Box>
    <MobileOnly>
      <DayPickerRangeController
        {...props}
        orientation="verticalScrollable"
        isDayBlocked={day => day.isBefore(moment(), "day")}
        numberOfMonths={2}
        hideKeyboardShortcutsPanel
      />
    </MobileOnly>
    <TabletOnly>
      <DayPickerRangeController
        {...props}
        isDayBlocked={day => day.isBefore(moment(), "day")}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
      />
    </TabletOnly>
    <DesktopOnly>
      <DayPickerRangeController
        {...props}
        isDayBlocked={day => day.isBefore(moment(), "day")}
        numberOfMonths={2}
        hideKeyboardShortcutsPanel
      />
    </DesktopOnly>
  </Box>
);

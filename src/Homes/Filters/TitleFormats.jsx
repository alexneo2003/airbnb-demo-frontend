export const formatCheckinTitle = state =>
  state.selectedStartDate
    ? state.selectedStartDate.format("MMM Do")
    : "Check in";
export const formatCheckoutTitle = state =>
  state.selectedEndDate ? state.selectedEndDate.format("MMM Do") : "Check out";
export const formatDateTitle = state => {
  if (state.clicked) {
    return `${formatCheckinTitle(state)} — ${formatCheckoutTitle(state)} `;
  }
  return (
    (state.selectedStartDate ? state.selectedStartDate.format("MMM Do") : "") +
      (state.selectedEndDate
        ? ` —  ${state.selectedEndDate.format("MMM Do")}`
        : "") || "Dates"
  );
};

export const formatPriceTitle = () => "Price";
export const formatInstantTitle = () => "Instant booking";
export const formatGuestsTitle = () => "Guests";
export const formatRoomTitle = () => "Room type";
export const formatMoreTitle = () => "More filters";

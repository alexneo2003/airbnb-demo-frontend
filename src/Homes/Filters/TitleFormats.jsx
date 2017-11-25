export const formatCheckinTitle = state =>
  state.startDate ? state.startDate.format("MMM Do") : "Check in";
export const formatCheckoutTitle = state =>
  state.endDate ? state.endDate.format("MMM Do") : "Check out";
export const formatDateTitle = state => {
  if (state.checked) {
    return `${formatCheckinTitle(state)} — ${formatCheckoutTitle(state)} `;
  }
  return (
    (state.startDate ? state.startDate.format("MMM Do") : "") +
      (state.endDate ? ` —  ${state.endDate.format("MMM Do")}` : "") || "Dates"
  );
};

export const formatPriceTitle = () => "Price";
export const formatInstantTitle = () => "Instant booking";
export const formatGuestsTitle = () => "Guests";
export const formatRoomTitle = () => "Room type";
export const formatMoreTitle = () => "More filters";

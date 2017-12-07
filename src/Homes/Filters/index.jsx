import React from "react";
import styled from "styled-components";
import Dates from "./Dates";
import Guests from "./Guests";
import RoomType from "./RoomType";
import Price from "./Price";
import InstantBook from "./InstantBook";
import MoreFilters from "./MoreFilters";
import { DesktopOnly } from "../../Media";

const FiltersBorder = styled.div`
  position: fixed;
  top: 81px;
  left: 0;
  z-index: 10;
  display: flex;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  height: 58px;
  margin-bottom: 24px;
  align-items: center;
`;

const FiltersRow = styled.div`
  display: flex;
  padding: 0 8px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 992px) {
    max-width: 992px;
  }
`;

export default class extends React.Component {
  state = {
    openedFilter: null,
    isOpened: false,
    dates: {
      startDate: null,
      endDate: null
    },
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
      total: 0
    },
    roomType: {
      entire: false,
      private: false,
      shared: false,
      total: 0
    },
    price: { startPrice: 0, endPrice: 0 },
    more: {
      instant: false,
      superhost: false
    },
    roomsAndBeds: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      total: 0
    },
    amenities: {
      heating: false,
      tv: false,
      kitchen: false,
      wireless: false
    },
    facilities: {
      elevator: false,
      pool: false,
      parking: false,
      wheelchair: false
    }
  };

  openFilter = id => {
    this.setState({ openedFilter: id });
  };

  handleOpen = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  updateData = (key, data) => {
    console.log(key, data);
    this.setState({ [key]: data }, console.log(this.state[key]));
  };

  cancelDates = () => {
    this.setState({ startDate: null, endDate: null });
  };

  datesOnApply = (startDate, endDate) => {
    console.log("datesOnApply");
    console.log(startDate, endDate);
    this.setState({ dates: { startDate, endDate } });
  };

  updateGuests = guests => {
    console.log(guests);
    this.setState({ guests: guests });
  };

  updateRoomsType = rooms => {
    this.setState({ rooms: rooms });
  };

  updatePrice = price => {
    this.setState({ price: price });
  };

  render() {
    return (
      <FiltersBorder>
        <FiltersRow>
          <Dates
            id="dates"
            title="Dates"
            confirmedTitle="Check in — Check out"
            dates={this.state.dates}
            onApply={this.updateData}
            handleData={this.updateData}
            handleOpen={this.openFilter}
          />
          <Guests
            id="guests"
            title="Guests"
            confirmedTitle="Guests"
            guests={this.state.guests}
            handleData={this.updateData}
            handleOpen={this.openFilter}
          />
          <DesktopOnly>
            <RoomType
              id="roomType"
              title="Room type"
              confirmedTitle="Room type"
              roomType={this.state.roomType}
              handleData={this.updateData}
              handleOpen={this.openFilter}
            />
            <Price
              id="price"
              title="Price"
              confirmedTitle="Price"
              handleOpen={this.openFilter}
            />
            <InstantBook
              id="instant"
              title="Instant Book"
              confirmedTitle="Instant Book"
              handleOpen={this.openFilter}
            />
          </DesktopOnly>
          <MoreFilters
            id="moreFilters"
            title="More filters"
            confirmedTitle="More filters"
            moreFilters={true}
            roomType={this.state.roomType}
            roomsAndBeds={this.state.roomsAndBeds}
            handleData={this.updateData}
            handleOpen={this.openFilter}
          />
        </FiltersRow>
      </FiltersBorder>
    );
  }
}

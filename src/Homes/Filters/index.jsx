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
    isOpened: false,
    startDate: null,
    endDate: null,
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
      total: 0
    },
    rooms: {
      entire: false,
      private: false,
      shared: false,
      total: 0
    }
  };

  handleOpen = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  updateGuests = guests => {
    this.setState({ guests: guests });
  };

  updateRoomsType = rooms => {
    console.log(rooms);
    this.setState({ rooms: rooms });
  };

  cancelDates = () => {
    this.setState({ startDate: null, endDate: null });
  };

  render() {
    return (
      <FiltersBorder>
        <FiltersRow>
          <Dates
            title="Dates"
            checkedTitle="Check in — Check out"
            onApply={(startDate, endDate) =>
              this.setState({ startDate, endDate })
            }
          />
          <Guests
            title="Guests"
            checkedTitle="Guests"
            guests={this.state.guests}
            handleData={this.updateGuests}
          />
          <DesktopOnly>
            <RoomType
              title="Room type"
              checkedTitle="Room type"
              rooms={this.state.rooms}
              handleData={this.updateRoomsType}
            />
            <Price title="Price" checkedTitle="Price" />
            <InstantBook title="Instant Book" checkedTitle="Instant Book" />
          </DesktopOnly>
          <MoreFilters
            title="More filters"
            checkedTitle="More filters"
            moreFilters={true}
            rooms={this.state.rooms}
            handleData={this.updateRoomsType}
          />
        </FiltersRow>
      </FiltersBorder>
    );
  }
}

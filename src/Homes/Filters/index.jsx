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
    droppedDownWindow: null
  };

  setDropDown = (droppedDownWindow, callback) => {
    this.setState(
      {
        droppedDownWindow:
          this.state.droppedDownWindow === droppedDownWindow
            ? null
            : droppedDownWindow
      },
      callback
    );
  };

  render() {
    return (
      <FiltersBorder>
        <FiltersRow>
          <Dates
            title="Dates"
            checkedTitle="Check in — Check out"
            closeDropDown={() => this.setDropDown(null)}
            onApply={this.onApply}
          />
          <Guests
            title="Guests"
            checkedTitle="Guests"
            closeDropDown={() => this.setDropDown(null)}
            onApply={this.onApply}
          />
          <DesktopOnly>
            <RoomType
              title="Room type"
              checkedTitle="Room type"
              closeDropDown={() => this.setDropDown(null)}
              onApply={this.onApply}
            />
            <Price
              title="Price"
              checkedTitle="Price"
              closeDropDown={() => this.setDropDown(null)}
              onApply={this.onApply}
            />
            <InstantBook
              title="Instant Book"
              checkedTitle="Instant Book"
              closeDropDown={() => this.setDropDown(null)}
              onApply={this.onApply}
            />
          </DesktopOnly>
          <MoreFilters
            title="More filters"
            checkedTitle="More filters"
            closeDropDown={() => this.setDropDown(null)}
            onApply={this.onApply}
            moreFilters={true}
          />
        </FiltersRow>
      </FiltersBorder>
    );
  }
}

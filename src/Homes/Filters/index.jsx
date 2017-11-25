import React from "react";
import styled from "styled-components";
import DatesFilter from "./DatesFilter";

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
          <DatesFilter
            title="Dates"
            checkedTitle="Check in — Check out"
            closeDropDown={() => this.setDropDown(null)}
            onApply={this.onApply}
          />
        </FiltersRow>
      </FiltersBorder>
    );
  }
}

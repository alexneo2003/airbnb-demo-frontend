import React from "react";
import styled from "styled-components";
import DatesFilter from "./DatesFilter";

const DatesFilterFixed = styled.div`
  position: fixed;
  top: 132px;
  left: 8px;
  @media (min-width: 1200px) {
    left: 210px;
  }
`;

const FiltersBorder = styled.div`
  position: fixed;
  top: 79px;
  left: 0;
  z-index: 12;
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

  onApply = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
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

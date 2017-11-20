import React from "react";
import styled from "styled-components";
import { Row } from "../styled";

const FilterButton = styled.button`
  cursor: pointer;
  background-color: white;
  font-size: 14px;
  padding: 8px 16px;
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

const FiltersRow = styled(Row)`
  height: 56px;
  margin-bottom: 24px;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

export default function Filters() {
  return (
    <FiltersRow>
      <FilterButton>Dates</FilterButton>
      <FilterButton>Guests</FilterButton>
      <FilterButton>Room type</FilterButton>
      <FilterButton>Price</FilterButton>
      <FilterButton>Instant book</FilterButton>
      <FilterButton>More filters</FilterButton>
    </FiltersRow>
  );
}

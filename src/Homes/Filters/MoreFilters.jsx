import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import Media, { MobileOnly, TabletOnly } from "../../Media";
import { RoomsAndBeds } from "./Sections/RoomsAndBeds";
import InstantBook from "./Sections/InstantBook";
import { RoomType } from "./Sections/RoomType";
import { Price } from "./Sections/Price";
import { AmenitiesFacilities } from "./Sections/AmenitiesFacilities";

const Container = styled.div`
  padding: 16px 24px;
  overflow-y: auto;
  height: calc(100vh - 254px);
  ${Media.mobile`
    height: calc(100vh - 48px);  
    width: 310px;
    padding: 8px;    
  `};
  ${Media.md`
    width: 710px;    
  `};
  ${Media.lg`
    width: 630px;    
  `};
`;

export default class extends React.Component {
  state = {
    isOpened: false
  };

  onToggle = ({ isOpened }) => {
    this.setState({ isOpened });
  };

  onCancel = () => {
    this.setState({
      isOpened: false
    });
  };

  onApply = () => {
    this.setState({
      isOpened: false
    });
  };

  render() {
    return (
      <DropDown
        id={this.props.id}
        className={this.props.className}
        title={this.props.title}
        confirmedTitle={this.props.confirmedTitle}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
        moreFilters={this.props.moreFilters}
        handleOpen={this.props.handleOpen}
      >
        <Container>
          <MobileOnly>
            <RoomType
              roomType={this.props.roomType}
              handleData={this.props.handleData}
            />
            <Price />
          </MobileOnly>
          <TabletOnly>
            <RoomType
              roomType={this.props.roomType}
              handleData={this.props.handleData}
            />
            <Price />
          </TabletOnly>
          <RoomsAndBeds
            id="roomsAndBeds"
            roomsAndBeds={this.props.roomsAndBeds}
            handleData={this.props.handleData}
          />
          <InstantBook />
          <AmenitiesFacilities />
        </Container>
      </DropDown>
    );
  }
}

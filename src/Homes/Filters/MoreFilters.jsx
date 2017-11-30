import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import Media, { MobileOnly, TabletOnly } from "../../Media";
import { RoomsAndBeds } from "./Sections/RoomsAndBeds";
import { MoreOptions } from "./Sections/MoreOptions";
import { RoomType } from "./Sections/RoomType";
import { Price } from "./Sections/Price";
import { AmenitiesFacilities } from "./Sections/AmenitiesFacilities";

const Container = styled.div`
  padding: 16px 24px;
  overflow-y: auto;
  height: calc(100vh - 264px);
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
    this.props.closeDropDown();
    this.setState({
      isOpened: false
    });
  };

  onApply = () => {
    this.props.closeDropDown();
    this.setState({
      isOpened: false
    });
  };

  render() {
    return (
      <DropDown
        className={this.props.className}
        title={this.props.title}
        checkedTitle={this.props.checkedTitle}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
        moreFilters={this.props.moreFilters}
      >
        <Container>
          <MobileOnly>
            <RoomType /> <Price />
          </MobileOnly>
          <TabletOnly>
            <RoomType /> <Price />
          </TabletOnly>
          <RoomsAndBeds />
          <MoreOptions />
          <AmenitiesFacilities />
        </Container>
      </DropDown>
    );
  }
}

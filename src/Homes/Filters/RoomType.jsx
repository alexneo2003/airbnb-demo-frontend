import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import { RoomType } from "./Sections/RoomType";

const Container = styled.div`
  padding: 0px 24px;
  width: 326px;
`;

export default class extends React.Component {
  state = {
    isOpened: false,
    rooms: {
      entire: false,
      private: false,
      shared: false,
      total: 0
    }
  };

  onToggle = isOpened => {
    this.setState({ isOpened });
  };

  onCancel = () => {
    this.setState(
      {
        isOpened: false,
        rooms: {
          entire: false,
          private: false,
          shared: false,
          total: 0
        }
      },
      () => this.updateTotal()
    );
  };

  onApply = () => {
    this.setState(
      {
        isOpened: false
      },
      () => this.updateTotal()
    );
  };

  updateRooms = rooms => {
    this.setState({ rooms: rooms }, this.updateTotal());
  };

  updateTotal = () => {
    console.log("updateTotal");
    const total =
      this.state.rooms.entire +
      this.state.rooms.private +
      this.state.rooms.shared;
    this.setState(
      {
        rooms: {
          ...this.state.rooms,
          total: [total]
        }
      },
      this.props.handleData(this.state.rooms)
    );
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
        total={this.props.rooms.total}
      >
        <Container>
          <RoomType
            onChange={this.updateRooms}
            rooms={this.props.rooms}
            total={this.state.rooms.total}
          />
        </Container>
      </DropDown>
    );
  }
}

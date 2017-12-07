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
    roomType: {
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
        roomType: {
          entire: false,
          private: false,
          shared: false,
          total: 0
        }
      },
      () => this.props.handleData(this.props.id, this.state.roomType)
    );
  };

  onApply = () => {
    this.setState(
      {
        isOpened: false
      },
      () => this.props.handleData(this.props.id, this.state.roomType)
    );
  };

  updateRoomType = (e, id) => {
    this.setState(
      { roomType: { ...this.state.roomType, [id]: e.target.checked } },
      () => this.updateTotal()
    );
  };

  updateTotal = () => {
    this.setState(
      {
        roomType: {
          ...this.state.roomType,
          total:
            this.state.roomType.entire +
            this.state.roomType.private +
            this.state.roomType.shared
        }
      },
      () => this.props.handleData(this.props.id, this.state.roomType)
    );
  };

  render() {
    return (
      <DropDown
        className={this.props.className}
        title={this.props.title}
        confirmedTitle={this.props.confirmedTitle}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
        total={this.props.roomType.total}
        handleOpen={this.props.handleOpen}
      >
        <Container>
          <RoomType
            onChange={this.updateRoomType}
            roomType={this.props.roomType}
            total={this.props.roomType.total}
          />
        </Container>
      </DropDown>
    );
  }
}

import React from "react";
import styled from "styled-components";
import Media from "../../../Media";
import { Minus, Plus } from "../../../styled";

const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 24px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  margin-right: 310px;
  align-items: center;
  ${Media.mobile`
    margin-right: 0px;
  `};
`;

const SectionTitle = styled.div`
  font-size: 20px;
  padding-bottom: 16px;
  ${Media.mobile`  
    font-size: 18px;
  `};
`;

const OptionsTitle = styled.div`
  font-size: 18px;
  font-family: CircularLight;
  ${Media.mobile`  
    font-size: 16px;
  `};
`;

const Counters = styled.div`
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Count = styled.div`
  white-space: nowrap;
  font-size: 18px;
  font-family: CircularLight;
`;

export class RoomsAndBeds extends React.Component {
  state = {
    isOpened: false,
    roomsAndBeds: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      total: 0
    }
  };
  onMinus = rooms => {
    this.setState(
      {
        roomsAndBeds: {
          ...this.state.roomsAndBeds,
          [rooms]: this.state.roomsAndBeds[rooms] - 1
        }
      },
      () => this.updateRoomsAndBeds(this.state.roomsAndBeds)
    );
  };

  onPlus = rooms => {
    this.setState(
      {
        roomsAndBeds: {
          ...this.state.roomsAndBeds,
          [rooms]: this.state.roomsAndBeds[rooms] + 1
        }
      },
      () => this.updateRoomsAndBeds(this.state.roomsAndBeds)
    );
  };

  onCancel = () => {
    this.setState(
      {
        isOpened: false,
        roomsAndBeds: {
          bedrooms: 0,
          beds: 0,
          bathrooms: 0,
          total: 0
        }
      },
      () => this.updateRoomsAndBeds(this.state.roomsAndBeds)
    );
  };

  onApply = () => {
    this.setState({ isOpened: false }, () =>
      this.updateRoomsAndBeds(this.state.roomsAndBeds)
    );
  };

  updateRoomsAndBeds = roomsAndBeds => {
    console.log("updateRoomsAndBeds");
    this.updateTotal();
    this.props.handleData(this.props.id, roomsAndBeds);
  };

  updateTotal = () => {
    console.log("updateTotal");
    this.setState({
      roomsAndBeds: {
        ...this.state.roomsAndBeds,
        total:
          this.state.roomsAndBeds.bedrooms +
          this.state.roomsAndBeds.beds +
          this.state.roomsAndBeds.bathrooms
      }
    });
  };

  render() {
    return (
      <Section>
        <SectionTitle>Rooms and beds</SectionTitle>
        <Row>
          <OptionsTitle>Bedrooms</OptionsTitle>
          <Counters>
            <Minus
              onClick={() => this.onMinus("bedrooms")}
              disabled={this.props.roomsAndBeds.bedrooms <= 0}
            />
            <Count>{this.props.roomsAndBeds.bedrooms}</Count>
            <Plus onClick={() => this.onPlus("bedrooms")} />
          </Counters>
        </Row>
        <Row>
          <OptionsTitle>Beds</OptionsTitle>
          <Counters>
            <Minus
              onClick={() => this.onMinus("beds")}
              disabled={this.props.roomsAndBeds.beds <= 0}
            />
            <Count>{this.props.roomsAndBeds.beds}</Count>
            <Plus onClick={() => this.onPlus("beds")} />
          </Counters>
        </Row>
        <Row>
          <OptionsTitle>Bathrooms</OptionsTitle>
          <Counters>
            <Minus
              onClick={() => this.onMinus("bathrooms")}
              disabled={this.props.roomsAndBeds.bathrooms <= 0}
            />
            <Count>{this.props.roomsAndBeds.bathrooms}</Count>
            <Plus onClick={() => this.onPlus("bathrooms")} />
          </Counters>
        </Row>
      </Section>
    );
  }
}

import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import Instant from "./Sections/InstantBook";

const Container = styled.div`
  padding: 24px;
  width: 326px;
`;

export default class InstantBook extends React.Component {
  state = {
    isOpened: false
  };

  onToggle = isOpened => {
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
        handleOpen={this.props.handleOpen}
      >
        <Container>
          <Instant />
        </Container>
      </DropDown>
    );
  }
}

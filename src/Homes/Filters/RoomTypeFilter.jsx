import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const RoomsContainer = styled.div`
  padding: 24px;
  width: 326px;
`;

export default class extends React.Component {
  state = {
    checked: false
  };

  onToggle = checked => {
    this.setState({ checked });
  };

  onCancel = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false
    });
  };

  onApply = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false
    });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        title={this.props.title}
        checkedTitle={this.props.checkedTitle}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
      >
        <RoomsContainer>{this.props.title}</RoomsContainer>
      </Filter>
    );
  }
}

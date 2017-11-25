import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { MobileOnly } from "../../Media";

const RoomsContainer = styled.div`
  padding: 24px;
  width: 326px;
`;

export default class extends React.Component {
  state = {
    checked: false,
    adultsCounter: null,
    childrenCounter: null,
    infantsCounter: null
  };

  onToggle = checked => {
    this.setState({ checked });
  };

  onCancel = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false,
      adultsCounter: this.state.adultsCounter,
      childrenCounter: this.state.childrenCounter,
      infantsCounter: this.state.childrenCounter
    });
  };

  onApply = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false,
      adultsCounter: this.state.adultsCounter,
      childrenCounter: this.state.childrenCounter,
      infantsCounter: this.state.childrenCounter
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

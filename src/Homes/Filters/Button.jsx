import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: Circular;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  margin-top: 2px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  display: ${props => (props.none ? "none" : "inline-block")};
  background-color: ${props => (props.selected ? "#008489" : "#fff")};
  color: ${props => (props.selected ? "#fff" : "#383838")};
  border: ${props =>
    props.selected ? "1px solid #008489" : "1px solid rgba(72, 72, 72, 0.2)"};

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

export default class extends React.Component {
  state = {
    clicked: false
  };

  onClick = () => {
    this.props.onToggle(this);
    this.setState({ clicked: !this.state.clicked });
  };

  onCancel = () => {
    this.props.onCancel(this);
    this.setState({ clicked: true });
  };

  onApply = () => {
    this.props.onCancel(this);
    this.onApply({ clicked: true });
  };

  render() {
    return (
      <div className={this.props.className}>
        <Button
          className={this.props.className}
          clicked={this.state.clicked}
          onClick={this.onClick}
        >
          {this.props.title}
        </Button>
      </div>
    );
  }
}

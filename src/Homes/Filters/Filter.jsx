import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

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
  background-color: ${props => (props.clicked ? "#008489" : "#fff")};
  color: ${props => (props.clicked ? "#fff" : "#383838")};
  border: ${props =>
    props.clicked ? "1px solid #008489" : "1px solid rgba(72, 72, 72, 0.2)"};

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const DropContainer = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;

const DropContent = onClickOutside(styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  padding-top: 42px;
  border: none;
  box-shadow: none;
  @media (min-width: 576px) {
    position: absolute;
    left: 0px;
    top: 8px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
    background: #fff;
    z-index: 20;
  }
`);

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  background: transparent;
  padding: 24px 32px;
  color: #636363;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const ApplyButton = styled(CancelButton)`color: #0f7276;`;

export default class extends React.Component {
  state = {
    clicked: false
  };

  onClick = () => {
    if (!this.state.clicked) {
      this.props.onToggle(true);
    } else {
      this.onApply();
    }
    this.setState({ clicked: !this.state.clicked });
  };

  onApply = () => {
    this.props.onApply();
    this.setState({ clicked: false });
  };

  onCancel = () => {
    this.props.onCancel();
    this.setState({ clicked: false });
  };

  onClickOutside = () => {
    this.props.onCancel();
    this.setState({ clicked: false });
  };

  render() {
    return (
      <div className={this.props.className}>
        <Button
          className={this.props.className}
          onClick={this.onClick}
          clicked={this.state.clicked}
        >
          {this.props.title}
        </Button>
        <DropContainer>
          {this.state.clicked && (
            <DropContent
              eventTypes="click"
              handleClickOutside={this.onClickOutside}
            >
              {this.props.children}
              <Buttons>
                <CancelButton onClick={this.onCancel}>Cancel</CancelButton>
                <ApplyButton onClick={this.onApply}>Apply</ApplyButton>
              </Buttons>
            </DropContent>
          )}
        </DropContainer>
      </div>
    );
  }
}

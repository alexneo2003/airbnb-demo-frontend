import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import Media from "../../Media";

const FilterButton = styled.button`
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
  background-color: ${props => (props.checked ? "#008489" : "#fff")};
  color: ${props => (props.checked ? "#fff" : "#383838")};
  border: ${props =>
    props.checked ? "1px solid #008489" : "1px solid rgba(72, 72, 72, 0.2)"};

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
  z-index: 30;
  position: fixed;
  left: 0;
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
  }
`);

const Buttons = styled.div`
  z-index: 35;
  display: flex;
  justify-content: space-between;
  ${Media.md`display:none;`};
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
    checked: false
  };

  onClick = () => {
    if (!this.state.checked) {
      this.props.onToggle(true);
    } else {
      this.onApply();
    }
    this.setState({ checked: !this.state.checked });
  };

  onApply = () => {
    this.props.onApply();
    this.setState({ checked: false });
  };

  onCancel = () => {
    this.props.onCancel();
    this.setState({ checked: false });
  };

  onClickOutside = () => {
    console.log("onClickOutside");

    this.props.onCancel();
    this.setState({ checked: false });
  };

  render() {
    return (
      <div>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          checked={this.state.checked}
        >
          {this.state.checked ? this.props.checkedTitle : this.props.title}
        </FilterButton>
        <DropContainer>
          {this.state.checked && (
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

import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import Media, { MobileOnly, TabletFrom } from "../../Media";
import close from "./close.svg";

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

const DropDownContainer = styled.div`position: relative;`;

const DropDownContent = onClickOutside(styled.div`
  position: absolute;
  top: 8px;
  left: 0px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  z-index: 11;
  background: #fff;
  ${Media.mobile`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 48px;
    border: none;
    box-shadow: none;
  `};
`);

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  ${Media.mobile`
    position: fixed;
    background: white;
    height: 48px;
    top: 0;
    left: 0;
    right: 0;
  `};
`;

const ButtonStyle = styled.button`
  padding: 16px;
  min-width: 16px;
  height: 48px;
  font-size: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  ${Media.sm`
    height: 64px;
    width: 110px;
    padding:0;
  `};
`;

const Cancel = styled(ButtonStyle)`
  color: #636363;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${Media.sm`background: none;`};
`;

const Apply = styled(ButtonStyle)`
  color: #0f7276;
  margin-right: 16px;
  ${Media.sm`
    padding:0;
    margin-right: 0px;
  `};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${Media.mobile`
    position: fixed;
    background: white;
    height: 48px;
    top: 0;
    left: 0;
    right: 0;
  `};
`;

const ActionTitle = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Media.sm`display:none;`};
`;

const DropdownContentHolder = styled.div`
  ${Media.mobile`
    position: relative;
    height: calc(100% - 18px);
    width: 100%;
  `};
`;

const DropdownContentBox = styled.div`
  ${Media.mobile`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `};
`;

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
        <DropDownContainer>
          {this.state.checked && (
            <DropDownContent
              eventTypes="click"
              handleClickOutside={this.onClickOutside}
            >
              <DropdownContentHolder>
                <DropdownContentBox>{this.props.children}</DropdownContentBox>
              </DropdownContentHolder>
              <TitleContainer>
                <Cancel onClick={this.onCancel}>
                  <TabletFrom>Cancel</TabletFrom>
                </Cancel>
                <ActionTitle>When</ActionTitle>
                <Apply onClick={this.onApply}>
                  <TabletFrom>Apply</TabletFrom>
                  <MobileOnly>Reset</MobileOnly>
                </Apply>
              </TitleContainer>
            </DropDownContent>
          )}
        </DropDownContainer>
      </div>
    );
  }
}

import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import Media, { MobileOnly, TabletFrom } from "../../Media";
import { Row, Col } from "../../styled";
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
  background-color: ${props => (props.isOpened ? "#008489" : "#fff")};
  color: ${props => (props.isOpened ? "#fff" : "#383838")};
  border: ${props =>
    props.isOpened ? "1px solid #008489" : "1px solid rgba(72, 72, 72, 0.2)"};

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const ShadedContainer = styled.div`
  opacity: 0.99;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 140px;
  z-index: 1;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.8);
`;

const DropDownContainer = styled.div`
  position: relative;
`;

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

const MoreFiltersContent = onClickOutside(styled.div`
  position: absolute;
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
  ${Media.md`
    position: absolute;
    top: 8px;
    left: -165px;
  `};
  ${Media.lg`
    position: absolute;
    top: 8px;
    left: -468px;
  `};
`);

const ButtonStyle = styled.button`
  padding: 24px 32px;
  height: auto;
  font-size: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Cancel = styled(ButtonStyle)`
  color: #636363;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${Media.sm`background: none;`};
`;

const SeeHomes = styled(ButtonStyle)`
  white-space: nowrap;
  background: #008489;
  color: #fff;
  border-radius: 4px;
  padding: 6px 32px;
  ${Media.mobile`
    background: none;
    color: #008489;
    padding: 6px 8px;
  `};
`;

const BottomContainer = styled.div`
  margin-top: 16px;
  position: fixed;
  background: #ffffff;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  left: 0;
  right: 0;
  bottom: 0;
`;

const SeeHomesApply = styled(ButtonStyle)`
  font-family: CircularBold;
  font-size: 18px;
  white-space: nowrap;
  background: #ff5a5f;
  color: #fff;
  border-radius: 4px;
  padding: 12px 32px;
  margin: 8px;
  width: 100%;
`;

const CancelHomes = styled(ButtonStyle)`
  margin-right: 8px;
  color: #636363;
  background: #fff;
  padding: 6px 14px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${Media.sm`background: none;`};
`;

const Apply = styled(ButtonStyle)`
  color: #0f7276;
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

const HomesButtonsContainer = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  height: 48px;
  background: white;
  ${Media.mobile`
    justify-content: center;  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  `};
  ${Media.md`
    justify-content: center;
  `};
  ${Media.lg`
    justify-content: flex-end;  
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
    isOpened: false,
    openedFilter: null,
    moreFilters: false
  };

  onClick = () => {
    if (!this.state.isOpened) {
      this.props.onToggle(true);
      this.moreFilters(this.props.moreFilters);
    } else {
      this.onApply();
    }
    this.setState({ isOpened: !this.state.isOpened });
  };

  onApply = () => {
    this.setState({ isOpened: false });
  };

  onCancel = () => {
    this.setState({ isOpened: false });
  };

  onClickOutside = () => {
    this.setState({ isOpened: false });
  };

  moreFilters = moreFilters => {
    moreFilters
      ? this.setState({ moreFilters: true })
      : this.setState({ moreFilters: false });
  };

  render() {
    return (
      <div>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          isOpened={this.state.isOpened}
          onApply={this.onApply}
          moreFilters={this.props.moreFilters}
        >
          {this.state.isOpened ? this.props.checkedTitle : this.props.title}
        </FilterButton>

        {this.state.isOpened && <ShadedContainer />}
        {this.state.moreFilters && (
          <DropDownContainer>
            {this.state.isOpened && (
              <MoreFiltersContent
                eventTypes="click"
                handleClickOutside={this.onClickOutside}
              >
                <DropdownContentHolder>
                  <DropdownContentBox>{this.props.children}</DropdownContentBox>
                </DropdownContentHolder>
                <HomesButtonsContainer>
                  <CancelHomes onClick={this.onCancel}>
                    <TabletFrom>Cancel</TabletFrom>
                  </CancelHomes>
                  <ActionTitle>All filters (0)</ActionTitle>
                  <SeeHomes onClick={this.onApply}>
                    <TabletFrom>See homes</TabletFrom>
                    <MobileOnly>Clear all</MobileOnly>
                  </SeeHomes>
                </HomesButtonsContainer>
                <MobileOnly>
                  <BottomContainer>
                    <SeeHomesApply onClick={this.onApply}>
                      See homes
                    </SeeHomesApply>
                  </BottomContainer>
                </MobileOnly>
              </MoreFiltersContent>
            )}
          </DropDownContainer>
        )}
        {!this.state.moreFilters && (
          <DropDownContainer>
            {this.state.isOpened && (
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
                  <ActionTitle>{this.props.title}</ActionTitle>
                  <Apply onClick={this.onApply}>
                    <TabletFrom>Apply</TabletFrom>
                    <MobileOnly>Reset</MobileOnly>
                  </Apply>
                </TitleContainer>
              </DropDownContent>
            )}
          </DropDownContainer>
        )}
      </div>
    );
  }
}

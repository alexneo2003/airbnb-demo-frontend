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
  background-color: ${props => (props.primary ? "#008489" : "#fff")};
  color: ${props => (props.primary ? "#fff" : "#383838")};
  border: 1px solid
    ${props => (props.primary ? "#008489" : "rgba(72, 72, 72, 0.2)")};

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
  position: fixed;
  box-sizing: border-box;
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
    position: fixed;
    top: 140px;
    left: 8px;
  `};
  ${Media.lg`
    position: fixed;
    top: 140px;
    left:calc((100vw - 992px)/2);
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
    bottom: 0;
    left: 0;
    right: 0;
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
    moreFilters: false
  };

  onClick = () => {
    console.log("onClick");
    console.log(this.state.isOpened);
    if (!this.state.isOpened) {
      this.props.onToggle(true);
      this.moreFilters(this.props.moreFilters);
    } else {
      this.onApply();
    }
    this.setState({ isOpened: !this.state.isOpened });
    this.openFilter();
  };

  onClickOutside = () => {
    this.setState({ isOpened: false });
  };

  moreFilters = moreFilters => {
    moreFilters
      ? this.setState({ moreFilters: true })
      : this.setState({ moreFilters: false });
  };

  onCancel = () => {
    this.setState({
      isOpened: false
    });
    this.props.onCancel();
  };

  onApply = () => {
    this.setState({ isOpened: false });
    this.props.onApply();
  };

  setTitle = function() {
    console.log("setTitle", this.props.id);
    if (this.props.id === "dates") {
      return (
        (this.props.dates.startDate
          ? this.props.dates.startDate.format("MMM do")
          : "Check in") +
        " - " +
        (this.props.dates.endDate
          ? this.props.dates.endDate.format("MMM do")
          : "Check out")
      );
    } else {
      console.log(this.props.total);
      return this.props.total >= 1
        ? this.props.title + " \u2022 " + this.props.total
        : this.props.title;
    }
  };

  openFilter = function() {
    return this.props.handleOpen(this.props.id);
  };

  render() {
    return (
      <div>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          primary={this.state.isOpened}
          onApply={this.onApply}
          onCancel={this.onCancel}
        >
          {this.state.isOpened ||
          this.props.id === "dates" ||
          this.props.total >= 1
            ? this.setTitle()
            : this.props.title}
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

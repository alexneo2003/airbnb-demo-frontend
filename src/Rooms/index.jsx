import React from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import avatar from "./img/avatar.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import medal from "./img/medal.svg";
import guests from "./img/guests.svg";
import roomType from "./img/room-type.svg";
import beds from "./img/beds.svg";
import bath from "./img/bath.svg";
import internet from "./img/internet.svg";
import wifi from "./img/wifi.svg";
import friendly from "./img/friendly.svg";
import parking from "./img/parking.svg";
import star from "./img/star.svg";
import search from "./img/search.svg";
import bookmark from "./img/bookmark.svg";
import cancellation from "./img/cancellation.svg";
import dropdown from "./img/arrow-down.svg";
import { Col } from "../styled";
import Header from "../Header";
import Footer from "../Footer";
import { DesktopOnly } from "../Media";

import { StickyContainer, Sticky } from "react-sticky";

const HeaderBg = styled.img`
  position: relative;
  width: 100%;
  max-height: 440px;
  margin-bottom: 16px;
  background-size: cover;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  color: #383838;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 992px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Section = styled.section`
  position: relative;
`;

const SectionTitle1 = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 36px;
  font-family: CircularBold;
`;

const ReviewsTitle = styled.span`
  font-size: 28px;
`;

const ReviewsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const ReviewRow = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 14px;
  font-family: CircularLight;
`;

const Nav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 34px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Menu = styled.a`
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  margin-left: 8px;
  margin-right: 8px;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
  &:visited {
    color: #383838;
  }
`;

const menuItems = [
  { link: "#overview", title: "Overview" },
  { link: "#reviews", title: "Reviews" },
  { link: "#overview", title: "The Host" },
  { link: "#overview", title: "Location" }
];

const StickyCard = styled.div`
  width: 312px;
  height: 499px;
  border-radius: 3px;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-shadow: 0px 2px 10px rgba(118, 118, 118, 0.2);
`;

const Type = styled(Text)`
  font-size: 16px;
`;

const AvatarContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
  width: 68px;
  height: 122px;
  text-align: center;
`;

const Avatar = styled.img`
  margin-bottom: 12px;
  width: 64px;
  height: 64px;
`;

const Medal = styled.div`
  position: absolute;
  right: 0;
  top: 30%;
  width: 16px;
  height: 30px;
  background: url(${medal}) center no-repeat;
  border: 0;
`;

const AvatarName = styled(Text)`
  font-size: 18px;
  text-align: center;
`;

const Params = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 32px;
`;

const ParamsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 8px;
  margin-right: 8px;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

const ParamImg = styled.img`
  width: 20px;
  height: 20px;
`;
const ParamTitle = styled(Text)`
  margin-left: 8px;
  margin-right: 30px;
`;

const AmenitiesRow = styled(Row)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Description = styled(Text)`
  font-family: ${props => (props.normal ? "Circular" : "")};
  font-size: 18px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const SubDescription = styled(Description)`
  font-size: 16px;
`;

const PrimaryTitle = styled.div`
  font-size: 16px;
  font-family: Circular;
  color: #0f7276;
  position: relative;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const ReadMore = styled(PrimaryTitle)`
  margin-top: 22px;
  margin-bottom: 22px;
  &:after {
    visibility: visible;
    position: absolute;
    content: "";
    background: url(${dropdown}) no-repeat 5px;
    width: 22px;
    height: 7px;
    top: 8px;
    margin-left: 2px;
  }
`;

const ReadMoreText = styled(PrimaryTitle)`
  margin: 0;
  display: inline-block;
  font-family: CircularLight;
`;

const Divider = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const DividerShort = styled(Divider)`
  width: 66px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const ParagraphTitle = styled(Text)`
  position: relative;
  margin-top: 8px;
  margin-bottom: 15px;
  color: #383838;
  font-family: CircularBold;
  font-size: 16px;
`;

const CancellationImg = styled.img`
  position: absolute;
  top: 32px;
  right: 24px;
  width: 42px;
  height: 45px;
`;

const ReviewsStar = styled.div`
  margin-left: 16px;
  display: inline-block;
  background: url(${star}) space;
  width: 116px;
  height: 19px;
`;
const ReviewStar = styled(ReviewsStar)`
  background-size: 16px;
  margin-left: 0;
  width: 95px;
  height: 15px;
`;

const ReviewType = styled(Text)`
  display: inline-block;
  font-size: 16px;
  white-space: nowrap;
`;

const ReviewInput = styled.input.attrs({
  placeholder: "Search reviews"
})`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 10px;
  padding-top: 7px;
  padding-right: 7px;
  padding-bottom: 7px;
  padding-left: 34px;
  border-radius: 2px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  width: 230px;
  height: 32px;
  font-size: 14px;
  color: #383838;
  font-family: Circular;
  @media (min-width: 576px) {
    font-size: 14px;
    padding-top: 7px;
    padding-right: 7px;
    padding-bottom: 7px;
    padding-left: 34px;
  }
`;

const ReviewAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

const Bookmark = styled.div`
  background: url(${bookmark}) no-repeat;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

const params = [
  {
    img: guests,
    title: "2 guests"
  },
  {
    img: roomType,
    title: "Studio"
  },
  {
    img: beds,
    title: "beds"
  },
  {
    img: bath,
    title: "bath"
  }
];

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header placeholder="Search" />
        <MainContainer>
          <HeaderBg src={bg} />
          <Content>
            <Row>
              <Col xs="12" md="12" lg="8">
                <Nav>
                  {menuItems.map((menu, index) => (
                    <Menu href={menu.link} key={index}>
                      {menu.title}
                    </Menu>
                  ))}
                </Nav>
                <Section id="overview">
                  <SectionTitle1>Romantic Cabana with view</SectionTitle1>
                  <Type>Entire cabin · Armenia</Type>
                  <AvatarContainer>
                    <Avatar src={avatar} />
                    <Medal />
                    <AvatarName>Yudi & Victoria</AvatarName>
                  </AvatarContainer>
                  <Row>
                    {params.map((param, index) => (
                      <Params key={index}>
                        <ParamImg src={param.img} alt="" />
                        <ParamTitle>{param.title}</ParamTitle>
                      </Params>
                    ))}
                  </Row>
                  <Description>
                    Located in the coffee region, in the Andean mountains of
                    Colombia, South America, a charming cabana made from bamboo,
                    with a great view and a "sendero" or pathway through the
                    bamboo forest which criss-crosses our 5 acre organic farm,
                    leading down to a stream. A place to relax and commune with
                    nature.
                  </Description>
                  <ReadMore>Read more about the space</ReadMore>
                  <PrimaryTitle>Contact host</PrimaryTitle>
                  <Divider />
                  <ParagraphTitle>Amenities</ParagraphTitle>
                  <Row>
                    <ParamsColumn>
                      <AmenitiesRow>
                        <ParamImg src={internet} alt="" />
                        <ParamTitle>Internet</ParamTitle>
                      </AmenitiesRow>
                      <AmenitiesRow>
                        <ParamImg src={wifi} alt="" />
                        <ParamTitle>Wireless Internet</ParamTitle>
                      </AmenitiesRow>
                    </ParamsColumn>
                    <ParamsColumn>
                      <AmenitiesRow>
                        <ParamImg src={friendly} alt="" />
                        <ParamTitle>Family/kid friendly</ParamTitle>
                      </AmenitiesRow>
                      <AmenitiesRow>
                        <ParamImg src={parking} alt="" />
                        <ParamTitle>Free parking on premises</ParamTitle>
                      </AmenitiesRow>
                    </ParamsColumn>
                  </Row>
                  <ReadMore>Show all amenities</ReadMore>
                  <Divider />
                  <ParagraphTitle>
                    Always communicate through Airbnb
                  </ParagraphTitle>
                  <SubDescription>
                    To protect your payment, never transfer money or communicate
                    outside of the Airbnb website or app.
                  </SubDescription>
                  <PrimaryTitle>Learn more</PrimaryTitle>
                  <Divider />
                  <ParagraphTitle>House Rules</ParagraphTitle>
                  <SubDescription>Check-in is anytime after 1PM</SubDescription>
                  <SubDescription>Check out by 11AM</SubDescription>
                  <ReadMore>Read all rules</ReadMore>
                  <Divider />
                  <ParagraphTitle>
                    Cancellations
                    <CancellationImg src={cancellation} />
                  </ParagraphTitle>
                  <SubDescription normal>Free cancellation</SubDescription>
                  <SubDescription>
                    Cancel within 48 hours of booking to get a full refund.
                  </SubDescription>
                  <DividerShort />
                  <SubDescription>Flexible</SubDescription>
                  <SubDescription>
                    Cancel up to 24 hours before check in and get a full refund
                    (minus service fees). Cancel within 24 hours of your trip
                    and the firs… <ReadMoreText>Read more</ReadMoreText>
                  </SubDescription>
                  <Divider />
                </Section>
                <Section id="reviews">
                  <ReviewsRow>
                    <ReviewRow>
                      <ReviewsTitle>113 Reviews</ReviewsTitle>
                      <ReviewsStar />
                    </ReviewRow>
                    <ReviewRow>
                      <ReviewInput />
                    </ReviewRow>
                  </ReviewsRow>
                  <Row>
                    <ParamsColumn>
                      <ReviewRow>
                        <ReviewType>Accuracy</ReviewType>
                        <ReviewStar />
                      </ReviewRow>
                      <ReviewRow>
                        <ReviewType>Communication</ReviewType>
                        <ReviewStar />
                      </ReviewRow>
                      <ReviewRow>
                        <ReviewType>Cleanliness</ReviewType>
                        <ReviewStar />
                      </ReviewRow>
                    </ParamsColumn>
                    <ParamsColumn>
                      <ReviewRow>
                        <ReviewType>Location</ReviewType>
                        <ReviewStar />
                      </ReviewRow>
                      <ReviewRow>
                        <ReviewType>Check In</ReviewType>
                        <ReviewStar />
                      </ReviewRow>
                      <ReviewRow>
                        <ReviewType>Value</ReviewType>
                        <ReviewStar />
                      </ReviewRow>
                    </ParamsColumn>
                  </Row>
                  <Divider />
                  <ReviewRow>
                    <ReviewRow>
                      <ReviewAvatar src={avatar2} alt="avatar" />
                      <ParamsColumn>
                        <ReviewType>Marlee</ReviewType>
                        <ReviewType>November 2017</ReviewType>
                      </ParamsColumn>
                    </ReviewRow>
                    <ReviewRow>
                      <Bookmark />
                    </ReviewRow>
                  </ReviewRow>
                </Section>
              </Col>
              <DesktopOnly>
                <Col lg="4">
                  <StickyContainer>
                    <Sticky topOffset={80} isSticky={true}>
                      {props => {
                        return <StickyCard />;
                      }}
                    </Sticky>
                  </StickyContainer>
                </Col>
              </DesktopOnly>
            </Row>
          </Content>
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

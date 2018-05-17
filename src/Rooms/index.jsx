import React from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import avatar from "./img/avatar.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import homes1 from "./img/homes1.png";
import homes2 from "./img/homes2.png";
import homes3 from "./img/homes3.png";
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
import verified from "./img/verified.svg";
import { Row as RowListing, Col, NextPage } from "../styled";
import Header from "../Header";
import Footer from "../Footer";
import Media, { DesktopOnly } from "../Media";
import { StickyContainer, Sticky } from "react-sticky";
import Pagination from "./Pagination";
import GoogleMap from "../Homes/GoogleMap";
import Card from "./Card";
import StickyCard from "./StickyCard";

const HeaderBg = styled.img`
  position: relative;
  width: 100%;
  max-height: 440px;
  background-size: cover;
`;

const MainContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  color: #383838;
`;

const Content = styled.div`
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  width: auto;
  max-width: 976px;
`;

const StyledSticky = styled.div`
  height: 100%;
`;

const ContentRow = styled.div`
  display: flex;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
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

const ListingTitle = styled(SectionTitle1)`
  margin-top: 24px;
  margin-bottom: 20px;
`;

const ReviewsTitle = styled.span`
  font-family: CircularBold;
  font-size: 28px;
`;

const HostTitle = styled.span`
  font-family: CircularBold;
  font-size: 28px;
  margin-top: 16px;
  margin-bottom: 8px;
  display: inline-block;
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

const ReviewAvatarRow = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-start;
`;

const Text = styled.div`
  font-size: 14px;
  font-family: CircularLight;
`;

const Nav = styled.nav`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Menu = styled.a`
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-right: 8px;
  color: #0f7276;
  font-family: CircularLight;
  font-size: 14px;
  text-decoration: none;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
  &:active {
    color: #383838;
    font-family: CircularBold;
  }
`;

const Dot = styled.div`
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #0f7276;
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

const HostMedal = styled(Medal)`
  top: 65%;
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
  justify-content: space-around;
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
  align-items: center;
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

const HostLocation = styled(Description)`
  font-size: 16px;
  margin-bottom: 16px;
`;

const ReviewDescription = styled(Description)`
  font-size: 18px;
`;

const HostDescription = styled(Description)`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 18px;
`;

const LocationDescription = styled(Description)`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 18px;
`;

const HostParam = styled(Description)`
  display: inline-block;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 18px;
`;

const HostParamBold = styled(HostParam)`
  display: inline-block;
  font-family: Circular;
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

const ReadMoreReview = styled(PrimaryTitle)`
  font-size: 18px;
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

const ReviewName = styled(Text)`
  font-family: Circular;
  font-size: 20px;
`;

const ReviewDate = styled(Text)`
  white-space: nowrap;
  font-size: 16px;
`;

const HostAvatarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  width: 90px;
  height: 90px;
  text-align: center;
`;

const HostAvatar = styled.img`
  width: 88px;
  height: 88px;
`;

const ReviewsCount = styled.div`
  margin-right: 16px;
  max-width: 30px;
  padding: 6px 10px;
  background: linear-gradient(
    155deg,
    rgba(255, 195, 51, 0.8) 5.46%,
    #ffc333 50.68%,
    #ffb400 50.76%,
    #ffb400 85.47%
  );
  border-radius: 6px;
  font-family: CircularBold;
  line-height: normal;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;

const Verified = styled.div`
  margin-left: 32px;
  margin-right: 16px;
  background: url(${verified}) no-repeat;
  width: 32px;
  height: 32px;
`;

const ContactHost = styled.button`
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 22px;
  width: 106px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 2px;
  color: #0f7276;
  font-family: Circular;
  font-size: 14px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 192px;
  ${Media.md`
    height: 474px;
  `};
  ${Media.lg`
    height: 612px;
  `};
`;

const Place = styled.p`
  cursor: pointer;
  font-size: 14px;
  font-family: CircularLight;
  margin-top: 4px;
  margin-bottom: 4px;
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

const homes = [
  {
    imgSrc: homes1,
    price: 80,
    title: "La Salentina, see, nature & relax",
    type: "Entire house",
    beds: 9,
    reviewsCount: 99
  },
  {
    imgSrc: homes2,
    price: 80,
    title: "Your private 3 bedr. riad and exclusive",
    type: "Entire house",
    beds: 5,
    reviewsCount: 0
  },
  {
    imgSrc: homes3,
    price: 200,
    title: "Dreamy Tropical Tree House",
    type: "Entire treehouse",
    beds: 1,
    reviewsCount: 364
  }
];

const places1 = [
  { title: "Cartagena Vacation Rentals" },
  { title: "Bucaramanga" },
  { title: "Manuel Antonio" },
  { title: "Cartagena De Indias (Distrito Turistico Y Cultural)" },
  { title: "Quito" },
  { title: "Santander de Quilichao" }
];

const places2 = [
  { title: "San Andrés Vacation Rentals" },
  { title: "Bogota" },
  { title: "Santa Marta (Distrito Turistico Cultural E Historico)" },
  { title: "Rionegro" },
  { title: "Anapoima" },
  { title: "Puerto Rico" }
];

const places3 = [
  { title: "Willemstad Vacation Rentals" },
  { title: "Cali" },
  { title: "Chia" },
  { title: "Ibague" },
  { title: "Medellin" },
  { title: "Tabio" }
];

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header placeholder="Search" />
        <MainContainer>
          <HeaderBg src={bg} />
          <StickyContainer>
            <Content>
              <ContentRow>
                <Col xs="12" md="12" lg="8">
                  <Sticky topOffset={-81}>
                    {({ style, isSticky }) => {
                      return (
                        <Nav
                          style={{
                            ...style,
                            background: "#ffffff",
                            zIndex: 11,
                            top: isSticky ? 81 : 0,
                            maxWidth: "976px",
                            width: "100%"
                          }}
                        >
                          <Menu href="#overview">Overview</Menu>
                          <Dot> · </Dot>
                          <Menu href="#reviews">Reviews</Menu>
                          <Dot> · </Dot>
                          <Menu href="#host">The host</Menu>
                          <Dot> · </Dot>
                          <Menu href="#location">Location</Menu>
                        </Nav>
                      );
                    }}
                  </Sticky>
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
                      Colombia, South America, a charming cabana made from
                      bamboo, with a great view and a "sendero" or pathway
                      through the bamboo forest which criss-crosses our 5 acre
                      organic farm, leading down to a stream. A place to relax
                      and commune with nature.
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
                      To protect your payment, never transfer money or
                      communicate outside of the Airbnb website or app.
                    </SubDescription>
                    <PrimaryTitle>Learn more</PrimaryTitle>
                    <Divider />
                    <ParagraphTitle>House Rules</ParagraphTitle>
                    <SubDescription>
                      Check-in is anytime after 1PM
                    </SubDescription>
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
                      Cancel up to 24 hours before check in and get a full
                      refund (minus service fees). Cancel within 24 hours of
                      your trip and the firs…{" "}
                      <ReadMoreText>Read more</ReadMoreText>
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
                      <ReviewAvatarRow>
                        <ReviewAvatar src={avatar2} alt="avatar" />
                        <ParamsColumn>
                          <ReviewName>Marlee</ReviewName>
                          <ReviewDate>November 2017</ReviewDate>
                        </ParamsColumn>
                      </ReviewAvatarRow>
                      <ReviewRow>
                        <Bookmark />
                      </ReviewRow>
                    </ReviewRow>
                    <ReviewDescription>
                      This was one of my favourite places we stayed in all on
                      Colombia. A very peaceful setting and a great spot to
                      unwind.
                    </ReviewDescription>
                    <Divider />
                    <ReviewRow>
                      <ReviewAvatarRow>
                        <ReviewAvatar src={avatar3} alt="avatar" />
                        <ParamsColumn>
                          <ReviewName>Michelle</ReviewName>
                          <ReviewDate>November 2017</ReviewDate>
                        </ParamsColumn>
                      </ReviewAvatarRow>
                      <ReviewRow>
                        <Bookmark />
                      </ReviewRow>
                    </ReviewRow>
                    <ReviewDescription>
                      What an absolutely wonderful place to stay! Yudy and
                      Victoria were so kind and lovely, even after we arrived
                      super late due to problems at the airport, and Hernando
                      our driver was super friendly and really patient with our
                      little Spanish. Victoria was a lovely host and gave us so…{" "}
                      <ReadMoreReview>Read more</ReadMoreReview>
                    </ReviewDescription>
                    <Divider />
                    <Pagination />
                  </Section>
                  <Section id="host">
                    <HostTitle>Hosted by Yudy & Victoria</HostTitle>
                    <HostAvatarContainer>
                      <HostAvatar src={avatar} />
                      <HostMedal />
                    </HostAvatarContainer>
                    <HostLocation>
                      Santa Ana, California, United States · Joined in August
                      2014
                    </HostLocation>
                    <Row>
                      <ReviewsCount>153</ReviewsCount>
                      <ReviewDescription>Reviews</ReviewDescription>
                      <Verified />
                      <ReviewDescription>Verified</ReviewDescription>
                    </Row>
                    <HostDescription>
                      What an absolutely wonderful place to stay! Yudy and
                      Victoria were so kind and lovely, even after we arrived
                      super late due to problems at the airport, and Hernando
                      our driver was super friendly and really patient with our
                      little Spanish. Victoria was a lovely host and gave us so…{" "}
                      <ReadMoreReview>Read more</ReadMoreReview>
                    </HostDescription>
                    <ContactHost>Contact host</ContactHost>
                    <Row>
                      <HostParam>Languages: </HostParam>
                      <HostParamBold>English, Español</HostParamBold>
                    </Row>
                    <Row>
                      <HostParam>Response rate: </HostParam>
                      <HostParamBold>100%</HostParamBold>
                    </Row>
                    <Row>
                      <HostParam>Response time:</HostParam>
                      <HostParamBold> within a few hours</HostParamBold>
                    </Row>
                  </Section>
                  <Section id="location">
                    <SectionTitle1>The neighborhood</SectionTitle1>
                    <LocationDescription>
                      What an absolutely wonderful place to stay! Yudy and
                      Victoria were so kind and lovely, even after we arrived
                      super late due to problems at the airport, and Hernando
                      our driver was super friendly and really patient with our
                      little Spanish. Victoria was a lovely host and gave us so…
                    </LocationDescription>
                    <ReadMore>Read more about neighborhood</ReadMore>
                  </Section>
                </Col>
                <Col lg="4">
                  <DesktopOnly>
                    <StyledSticky>
                      <StickyContainer>
                        <Sticky topOffset={-122}>
                          {({ style, isSticky }) => {
                            return (
                              <div
                                style={{
                                  ...style,
                                  paddingTop: isSticky ? 122 : 0,
                                  paddingBottom: 24
                                }}
                              >
                                <StickyCard />
                              </div>
                            );
                          }}
                        </Sticky>
                      </StickyContainer>
                    </StyledSticky>
                  </DesktopOnly>
                </Col>
              </ContentRow>
              <Row>
                <Col xs="12" md="12" lg="12">
                  <MapContainer>
                    <GoogleMap />
                  </MapContainer>
                  <LocationDescription>
                    Exact location information is provided after a booking is
                    confirmed.
                  </LocationDescription>
                  <Section>
                    <ListingTitle>Similar listings</ListingTitle>
                    <RowListing>
                      {homes.map((home, index) => (
                        <Col key={index} xs="8" md="5" lg="4">
                          <Card
                            imgSrc={home.imgSrc}
                            price={home.price}
                            title={home.title}
                            type={home.type}
                            beds={home.beds}
                            reviewsCount={home.reviewsCount}
                          />
                        </Col>
                      ))}
                    </RowListing>
                    <NextPage />
                  </Section>
                  <Section>
                    <SectionTitle1>
                      Explore other options in and around Armenia
                    </SectionTitle1>
                    <Row>
                      <Description>More places to stay in Armenia:</Description>
                      <SubDescription>
                        Apartments · Houses · Bed & Breakfasts · Lofts · Villas
                      </SubDescription>
                    </Row>
                    <RowListing>
                      <Col xs="8" md="5" lg="4">
                        {places1.map((place, index) => (
                          <Place key={index}>{place.title}</Place>
                        ))}
                      </Col>
                      <Col xs="8" md="5" lg="4">
                        {places2.map((place, index) => (
                          <Place key={index}>{place.title}</Place>
                        ))}
                      </Col>
                      <Col xs="8" md="5" lg="4">
                        {places3.map((place, index) => (
                          <Place key={index}>{place.title}</Place>
                        ))}
                      </Col>
                    </RowListing>
                  </Section>
                </Col>
              </Row>
            </Content>
          </StickyContainer>
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

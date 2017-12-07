import React from "react";
import Card from "./Card";
import styled from "styled-components";
import homes1 from "./homes1.png";
import homes2 from "./homes2.png";
import homes3 from "./homes3.png";
import homes4 from "./homes4.png";
import homes5 from "./homes5.png";
import homes6 from "./homes6.png";
import Filters from "./Filters";
import Pagination from "./Pagination";
import Header from "../Header";
import GoogleMapReact from "./GoogleMap";
import { Row, Col, LocationButton } from "../styled";

const HomesContainer = styled.div`
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 82px 8px 0 8px;
  z-index: 0;
  @media (min-width: 992px) {
    padding: 82px 16px 0 16px;
  }
`;

const HomesRow = styled(Row)`
  flex-wrap: wrap;
  @media (min-width: 992px) {
    width: 66.6666%;
  }
`;

const GoogleMapContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    position: fixed;
    top: 138px;
    bottom: 0;
    left: calc((100% - 992px) / 2 + (992px / 12 * 8));
    right: 0px;
  }
`;

const homes = [
  {
    imgSrc: homes1,
    price: 80,
    title: "La Salentina, see, nature & relax",
    type: "Entire house",
    beds: 9,
    reviewsCount: 99,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes2,
    price: 80,
    title: "Your private 3 bedr. riad and exclusive",
    type: "Entire house",
    beds: 5,
    reviewsCount: 99,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes3,
    price: 200,
    title: "Dreamy Tropical Tree House",
    type: "Entire treehouse",
    beds: 1,
    reviewsCount: 364,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes4,
    price: 200,
    title: "Best location old town luxury loft",
    type: "Entire apartment",
    beds: 1,
    reviewsCount: 969,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes5,
    price: 83,
    title: "Lussuoso. Vista incantevole",
    type: "Entire apartment",
    beds: 6,
    reviewsCount: 105,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes6,
    price: 72,
    title: "In the historical center of Lecce",
    type: "Entire house",
    beds: 3,
    reviewsCount: 221,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes1,
    price: 80,
    title: "La Salentina, see, nature & relax",
    type: "Entire house",
    beds: 9,
    reviewsCount: 99,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes2,
    price: 80,
    title: "Your private 3 bedr. riad and exclusive",
    type: "Entire house",
    beds: 5,
    reviewsCount: 99,
    reviewsStatus: "Superhost"
  },
  {
    imgSrc: homes3,
    price: 200,
    title: "Dreamy Tropical Tree House",
    type: "Entire treehouse",
    beds: 1,
    reviewsCount: 364,
    reviewsStatus: "Superhost"
  }
];

export default function Homes() {
  return (
    <div>
      <Header placeholder="Anywhere · Homes" />
      <Filters />
      <GoogleMapContainer>
        <GoogleMapReact />
      </GoogleMapContainer>
      <HomesContainer>
        <HomesRow>
          {homes.map((home, index) => (
            <Col key={index} xs="12" md="6" lg="6">
              <Card
                imgSrc={home.imgSrc}
                price={home.price}
                title={home.title}
                type={home.type}
                beds={home.beds}
                reviewsCount={home.reviewsCount}
                reviewsStatus={home.reviewsStatus}
              />
            </Col>
          ))}
        </HomesRow>
        <Pagination />
      </HomesContainer>
      <LocationButton />
    </div>
  );
}

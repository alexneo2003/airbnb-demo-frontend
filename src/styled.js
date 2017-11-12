import styled from "styled-components";
import nextPage from "./img/next.svg";

function getWidthString(span, row) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%;`;
}

export const Main = styled.div`
  font-family: "Circular", Helvetica Neue, Helvetica, Arial, sans-serif;
  margin-left: auto;
  margin-right: auto;
  width: auto;

  @media (min-width: 768px) {
    width: 752px;
  }
  @media (min-width: 992px) {
    width: 962px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-left: -8px;
  margin-right: -8px;
  position: relative;
  overflow-x: auto;
  @media (min-width: 992px) {
    flex-wrap: wrap;
    overflow-x: none;
  }
`;
export const Col = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;

  @media (min-width: 576px) {
    ${({ xs, row }) => (xs ? getWidthString(xs, row) : "width:100%")};
  }

  @media (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }
  @media (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

export const NextPage = styled.img.attrs({
  src: nextPage
})`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 1;
  top: 50%;
  right: -16px;
  display: none;
  @media (min-width: 996px) {
    display: block;
  }
`;
export const Price = styled.span`
  color: #383838;
  font-family: CircularBold;
`;
export const Reviews = styled.div`display: flex;`;
export const ReviewStar = styled.img`margin: 2px;`;
export const ReviewText = styled.p`
  font-size: 12px;
  margin: 5px;
`;
export const A = styled.a`
  color: #383838;
  font-family: Circular;
  text-decoration: none;
  font-size: 14px;
`;

import styled from "styled-components";
import nextPage from "./img/next.svg";
import arrow from "./img/right-arrow.svg";
import location from "./img/location.svg";
import { Link } from "react-router-dom";
import plus from "./img/plus.svg";
import minus from "./img/minus.svg";
import switch_off from "./img/switch-off.svg";
import switch_on from "./img/switch-on.svg";

function getWidthString(span) {
  let width = (span / 12 * 100).toFixed(4);
  return `flex-basis: ${width}%; max-width: ${width}%;`;
}

export const Main = styled.main`
  font-family: "Circular", Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #383838;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
  width: auto;
  max-width: 976px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
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

  @media (min-width: 320px) {
    ${({ xs }) => (xs ? getWidthString(xs) : "flex-basis:100%")};
  }
  @media (min-width: 576px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media (min-width: 768px) {
    ${({ md }) => md && getWidthString(md)};
  }
  @media (min-width: 992px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getWidthString(xl)};
  }
`;

export const NextPage = styled.img.attrs({
  src: nextPage
})`
  display: none;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 1;
  top: 45%;
  right: -6px;
  @media (min-width: 992px) {
    display: block;
  }
`;
export const Price = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #383838;
  max-width: 200px;
  font-family: CircularBold;
  @media (min-width: 992px) {
    max-width: none;
  }
`;

export const Reviews = styled.div`
  display: flex;
`;
export const ReviewStar = styled.img`
  margin: 2px;
`;
export const ReviewText = styled.p`
  font-size: 12px;
  margin: 3px 0 0 2px;
`;
export const A = styled.a`
  color: #383838;
  font-family: Circular;
  text-decoration: none;
  font-size: 14px;
`;

export const SeeAll = styled(Link)`
  color: #383838;
  font-family: Circular;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  font-size: 12px;
  margin-right: 16px;
  margin-top: 8px;
  &:after {
    position: absolute;
    content: "";
    background: url(${arrow}) no-repeat 5px;
    width: 12px;
    height: 15px;
    margin-right: 22px;
    margin-left: 2px;
  }
  @media (min-width: 576px) {
    font-size: 14px;
  }
`;

export const LocationButton = styled.img.attrs({
  src: location
})`
  cursor: pointer;
  display: block;
  position: fixed;
  bottom: 24px;
  right: 8px;
  padding: 10px 11px;
  border-radius: 100px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  @media (min-width: 992px) {
    display: none;
  }
`;

export const Counter = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  cursor: pointer;
`;

export const Minus = styled(Counter)`
  background: url(${minus});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const Plus = styled(Counter)`
  background: url(${plus});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const SwitchButton = styled.input.attrs({
  type: "switch"
})`
  color: #fff;
  background-color: 008489#;
`;
/*
<!DOCTYPE html>
<html>
<head>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 40px;
}

.switch input {display:none;}

.slider {

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(72, 72, 72, 0.3);
  background-color: #f9f9f9;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
   
  position: absolute;
  content: "";
  height: 38px;
  width: 38px;
  left: -2px;
  bottom: -1px;
  background-color: white;
  border: 1px solid rgba(72, 72, 72, 0.3);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #008489;
}

input:focus + .slider {
  box-shadow: 0 0 1px #008489;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

 Rounded sliders 
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  background-color: white;
  background: url("https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png");
  background-position:50%50%;
  background-repeat: no-repeat;
  border-radius: 50%;
}
</style>
</head>
<body>

<h2>Toggle Switch</h2>

<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>

</body>
</html> 

*/

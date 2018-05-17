import React, { Component } from "react";
import styled from "styled-components";

const StickyCard = styled.div`
  margin-top: 24px;
  padding: 16px 24px 24px 24px;
  width: 262px;
  height: 415px;
  border-radius: 3px;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-shadow: 0px 2px 10px rgba(118, 118, 118, 0.2);
  margin-bottom: 64px;
`;

export default class extends Component {
  render() {
    return <StickyCard />;
  }
}

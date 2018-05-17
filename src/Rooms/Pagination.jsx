import React from "react";
import styled from "styled-components";
import { Row, Col } from "../styled";
import arrow from "../img/pager-arrow.svg";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const PaginationRow = styled(Row)`
  margin-top: 12px;
  margin-bottom: 48px;
`;

const PaginationColumn = styled(Col)`
  justify-content: center;
  display: flex;
`;

const PageNumber = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-size: 16px;
  width: 32px;
  height: 32px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 100px;
  background-color: transparent;
  color: #0f7276;
`;

const PageNumberSelected = styled(PageNumber)`
  border-radius: 100px;
  color: #fff;
  background-color: #008489;
`;

const NextPage = styled(PageNumber)`
  border: 1px solid #008489;
`;

export default function Pagination() {
  return (
    <PaginationContainer>
      <PaginationRow>
        <PaginationColumn>
          <PageNumberSelected>1</PageNumberSelected>
          <PageNumber>2</PageNumber>
          <PageNumber>3</PageNumber>
          <PageNumber>...</PageNumber>
          <PageNumber>17</PageNumber>
          <NextPage>
            <img src={arrow} alt="arrow" />
          </NextPage>
        </PaginationColumn>
      </PaginationRow>
    </PaginationContainer>
  );
}

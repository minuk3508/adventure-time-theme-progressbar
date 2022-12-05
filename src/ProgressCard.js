import React from "react";
import styled from "styled-components";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

export default function ProgressCard({
  propgress,
  title,
  type,
  color,
  userArray,
  userArray2,
}) {
  return (
    <ProgressCardBox>
      <TopSection />
      <MiddleSection
        propgress={propgress}
        title={title}
        type={type}
        color={color}
      />
      <BottomSection
        color={color}
        userArray={userArray}
        userArray2={userArray2}
      />
    </ProgressCardBox>
  );
}

const ProgressCardBox = styled.div`
  width: 350px;
  height: 250px;
  margin: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s;
  transform: translateX(0%);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

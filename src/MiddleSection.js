import React from "react";
import styled, { keyframes } from "styled-components";

export default function MiddleSection({ propgress, title, type, color }) {
  return (
    <Container>
      <TaskTitle>{title}</TaskTitle>
      <TaskType>{type}</TaskType>
      <ProgressBarBox>
        <ProgressBarBackground>
          <ProgressBar propgress={propgress} color={color} />
        </ProgressBarBackground>
      </ProgressBarBox>
      <ProgressBox>
        <ProgressSpan>Progress</ProgressSpan>
        <NumberSpan>{propgress}</NumberSpan>
      </ProgressBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  padding: 0% 8% 0% 10%;
`;

const TaskTitle = styled.div`
  width: 100%;
  height: 23%;
  font-size: 25px;
  font-weight: 900;
  color: #27104e;
`;
const TaskType = styled.div`
  width: 100%;
  height: 17%;
  font-size: 15px;
  color: #27104e;
`;

const ProgressBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
`;
const ProgressBarBackground = styled.div`
  width: 100%;
  height: 35%;
  background-color: #ababab;
  border-radius: 25px;
`;
const progressFrame = (propgress) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${propgress};
  }
`;
const ProgressBar = styled.div`
  width: ${(props) => props.propgress};
  height: 100%;
  background-color: rgba(${(props) => props.color}, 1);
  border-radius: 25px;
  animation: ${(props) => progressFrame(props.propgress)} 1s linear;
`;

const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 19%;
`;
const ProgressSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
const NumberSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

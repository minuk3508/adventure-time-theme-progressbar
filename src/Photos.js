import React from "react";
import styled, { keyframes } from "styled-components";

export default function Photos({ left, data }) {
  return data.map((i, index) => (
    <ImagePhoto left={`${index * 15}%`} url={i.photoUrl} title={i.name} />
  ));
}
const position = keyframes`
0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }

`;

const ImagePhoto = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid white;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${position} 0.5s;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    transform: translateY(-20%);
  }
`;

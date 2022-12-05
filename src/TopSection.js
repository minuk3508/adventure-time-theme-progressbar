import React from "react";
import styled from "styled-components";
import { AiOutlineMore } from "react-icons/ai";

export default function TopSection() {
  return (
    <Container>
      <RegistrationDate>Nov 2, 2022</RegistrationDate>
      <SettingButton>
        <AiOutlineMore />
      </SettingButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 18%;
  padding: 0% 1% 0% 7%;
`;

const RegistrationDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  height: 50%;
  font-size: 20px;
  font-weight: 700;
  color: #cccccc;
  word-spacing: 3px;
`;
const SettingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 20px;
  font-weight: 700;
  color: #cccccc;
  border-radius: 50%;
  border: none;
  background: none;
  :hover {
    cursor: pointer;
    background-color: rgba(232, 232, 232, 0.2);
  }
`;

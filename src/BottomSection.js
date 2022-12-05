import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { GoPlus } from "react-icons/go";
import Photos from "./Photos";

export default function BottomSection({ color, userArray, userArray2 }) {
  const [addUserModal, setAddUserModal] = useState(false);
  const [add, setAdd] = useState(userArray);
  const [photo, setPhoto] = useState(userArray2);
  const addUser = (index) => {
    const target = add[index];
    const leftArray = add.slice(0, index);
    const rightArray = add.slice(index + 1);
    setAdd([...leftArray, ...rightArray]);
    const mockArray = photo;
    mockArray.push(target);
    setPhoto(mockArray);
  };

  return (
    <Container>
      <TaskInformationBox>
        <ParticipantsBox>
          <Participants>
            <Photos left="0%" data={photo} />
          </Participants>
          <ParticipantAdd
            color={color}
            onClick={() => {
              setAddUserModal((prev) => !prev);
            }}
          >
            {addUserModal ? (
              <>
                <GoPlus />
                <AddUserModal>
                  {add.map((i, index) => (
                    <UserListItem
                      key={i.id}
                      color={color}
                      onClick={() => {
                        addUser(index);
                      }}
                    >
                      <UserPhoto url={i.photoUrl} />
                      <UserName>{i.name}</UserName>
                    </UserListItem>
                  ))}
                </AddUserModal>
              </>
            ) : (
              <GoPlus />
            )}
          </ParticipantAdd>
        </ParticipantsBox>
        <DeadlineBox color={color}>3 days left</DeadlineBox>
      </TaskInformationBox>
    </Container>
  );
}

const height = keyframes`
0% {
  height: 0px;
}

100% {
  height: 150px;
}
`;

const UserListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding-left: 5%;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: rgba(${(props) => props.color}, 0.3);
  }
`;
const UserPhoto = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;
const UserName = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  font-size: 13px;
  color: black;
`;
const AddUserModal = styled.div`
  position: absolute;
  overflow: hidden;
  top: 110%;
  left: 50%;
  width: 100px;
  height: 150px;
  padding: 10%;
  border-radius: 10px;
  background-color: white;
  animation: ${height} 0.3s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Container = styled.div`
  width: 100%;
  height: 27%;
  padding: 0% 8%;
`;

const TaskInformationBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 3px solid rgba(204, 204, 204, 0.5);
`;
const Participants = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 65%;
  height: 100%;
`;

const ParticipantAdd = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 28px;
  color: white;
  border-radius: 50%;
  background-color: rgba(${(props) => props.color}, 1);
  :hover {
    cursor: pointer;
    background-color: rgba(${(props) => props.color}, 0.7);
  }
`;
const ParticipantsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 60%;
`;
const DeadlineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 50%;
  font-size: 15px;
  font-weight: 700;
  color: rgba(${(props) => props.color}, 1);
  border-radius: 20px;
  background-color: rgba(${(props) => props.color}, 0.3);
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: rgba(${(props) => props.color}, 0.1);
  }
`;

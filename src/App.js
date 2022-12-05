import styled, { createGlobalStyle } from "styled-components";
import ProgressCard from "./ProgressCard";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Alfa Slab One', cursive;
font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

function App() {
  const [index, setIndex] = useState(0);
  const positionArray = ["100%", "0%", "-100%"];
  const backgroundArray = ["245, 208, 86", "117, 129, 232", "152, 84, 203"];
  const bubblegumArray = [
    { id: 15346, photoUrl: "https://ifh.cc/g/72McX6.jpg", name: "gum" },
    { id: 2325, photoUrl: "https://ifh.cc/g/72McX6.jpg", name: "gun" },
    { id: 323567, photoUrl: "https://ifh.cc/g/72McX6.jpg", name: "gang" },
    { id: 41124, photoUrl: "https://ifh.cc/g/72McX6.jpg", name: "pop" },
  ];
  const bubblegumArray2 = [
    { id: 21095, photoUrl: "https://ifh.cc/g/72McX6.jpg", name: "gum" },
  ];
  const jakeArray = [
    { id: 15346, photoUrl: "https://ifh.cc/g/Zhyqb4.jpg", name: "jake" },
    { id: 2325, photoUrl: "https://ifh.cc/g/Zhyqb4.jpg", name: "joke" },
    { id: 323567, photoUrl: "https://ifh.cc/g/Zhyqb4.jpg", name: "jurke" },
    { id: 41124, photoUrl: "https://ifh.cc/g/Zhyqb4.jpg", name: "cake" },
  ];
  const finnArray = [
    { id: 15346, photoUrl: "https://ifh.cc/g/T5DVxa.jpg", name: "finn" },
    { id: 2325, photoUrl: "https://ifh.cc/g/T5DVxa.jpg", name: "fine" },
    { id: 323567, photoUrl: "https://ifh.cc/g/T5DVxa.jpg", name: "thanks" },
    { id: 41124, photoUrl: "https://ifh.cc/g/T5DVxa.jpg", name: "pine" },
  ];
  const finnArray2 = [
    { id: 21095, photoUrl: "https://ifh.cc/g/T5DVxa.jpg", name: "finn" },
  ];
  const jakeArray2 = [
    { id: 21095, photoUrl: "https://ifh.cc/g/Zhyqb4.jpg", name: "jake" },
  ];
  const onClick = () => {
    if (index < 2) {
      setIndex((prev) => prev + 1);
    } else if (index >= 2) {
      setIndex(0);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Container backgroundArray={backgroundArray[index]}>
        <Wrapper positionArray={positionArray[index]}>
          {index === 0 && (
            <ProgressCard
              userArray={jakeArray}
              userArray2={jakeArray2}
              propgress="40%"
              title="Web Design"
              type="Design"
              color="245, 208, 86"
            />
          )}
        </Wrapper>
        <Wrapper positionArray={positionArray[index]}>
          {index === 1 && (
            <ProgressCard
              userArray={finnArray}
              userArray2={finnArray2}
              propgress="90%"
              title="Documentation Work"
              type="Document"
              color="117, 129, 232"
            />
          )}
        </Wrapper>
        <Wrapper positionArray={positionArray[index]}>
          {index === 2 && (
            <ProgressCard
              userArray={bubblegumArray}
              userArray2={bubblegumArray2}
              propgress="20%"
              title="Reflect Reviews"
              type="Refactoring"
              color="152, 84, 203"
            />
          )}
        </Wrapper>
        <ButtonBox>
          <NextButton>
            <BiLeftArrowAlt />
          </NextButton>
          <NextButton onClick={onClick}>
            <BiRightArrowAlt />
          </NextButton>
        </ButtonBox>
      </Container>
    </>
  );
}

export default App;
const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 20%;
  width: 500px;
  height: 100px;
`;
const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s;
  background-color: rgb(${(props) => props.backgroundArray});
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  transform: translateX(${(props) => props.positionArray});
`;

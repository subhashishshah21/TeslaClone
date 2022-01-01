import React from "react";
import styled from "styled-components";

function Section(props) {
  const { title, description, background, leftbtntext, rightbtntext } = props;
  return (
    <Wrapper bgImg={background}>
      <Itemtext>
        <h1>{title}</h1>
        <p>{description}</p>
      </Itemtext>
      <Buttons>
        <ButtonContainer>
          <LeftButton>{leftbtntext}</LeftButton>
          {rightbtntext && <RightButton>{rightbtntext}</RightButton>}
        </ButtonContainer>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrapper>
  );
}

export default Section;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;
const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;
const Buttons = styled.div``;

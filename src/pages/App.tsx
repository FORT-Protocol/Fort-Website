import React from 'react';
import logo from '../assets/images/logo.svg';
import styled, {keyframes} from "styled-components";
import bg from '../assets/images/bg.jpg';
import fort from '../assets/images/fort.svg';
import ball1 from '../assets/images/ball1.png';

const AppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeaderFrame = styled.div`
  position: absolute;
  width: 100%;
  z-index: 9;
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    justify-content: center;
  }
`

const Logo = styled.img`
  margin: 0 44px;
  user-select: none;
`

const DashboardButton = styled.button`
  height: 44px;
  width: 170px;
  margin-right: 44px;
  border: 2px;
  border-style:solid;
  border-radius: 22px;
  background-color: transparent;
  color: #fff;
  font-family: MontserratBold,serif;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  user-select: none;
  cursor:pointer;
  &:hover {
    background-color: white;
    color: #0047BB;
    border: none;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

const ContentFrame = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

const Ball1Frame = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 200%;
    position: absolute;
    left: -375px;
  }
`

const myRotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg)
  }
`

const Ball1 = styled.img`
  height: 80%;
  animation:${myRotate} 60s linear infinite;
  @media (max-width: 1024px) {
     height: 60%;
  }
  @media (max-width: 600px) {
     height: 80%;
  }
`

const AppButton = styled.button`
  height: 44px;
  width: 146px;
  border: 2px;
  border-style:solid;
  border-radius: 22px;
  background-color: transparent;
  color: #fff;
  font-family: MontserratBold,serif;
  text-align: center;
  font-size: 16px;
  user-select: none;
  cursor:pointer;
  &:hover {
    background-color: white;
    color: #0047BB;
    border: none;
  }
  @media (max-width: 600px) {
    width: 176px;
  }
`

const DashboardButton2 = styled.button`
  height: 44px;
  width: 146px;
  border: 2px;
  border-style:solid;
  border-radius: 22px;
  background-color: transparent;
  color: #fff;
  font-family: MontserratBold,serif;
  text-align: center;
  font-size: 16px;
  cursor:pointer;
  visibility:hidden;
  margin-top: 24px;
  user-select: none;
  &:hover {
    background-color: white;
    color: #0047BB;
    border: none;
  }
  @media (max-width: 600px) {
    visibility:visible;
    width: 176px;
  }
`

const FormulaImage = styled.img`
  width: 530px;
  height: 70px;
  margin-bottom: 30px;
  user-select: none;
  @media (max-width: 600px) {
    width: 280px;
    height: 37px;
  }
`

function App() {
  return (
    <AppFrame>
        <Ball1Frame>
          <Ball1 src={ball1} alt={"ball1"}/>
        </Ball1Frame>
      <HeaderFrame>
        <Logo src={logo} alt="logo"/>
        <DashboardButton onClick={() => {
          const w = window.open('about:blank');
          // @ts-ignore
          w.location.href = 'https://hedge-dashboard.on.fleek.co/';
        }}>
          Dashboard
        </DashboardButton>
      </HeaderFrame>
      <ContentFrame>
        <FormulaImage src={fort} alt="fort formula"/>
        <AppButton onClick={() => {
          const w = window.open('about:blank');
          // @ts-ignore
          w.location.href = 'https://app.hedge.red';
        }}>
          APP
        </AppButton>
        <DashboardButton2>
          Dashboard
        </DashboardButton2>
      </ContentFrame>
    </AppFrame>
  );
}

export default App;

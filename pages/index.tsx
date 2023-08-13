'use client'
import styled from "styled-components";
import { Hero } from "@/components";
import HouseIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  padding-top: 0;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  font-family: monospace;
  justify-content: space-between;
  font-size: 0.875rem;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  padding: 12px;
  cursor: pointer;
  justify-content: space-between;
`;
const IconWrapper2 = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const HiText = styled.p`
  position: absolute;
  margin-top: 12px;
  margin-left: 42px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Helvetica Neue", sans-serif;
`;
const SupportText = styled.p`
  margin-right: 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Helvetica Neue", sans-serif;
`;
const ListYourProperty = styled.p`
  margin-right: 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  border: solid black 1px;
  font-weight: bold;
  font-family: sans-serif;
  padding: 5px;
  border-radius: 20px;
`;

const FooterContainer = styled.div`
  margin-bottom: 32px;
  display: grid;
  text-align: center;
  height: 30px;

  @media (min-width: 1024px) {
    max-width: 5xl;
    width: 100%;
    margin-bottom: 0;
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <ContentContainer>
        <IconWrapper>
          <HouseIcon />
        </IconWrapper>
        <HiText>HouseApp</HiText>

        <IconWrapper2>
          <SupportText>Support</SupportText>
          <SupportText>Language</SupportText>
          <ListYourProperty>List your Property</ListYourProperty>
          <NotificationsNoneOutlinedIcon />
          <PersonOutlineOutlinedIcon />
        </IconWrapper2>
      </ContentContainer>
      <Hero />
      <FooterContainer>{/* Content for the grid container */}</FooterContainer>
    </MainContainer>
  );
}

'use client'
import React from 'react';
import styled from 'styled-components';

import { FaStar, FaHeart, FaShare } from 'react-icons/fa';

const HeroContainer = styled.div`
  position: absolute;
  display: flex;  
  top: 50px;
  width: 100%;
  height: 400px;
  background: url('rental.jpeg');
  border: black solid 1px;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 15px;
  border: black solid 1px;
`;

const FloatingIcon = styled.div`
  border: red solid 1px;
  padding: 8px;
  border-radius: 10%;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <IconContainer>
        <FloatingIcon>
          <FaStar size={20} />
        </FloatingIcon>
        <FloatingIcon>
          <FaHeart size={20} />
        </FloatingIcon>
        <FloatingIcon>
          <FaShare size={20} />
        </FloatingIcon>
      </IconContainer>
    </HeroContainer>
  );
};

export default HeroSection;

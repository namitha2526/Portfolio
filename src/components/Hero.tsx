import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0f0f0f;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #999;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>Namitha R</Title>
      <SubTitle>AI/ML Enthusiast | Web Developer | CSE Student</SubTitle>
    </HeroSection>
  );
}

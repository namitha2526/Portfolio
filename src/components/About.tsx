import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  color: #000;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

export default function About() {
  return (
    <AboutSection>
      <AboutContent>
        <h2>About Me</h2>
        <p>
          I'm a Computer Science and Engineering student passionate about building accessible AI/ML solutions and real-world web applications. With a strong foundation in Python, C, and Java, I specialize in voice-based AI tools, data analysis, and full-stack development.
        </p>
        <p>
          I'm actively working on meaningful AI projects like LearnMate (personalized learning assistant), JarrvisAI (voice assistant), and predictive health models for Thalassemia detection.
        </p>
      </AboutContent>
    </AboutSection>
  );
}

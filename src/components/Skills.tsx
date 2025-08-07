import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: #f7f7f7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Skill = styled.div`
  padding: 1rem;
  background: white;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export default function Skills() {
  const techStack = [
    "Python", "Java", "C", "React", "HTML/CSS", "JavaScript", "Power BI", "SQL", "GitHub", "IBM Watson", "Flask", "RapidMiner"
  ];

  return (
    <SkillsSection>
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <Grid>
        {techStack.map(skill => <Skill key={skill}>{skill}</Skill>)}
      </Grid>
    </SkillsSection>
  );
}

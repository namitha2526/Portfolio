import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export default function Projects() {
  const projects = [
    {
      name: "LearnMate AI Agent",
      description: "Agentic AI for Personalized Course Pathways using IBM Watsonx foundation models.",
      link: "https://github.com/namitha2526/ibm_AI-Cloud_project"
    },
    {
      name: "JarrvisAI",
      description: "Voice-enabled desktop assistant for system control and task automation.",
      link: "https://github.com/namitha2526/JarrvisAI"
    },
    {
      name: "Thalassemia Predictor",
      description: "Predictive model for genetic disorder diagnosis in offspring.",
      link: "https://github.com/namitha2526/Thalassemia-Predictor"
    },
    {
      name: "AI Interview Chatbot",
      description: "AI-based chatbot that simulates interview experience and analyzes responses.",
      link: "https://github.com/namitha2526/AI-Interview-Bot"
    }
  ];

  return (
    <ProjectsSection>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      {projects.map(project => (
        <ProjectCard key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
}

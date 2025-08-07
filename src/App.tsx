import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

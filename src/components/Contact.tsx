import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #0f0f0f;
  color: #fff;
  text-align: center;
`;

const Link = styled.a`
  color: #66f;
  display: block;
  margin: 0.5rem 0;
`;

export default function Contact() {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <p>Email: <Link href="mailto:nnnamitha26@gmaiil.com">nnnamitha26@gmaiil.com</Link></p>
      <p>GitHub: <Link href="https://github.com/namitha2526" target="_blank">@namitha2526</Link></p>
      <p>LinkedIn: <Link href="https://www.linkedin.com/in/namitha-r-b52799310/" target="_blank">Namitha R</Link></p>
      <p>Portfolio: <Link href="https://github.com/namitha2526/Portfolio" target="_blank">View My Work</Link></p>
    </ContactSection>
  );
}

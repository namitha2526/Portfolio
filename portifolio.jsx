import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Sun, Moon, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={
      `${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-gray-800"} min-h-screen p-6`
    }>
      <div className="max-w-5xl mx-auto">
        {/* Toggle Dark Mode */}
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Header */}
        <header className="text-center py-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Namitha R
          </motion.h1>
          <p className="text-lg md:text-xl">AI/ML Enthusiast | Frontend Developer | CSE Student</p>
        </header>

        {/* About */}
        <section className="my-10">
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 text-lg">
              I'm a Computer Science and Engineering student passionate about AI/ML and Web Development. I build real-world applications that are accessible and voice-driven, especially for those with limited digital access. Currently focused on DSA, ML, and internship opportunities.
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <Card><CardContent className="p-4">Python</CardContent></Card>
            <Card><CardContent className="p-4">Java</CardContent></Card>
            <Card><CardContent className="p-4">C</CardContent></Card>
            <Card><CardContent className="p-4">React.js</CardContent></Card>
            <Card><CardContent className="p-4">Tailwind CSS</CardContent></Card>
            <Card><CardContent className="p-4">Scikit-learn</CardContent></Card>
            <Card><CardContent className="p-4">IBM Watson / IBM Cloud</CardContent></Card>
            <Card><CardContent className="p-4">GitHub</CardContent></Card>
            <Card><CardContent className="p-4">Data Structures & Algorithms (Java)</CardContent></Card>
          </div>
        </section>

        {/* Resume */}
        <section className="my-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Resume</h2>
          <a
            href="https://github.com/namitha2526/Portfolio/raw/main/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mx-auto flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
        </section>

        {/* Certificates */}
        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Certificates</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <a
                  href="https://your-certificate-link.com/ibm-ai-fundamentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  IBM AI Fundamentals – IBM SkillsBuild
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <a
                  href="https://your-certificate-link.com/google-cloud-basics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google Cloud Essentials – Arcade Facilitator Labs
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-2xl transition duration-300">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">Predictive AI Model for Thalassemia</h3>
                <p className="text-sm mt-2">Machine learning model to predict thalassemia occurrence in offspring based on parental traits using classification algorithms.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition duration-300">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">JarrvisAI – Desktop Voice Assistant</h3>
                <p className="text-sm mt-2">A voice-based Python assistant that performs tasks like search, opening apps, and responding intelligently to commands.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition duration-300">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">AI Interview Chatbot</h3>
                <p className="text-sm mt-2">Interactive chatbot that mimics interview environments using dynamic Q&A flows, built with React frontend and logic-driven backend.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition duration-300">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">LearnMate – Agentic AI Course Planner</h3>
                <p className="text-sm mt-2">Smart AI tool to recommend personalized learning paths based on user goals and skills using NLP and IBM Cloud services.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Section */}
        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">My Blog</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <a
                  href="https://medium.com/@namitha2526/ai-in-healthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 underline"
                >
                  <FileText className="w-5 h-5" />
                  How AI is Transforming Healthcare – Medium
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <a
                  href="https://namithatech.substack.com/p/ml-career-tips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 underline"
                >
                  <FileText className="w-5 h-5" />
                  My Journey into Machine Learning – Substack
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="my-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/namitha2526" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/namitha-r-b52799310/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
            <a href="mailto:nnnamitha26@gmaiil.com">
              <Mail className="w-6 h-6 hover:text-red-500 transition" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm py-4 text-gray-600 dark:text-gray-300">
          © 2025 Namitha R. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

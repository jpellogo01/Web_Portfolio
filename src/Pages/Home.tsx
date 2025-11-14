import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
export const Home: React.FC = () => {
  return (
    <Box>
      {/* Display NavBar */}
      <NavBar />
      {/* Display Hero Section */}
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </Box>
  );
};

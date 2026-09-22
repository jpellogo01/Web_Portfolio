import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { GraphicDesignSection } from "../components/GraphicDesignSection";
export const Home: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <NavBar />
      <Box component="main">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <GraphicDesignSection />
        <ExperienceSection />
        <ContactSection />
      </Box>
    </Box>
  );
};

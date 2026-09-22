import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ArrowUpRight, Palette, Sparkles } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Java", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 85, category: "Programming Languages" },
  { name: "TypeScript", level: 80, category: "Programming Languages" },
  { name: "PHP", level: 70, category: "Programming Languages" },
  { name: "C++", level: 65, category: "Programming Languages" },
  { name: "VB.NET", level: 60, category: "Programming Languages" },

  // Frameworks & Libraries
  { name: "Spring Boot", level: 90, category: "Frameworks & Libraries" },
  { name: "ReactJS", level: 90, category: "Frameworks & Libraries" },
  { name: "React Native", level: 70, category: "Frameworks & Libraries" },
  { name: "Material UI", level: 80, category: "Frameworks & Libraries" },
  { name: "Bootstrap (Basic)", level: 70, category: "Frameworks & Libraries" },

  // Web Technologies
  { name: "HTML5", level: 90, category: "Web Technologies" },
  { name: "CSS3", level: 85, category: "Web Technologies" },
  { name: "RESTful APIs", level: 80, category: "Web Technologies" },

  // Databases
  { name: "MySQL", level: 80, category: "Databases" },
  { name: "PostgreSQL", level: 60, category: "Databases" },

  // Tools & Platforms
  { name: "Git/GitHub", level: 85, category: "Tools & Platforms" },
  { name: "Docker", level: 65, category: "Tools & Platforms" },
  { name: "VS Code", level: 95, category: "Tools & Platforms" },
  { name: "Figma", level: 75, category: "Tools & Platforms" },

  // Creative & AI Tools
  { name: "Graphic Design", level: 80, category: "Creative & AI Tools" },
  { name: "Canva", level: 85, category: "Creative & AI Tools" },
  { name: "Canva Desktop", level: 80, category: "Creative & AI Tools" },
  { name: "Basic Video Editing", level: 70, category: "Creative & AI Tools" },
  { name: "Claude AI", level: 80, category: "Creative & AI Tools" },
  {
    name: "AI-Assisted Workflow",
    level: 80,
    category: "Creative & AI Tools",
  },

  // Development Practices
  { name: "Agile (Scrum)", level: 80, category: "Development Practices" },
  { name: "Version Control", level: 85, category: "Development Practices" },
  {
    name: "Object Oriented Programming",
    level: 85,
    category: "Development Practices",
  },
  { name: "API Integration", level: 80, category: "Development Practices" },
];

const categories = [
  "all",
  "Programming Languages",
  "Frameworks & Libraries",
  "Web Technologies",
  "Databases",
  "Tools & Platforms",
  "Creative & AI Tools",
  "Development Practices",
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Creative & AI Tools");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <Box id="skills" sx={styles.container}>
      <Typography variant="h3" sx={styles.title}>
        Skills &amp;{" "}
        <Box component="span" sx={styles.highlight}>
          Tools
        </Box>
      </Typography>

      <Typography sx={styles.subtitle}>
        A practical mix of engineering foundations, visual craft, and modern
        creative tools.
      </Typography>

      <Box
        sx={styles.categoryContainer}
        role="tablist"
        aria-label="Skill categories"
      >
        {categories.map((category) => (
          <Button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            aria-label={`Show ${category} skills`}
            onClick={() => setActiveCategory(category)}
            sx={
              activeCategory === category
                ? styles.activeCategoryBtn
                : styles.categoryBtn
            }
          >
            {category}
          </Button>
        ))}
      </Box>

      <Box sx={styles.skillsGrid}>
        {filteredSkills.map((skill) => (
          <Box key={`${skill.category}-${skill.name}`} sx={styles.skillCard}>
            <Box sx={styles.skillIcon} aria-hidden="true">
              {skill.category === "Creative & AI Tools" ? (
                <Palette size={19} />
              ) : (
                <Sparkles size={19} />
              )}
            </Box>
            <Typography sx={styles.skillName}>{skill.name}</Typography>
            <Box sx={styles.skillMeta}>
              <Typography>{skill.category}</Typography>
              <ArrowUpRight size={16} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

// ------------------ Styles ------------------
const styles = {
  container: {
    py: 12,
    px: { xs: 2, sm: 4, md: 7 },
    bgcolor: "#122620",
    color: "#E5E5E5",
    backgroundImage: "linear-gradient(135deg, #122620 0%, #16332b 100%)",
  },
  title: {
    fontWeight: "bold",
    mb: { xs: 1.5, sm: 2 },
    textAlign: "center",
    color: "#D6AD60",
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
  },
  highlight: { color: "#B68D40" },
  subtitle: {
    color: "#BEBEBE",
    textAlign: "center",
    maxWidth: 560,
    mx: "auto",
    mb: { xs: 4, md: 6 },
    lineHeight: 1.7,
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: { xs: 1, sm: 1.5 },
    mb: { xs: 5, md: 7 },
  },
  categoryBtn: {
    textTransform: "capitalize",
    px: { xs: 1.5, sm: 2.5 },
    py: 1,
    minHeight: 44,
    borderRadius: "50px",
    bgcolor: "transparent",
    color: "#E5E5E5",
    borderColor: "#B68D40",
    border: "1px solid",
    "&:hover": { bgcolor: "rgba(214,173,96,0.2)" },
  },
  activeCategoryBtn: {
    textTransform: "capitalize",
    px: { xs: 1.5, sm: 2.5 },
    py: 1,
    borderRadius: "50px",
    bgcolor: "#D6AD60",
    color: "#1A202C",
    border: "1px solid #B68D40",
    "&:hover": { bgcolor: "#D6AD60" },
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3,1fr)" },
    gap: { xs: 2, sm: 2.5, md: 3 },
  },
  skillCard: {
    bgcolor: "rgba(30, 61, 52, 0.72)",
    p: { xs: 2, sm: 2.5, md: 3 },
    borderRadius: 2,
    border: "1px solid rgba(214, 173, 96, 0.3)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease, border-color 0.3s ease",
    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": { transform: "translateY(-4px)", borderColor: "#D6AD60" },
    },
  },
  skillIcon: { color: "#D6AD60", mb: 2 },
  skillName: {
    fontWeight: "bold",
    mb: 2,
    fontSize: { xs: "1rem", md: "1.1rem" },
  },
  skillMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#8FA99C",
    fontSize: "0.75rem",
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    mb: 1,
    "& .MuiLinearProgress-bar": { bgcolor: "#B68D40" },
  },
  skillLevel: { textAlign: "right", fontSize: "0.875rem", color: "#B68D40" },
};

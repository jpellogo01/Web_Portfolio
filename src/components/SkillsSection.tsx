import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

const skills = [
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
  "Development Practices",
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Frameworks & Libraries"
  );

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <Box id="skills" sx={styles.container}>
      <Typography variant="h3" sx={styles.title}>
        My Skills
      </Typography>

      <Box sx={styles.categoryContainer}>
        {categories.map((category) => (
          <Button
            key={category}
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
        {filteredSkills.map((skill, index) => (
          <Box key={index} sx={styles.skillCard}>
            <Typography sx={styles.skillName}>{skill.name}</Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={styles.progressBar}
            />
            <Typography sx={styles.skillLevel}>{skill.level}%</Typography>
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
    px: { xs: 3, md: 6 },
    bgcolor: "#122620",
    color: "#E5E5E5",
  },
  title: {
    fontWeight: "bold",
    mb: 8,
    textAlign: "center",
    color: "#D6AD60",
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 2,
    mb: 8,
  },
  categoryBtn: {
    textTransform: "capitalize",
    px: 3,
    py: 1,
    borderRadius: "50px",
    bgcolor: "transparent",
    color: "#E5E5E5",
    borderColor: "#B68D40",
    border: "1px solid",
    "&:hover": { bgcolor: "rgba(214,173,96,0.2)" },
  },
  activeCategoryBtn: {
    textTransform: "capitalize",
    px: 3,
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
    gap: 4,
  },
  skillCard: {
    bgcolor: "#122620",
    p: 3,
    borderRadius: 3,
    border: "1px solid #B68D40",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "translateY(-4px)" },
  },
  skillName: { fontWeight: "bold", mb: 1 },
  progressBar: {
    height: 10,
    borderRadius: 5,
    mb: 1,
    "& .MuiLinearProgress-bar": { bgcolor: "#B68D40" },
  },
  skillLevel: { textAlign: "right", fontSize: "0.875rem", color: "#B68D40" },
};

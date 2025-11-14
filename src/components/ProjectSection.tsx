import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1Image from "../assets/otpAPI.png";
import project2Image from "../assets/dlsauWebtube.png";
import project3Image from "../assets/biometricAttendance.png";
import project4Image from "../assets/project4.png";
import springbootRestApiImage from "../assets/springbootRestApi.png";
import animo from "../assets/animo.png";

const projects = [
  {
    id: 1,
    title: "OTP Verification System",
    description:
      "REST API built with Spring Boot for OTP generation, email delivery via Brevo, and verification. Backend-only demo.",
    image: project1Image,
    tags: ["Spring Boot", "Java", " REST API", "Brevo"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/jpellogo01/OTP-Service-and-Verification/tree/master/site/src/main/java/com/youthwise/site",
  },
  {
    id: 2,
    title: "DLSAU Webtube",
    description:
      "Full-stack media website using Spring Boot (backend) and React (frontend), featuring OpenAI integration and sentiment-based comment moderation.",
    image: project2Image,
    tags: ["Spring Boot", "React", "OpenAI", "Full-Stack"],
    demoUrl: "https://dlsauwebtube.com/",
    githubUrl: "https://github.com/jpellogo01/WEBTUBE_FULLSTACK",
  },
  {
    id: 3,
    title: "Biometric CSV Attendance System",
    description:
      "A full-stack attendance system for small businesses that uploads fingerprint logs, calculates working hours, detects duplicates, and generates payroll reports.",
    image: project3Image,
    tags: ["PHP", "MySQL", "Bootstrap CSS"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/jpellogo01/biometric-csv-attendance/tree/main",
  },
  {
    id: 4,
    title: "Attendance-Logger System",
    description:
      "A web-based attendance system for schools where students log time-in/out using their School ID. Admins can manage records, view logs, and generate reports. Built with PHP, MySQL, JavaScript, and Bootstrap.",
    image: project4Image,
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/jpellogo01/DLSAU-AttendanceLogger",
  },
  {
    id: 5,
    title: "Spring Boot REST API Demo",
    description:
      "A demo of CRUD operations using Spring Boot. Backend-focused RESTful API without a frontend interface, showcasing secure and structured API endpoints.",
    image: springbootRestApiImage,
    tags: ["Spring Boot", "REST API", "Java"],
    demoUrl: "#",
    githubUrl: "https://github.com/jpellogo01/Springboot-REST_API",
  },
  {
    id: 6,
    title: "The Animo Website",
    description:
      "A promotional and informational website for De La Salle Araneta University, highlighting its programs, facilities, and campus life. Built with HTML, CSS, JavaScript, and Bootstrap for a responsive and engaging user experience.",
    image: animo,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://jpellogo01.github.io/DLSAUWebsite/",
    githubUrl: "https://github.com/jpellogo01/DLSAUWebsite",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <Box id="projects" sx={styles.container}>
      <Typography variant="h3" sx={styles.title}>
        Featured{" "}
        <Box component="span" sx={styles.highlight}>
          Projects
        </Box>
      </Typography>

      <Typography sx={styles.subtitle}>
        Here are some of my recent projects, showcasing both frontend and
        backend development, designed with performance, scalability, and
        usability in mind.
      </Typography>

      <Box sx={styles.grid}>
        {projects.map((project) => (
          <Box key={project.id} sx={styles.card}>
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={styles.image}
            />

            <Box sx={styles.cardContent}>
              <Box sx={styles.tags}>
                {project.tags.map((tag, i) => (
                  <Box key={i} sx={styles.tag}>
                    {tag}
                  </Box>
                ))}
              </Box>

              <Typography sx={styles.projectTitle}>{project.title}</Typography>
              <Typography sx={styles.projectDesc}>
                {project.description}
              </Typography>

              <Box sx={styles.links}>
                <Button
                  href={project.demoUrl}
                  target="_blank"
                  sx={styles.iconBtn}
                >
                  <ExternalLink size={20} />
                </Button>
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  sx={styles.iconBtn}
                >
                  <Github size={20} />
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={styles.cta}>
        <Button
          href="https://github.com/jpellogo01"
          target="_blank"
          endIcon={<ArrowRight size={16} />}
          sx={styles.ctaBtn}
        >
          Check My Github
        </Button>
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
    mb: 2,
    textAlign: "center",
  },
  highlight: {
    color: "#D6AD60",
  },
  subtitle: {
    textAlign: "center",
    mb: 10,
    color: "#B68D40",
    maxWidth: 600,
    mx: "auto",
  },
  grid: {
    display: "grid",
    gap: 4,
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(2,1fr)",
      lg: "repeat(3,1fr)",
    },
  },
  card: {
    bgcolor: "#122620",
    border: "1px solid #B68D40",
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "translateY(-4px)" },
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    transition: "transform 0.5s",
    "&:hover": { transform: "scale(1.05)" },
  },
  cardContent: { p: 3 },
  tags: { display: "flex", flexWrap: "wrap", gap: 1, mb: 2 },
  tag: {
    px: 2,
    py: 0.5,
    borderRadius: "50px",
    bgcolor: "#2D3748",
    color: "#D6AD60",
    fontSize: "0.75rem",
    fontWeight: 500,
  },
  projectTitle: { fontWeight: "bold", fontSize: "1.2rem", mb: 1 },
  projectDesc: { color: "#B68D40", fontSize: "0.875rem", mb: 2 },
  links: { display: "flex", gap: 2 },
  iconBtn: {
    minWidth: 0,
    p: 0,
    color: "#E5E5E5",
    "&:hover": { color: "#D6AD60" },
  },
  cta: { textAlign: "center", mt: 8 },
  ctaBtn: {
    bgcolor: "#D6AD60",
    color: "#1A202C",
    px: 4,
    py: 1.5,
    borderRadius: "50px",
    "&:hover": { bgcolor: "#B68D40" },
  },
};

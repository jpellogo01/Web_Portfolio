import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import profile from "../assets/profile.jpg";
import { keyframes } from "@mui/system";

// --- Animations ---
const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const HeroSection: React.FC = () => {
  return (
    <Box id="home" sx={styles.container}>
      {/* Background circles */}
      <Box sx={styles.circleOne} />
      <Box sx={styles.circleTwo} />
      
      {/* Hero Image */}
      <Box component="img" src={profile} alt="Hero" sx={styles.image} />

      {/* Text content */}
      <Box sx={styles.textContainer}>
        <Typography sx={styles.heading} variant="h2">
          Hi, I'm
        </Typography>
        <Typography sx={{ ...styles.heading, ...styles.name }} variant="h2">
          John Paul Pellogo
        </Typography>

        <Typography sx={styles.subtitle}>
          Welcome to my personal portfolio — a space where I showcase my
          projects, experiences, and skills. This website also demonstrates my
          front-end abilities using React and Material UI.
        </Typography>

        <Box
          component="button"
          sx={styles.ctaButton}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Work
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

// --- Styles ---
const styles = {
  container: {
    minHeight: "100vh",
    bgcolor: "#122620",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    py: 10,
    gap: 10,
    px: { xs: 3, sm: 6, md: 10 },
    position: "relative",
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    textAlign: { xs: "center", md: "left" },
    maxWidth: 700,
    position: "relative",
    zIndex: 2,
  },
  heading: {
    fontSize: { xs: "2.5rem", md: "4rem" },
    fontWeight: "bold",
    color: "#D6AD60",
    mb: 3,
    position: "relative",
    overflow: "visible",
    animation: `${slideUp} 1.3s ease forwards`,
  },
  name: {
    background: "linear-gradient(90deg, #D6AD60, #B68D40, #D6AD60)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `${shimmer} 3s linear infinite, ${slideUp} 1.3s ease forwards`,
  },
  subtitle: {
    fontSize: { xs: "1.2rem", md: "1.5rem" },
    color: "#B68D40",
    mb: 5,
    opacity: 0,
    animation: `${slideUp} 1.5s ease forwards`,
    animationDelay: "0.8s",
  },
  image: {
    flex: 1,
    width: { xs: "100%", md: "50%" },
    maxWidth: 400,
    borderRadius: "50px",
    objectFit: "cover",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    transition: "transform 0.5s ease, box-shadow 0.5s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
    },
  },
  ctaButton: {
    bgcolor: "#B68D40",
    color: "#122620",
    px: 4,
    py: 1.5,
    fontWeight: "bold",
    borderRadius: 2,
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    mt: 4,
    transition: "all 0.3s ease",
    animation: `${float} 3s ease-in-out infinite`,
    "&:hover": {
      bgcolor: "#D6AD60",
      color: "#122620",
      transform: "translateY(-3px) scale(1.05)",
    },
  },
  circleOne: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: "50%",
    bgcolor: "#B68D40",
    opacity: 0.1,
    top: "-50px",
    left: "-50px",
    animation: `${float} 6s ease-in-out infinite`,
  },
  circleTwo: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    bgcolor: "#D6AD60",
    opacity: 0.1,
    bottom: "-50px",
    right: "-50px",
    animation: `${float} 8s ease-in-out infinite`,
  },
};

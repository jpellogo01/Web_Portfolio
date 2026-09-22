import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import profile from "../assets/profile.jpg";
import { keyframes } from "@mui/system";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

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
      <Box sx={styles.textContainer}>
        <Chip
          icon={<Sparkles size={15} />}
          label="Available for creative collaboration"
          sx={styles.eyebrow}
        />
        <Typography sx={styles.kicker}>
          SOFTWARE DEVELOPER / GRAPHIC DESIGNER
        </Typography>
        <Typography sx={styles.heading} variant="h1">
          I build digital experiences with{" "}
          <Box component="span" sx={styles.name}>
            clarity and character.
          </Box>
        </Typography>

        <Typography sx={styles.subtitle}>
          I&apos;m John Paul Pellogo, a developer and visual designer focused on
          thoughtful interfaces, useful products, and expressive visual systems.
        </Typography>

        <Box sx={styles.actions}>
          <Button
            variant="contained"
            endIcon={<ArrowDown size={17} />}
            sx={styles.primaryButton}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore my work
          </Button>
          <Button
            variant="outlined"
            endIcon={<ArrowRight size={17} />}
            sx={styles.secondaryButton}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let&apos;s connect
          </Button>
        </Box>

        <Box sx={styles.stats}>
          <Box>
            <Typography sx={styles.statValue}>01</Typography>
            <Typography sx={styles.statLabel}>Developer mindset</Typography>
          </Box>
          <Box>
            <Typography sx={styles.statValue}>02</Typography>
            <Typography sx={styles.statLabel}>Design perspective</Typography>
          </Box>
          <Box>
            <Typography sx={styles.statValue}>∞</Typography>
            <Typography sx={styles.statLabel}>Curiosity</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.visual}>
        <Box sx={styles.visualFrame}>
          <Box
            component="img"
            src={profile}
            alt="John Paul Pellogo"
            sx={styles.image}
          />
        </Box>
        <Typography sx={styles.visualNote}>
          Based in the Philippines · Building for the web
        </Typography>
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
    gap: { xs: 7, md: 10 },
    px: { xs: 3, sm: 6, md: 12 },
    pt: { xs: 14, md: 18 },
    pb: { xs: 8, md: 12 },
    position: "relative",
    overflow: "hidden",
    backgroundImage:
      "radial-gradient(circle at 80% 22%, rgba(214, 173, 96, 0.14), transparent 30%), linear-gradient(135deg, #122620 0%, #19382f 100%)",
  },
  textContainer: {
    flex: 1,
    textAlign: { xs: "center", md: "left" },
    maxWidth: 760,
    position: "relative",
    zIndex: 2,
  },
  eyebrow: {
    bgcolor: "rgba(214, 173, 96, 0.12)",
    color: "#E7C982",
    border: "1px solid rgba(214, 173, 96, 0.32)",
    mb: 4,
    "& .MuiChip-icon": { color: "#D6AD60" },
  },
  kicker: {
    color: "#A8D5C1",
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    mb: 2,
  },
  heading: {
    fontSize: { xs: "2.8rem", sm: "3.6rem", md: "5.25rem" },
    lineHeight: 1.02,
    fontWeight: "bold",
    color: "#F4EBD0",
    mb: 3.5,
    position: "relative",
    overflow: "visible",
    animation: `${slideUp} 1.3s ease forwards`,
  },
  name: {
    background: "linear-gradient(90deg, #D6AD60, #F0D99B, #D6AD60)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `${shimmer} 3s linear infinite, ${slideUp} 1.3s ease forwards`,
  },
  subtitle: {
    fontSize: { xs: "1.05rem", md: "1.2rem" },
    lineHeight: 1.7,
    color: "#B8C8BF",
    maxWidth: 620,
    mb: 4,
    opacity: 0,
    animation: `${slideUp} 1.5s ease forwards`,
    animationDelay: "0.8s",
  },
  actions: { display: "flex", flexWrap: "wrap", gap: 2, mb: 7 },
  primaryButton: {
    bgcolor: "#D6AD60",
    color: "#122620",
    px: 2.5,
    py: 1.35,
    fontWeight: 700,
    borderRadius: 1,
    "&:hover": { bgcolor: "#F0D99B" },
  },
  secondaryButton: {
    borderColor: "rgba(244, 235, 208, 0.45)",
    color: "#F4EBD0",
    px: 2.5,
    py: 1.35,
    borderRadius: 1,
    "&:hover": { borderColor: "#D6AD60", bgcolor: "rgba(214, 173, 96, 0.08)" },
  },
  stats: {
    display: "flex",
    flexWrap: "wrap",
    gap: { xs: 3, md: 5 },
    borderTop: "1px solid rgba(244, 235, 208, 0.18)",
    pt: 3,
  },
  statValue: { color: "#D6AD60", fontSize: "1.4rem", fontWeight: 700 },
  statLabel: { color: "#8FA99C", fontSize: "0.78rem", mt: 0.5 },
  visual: { flex: 1, minWidth: { md: 360 }, position: "relative", zIndex: 2 },
  visualFrame: {
    p: 1.5,
    border: "1px solid rgba(214, 173, 96, 0.4)",
    borderRadius: 2,
    transform: "rotate(3deg)",
    background: "rgba(244, 235, 208, 0.06)",
  },
  image: {
    width: "100%",
    maxWidth: 440,
    aspectRatio: "4 / 5",
    display: "block",
    borderRadius: 1,
    objectFit: "cover",
    boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
    transition: "transform 0.5s ease, box-shadow 0.5s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  visualNote: {
    color: "#8FA99C",
    fontSize: "0.75rem",
    mt: 3,
    textAlign: "center",
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

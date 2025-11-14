import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

export const ExperienceSection: React.FC = () => {
  return (
    <Box id="experience" sx={styles.container}>
      <Typography variant="h3" align="center" sx={styles.title}>
        My{" "}
        <Box component="span" sx={styles.highlight}>
          Experience
        </Box>
      </Typography>

      <Typography align="center" sx={styles.subtitle}>
        Here’s what I learned and contributed during my internship as a Software
        Developer.
      </Typography>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={8} component="div">
          <Paper sx={styles.card}>
            <Typography variant="h5" sx={styles.position}>
              Internship — Software Developer
            </Typography>
            <Typography sx={styles.duration}>
              September – December 2025
            </Typography>

            <Box sx={styles.details}>
              <Typography sx={styles.detailItem}>
                • Exposed to React Native while primarily working on web
                development.
              </Typography>
              <Typography sx={styles.detailItem}>
                • Developed client landing pages, registration forms, and login
                flows.
              </Typography>
              <Typography sx={styles.detailItem}>
                • Learned API integration following Figma mockups from the UI/UX
                team.
              </Typography>
              <Typography sx={styles.detailItem}>
                • Practiced standard code committing conventions, merge
                requests, and version control using Git and GitLab.
              </Typography>
              <Typography sx={styles.detailItem}>
                • Developed projects using React.js, TypeScript, and Material
                UI.
              </Typography>
              <Typography sx={styles.detailItem}>
                • Participated in Daily Standup (DSU) meetings within Scrum and
                Agile framework practices.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// ----------------- Styles -----------------
const styles = {
  container: {
    bgcolor: "#122620",
    color: "#E5E5E5",
    py: { xs: 8, md: 12 },
    px: { xs: 3, sm: 6, md: 10 },
    minHeight: "80vh",
  },
  title: {
    fontWeight: "bold",
    mb: 2,
    color: "#D6AD60",
  },
  highlight: {
    color: "#B68D40",
  },
  subtitle: {
    color: "#BEBEBE",
    maxWidth: 600,
    mx: "auto",
    mb: 6,
  },
  card: {
    p: { xs: 3, md: 5 },
    bgcolor: "#1E3D34",
    borderRadius: 3,
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  },
  position: {
    fontWeight: "bold",
    fontSize: { xs: "1.4rem", md: "1.8rem" },
    mb: 1,
    color: "#D6AD60",
  },
  duration: {
    color: "#BEBEBE",
    mb: 3,
    fontStyle: "italic",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
  detailItem: {
    fontSize: { xs: "1rem", md: "1.1rem" },
    color: "#E5E5E5",
    lineHeight: 1.6,
  },
};

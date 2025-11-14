import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={styles.code}>
        404
      </Typography>
      <Typography variant="h4" sx={styles.message}>
        Page Not Found
      </Typography>
      <Typography sx={styles.subtitle}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        sx={styles.button}
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Box>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    bgcolor: "#122620",
    color: "#E5E5E5",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
    px: 3,
    gap: 3,
  },
  code: {
    fontSize: { xs: "6rem", md: "10rem" },
    fontWeight: "bold",
    color: "#D6AD60",
  },
  message: {
    fontSize: { xs: "2rem", md: "3rem" },
    fontWeight: "bold",
    color: "#B68D40",
  },
  subtitle: {
    color: "#BEBEBE",
    maxWidth: 400,
    mb: 2,
  },
  button: {
    bgcolor: "#B68D40",
    color: "#122620",
    fontWeight: "bold",
    "&:hover": { bgcolor: "#D6AD60" },
  },
};

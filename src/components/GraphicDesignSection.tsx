import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import maffle from "../assets/maffle.jpg";
import maru from "../assets/maru.jpg";
import moto from "../assets/moto.jpg";
interface DesignSample {
  id: number;
  title: string;
  caption: string;
  image: string;
}
const designSamples: DesignSample[] = [
  {
    id: 1,
    title: "Coffee Brand Promotional Design",
    caption:
      "Promotional visual featuring coffee products, menu highlights, and brand elements for a coffee shop campaign.",
    image: maffle,
  },
  {
    id: 2,
    title: "Maru Coffee Design",
    caption:
      "Promotional social media graphic showcasing a signature coffee drink with product details and campaign branding.",
    image: maru,
  },
  {
    id: 3,
    title: "Automotive Promotional Design",
    caption:
      "Product-focused promotional layout highlighting a custom motorcycle accessory with specifications and brand identity.",
    image: moto,
  },
];

export const GraphicDesignSection: React.FC = () => {
  return (
    <Box id="graphic-design" sx={styles.container}>
      <Typography variant="h3" sx={styles.title}>
        Graphic Design{" "}
        <Box component="span" sx={styles.highlight}>
          Samples
        </Box>
      </Typography>
      <Typography sx={styles.subtitle}>
        A few things I've built — real projects I've worked on, from first idea
        to finished product.
      </Typography>

      <Box sx={styles.grid}>
        {designSamples.map((sample) => (
          <Box key={sample.id} sx={styles.card}>
            <Box
              component="img"
              src={sample.image}
              alt={sample.title}
              sx={styles.placeholder}
            />
            <Box sx={styles.content}>
              <Typography sx={styles.sampleTitle}>{sample.title}</Typography>
              <Typography sx={styles.caption}>{sample.caption}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    py: { xs: 8, sm: 10, md: 12 },
    px: { xs: 2, sm: 4, md: 7 },
    bgcolor: "#F4EBD0",
    color: "#122620",
    backgroundImage:
      "linear-gradient(rgba(18, 38, 32, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 38, 32, 0.045) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    mb: { xs: 1.5, md: 2 },
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
  },
  highlight: { color: "#B68D40" },
  subtitle: {
    textAlign: "center",
    color: "#52635A",
    maxWidth: 560,
    mx: "auto",
    mb: { xs: 5, md: 7 },
    lineHeight: 1.7,
    fontSize: { xs: "0.95rem", sm: "1rem" },
  },
  grid: {
    display: "grid",
    gap: { xs: 2.5, md: 3 },
    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
    maxWidth: 1200,
    mx: "auto",
  },
  card: {
    bgcolor: "#FFF9EC",
    border: "1px solid rgba(18, 38, 32, 0.14)",
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: "0 12px 28px rgba(18, 38, 32, 0.12)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 18px 36px rgba(18, 38, 32, 0.18)",
      },
    },
  },
  placeholder: {
    aspectRatio: "4 / 3",
    width: "100%",
    display: "block",
    objectFit: "cover",
  },
  content: {
    p: { xs: 2, sm: 2.5, md: 3 },
  },
  sampleTitle: {
    fontWeight: "bold",
    fontSize: { xs: "1rem", md: "1.15rem" },
    mb: 1,
  },
  caption: {
    color: "#52635A",
    lineHeight: 1.6,
  },
};

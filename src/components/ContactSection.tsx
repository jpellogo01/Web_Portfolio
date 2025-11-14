import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Send,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent! Thank you for your message.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Box id="contact" sx={styles.container}>
      {/* Left (Map) */}
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.555895171646!2d121.01534577474087!3d14.681126575100839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6cedde3bd75%3A0xd0c9f35055df35da!2sThe%20Avenue%20Residences!5e0!3m2!1sen!2sph!4v1762782432087!5m2!1sen!2sph"
        loading="lazy"
        allowFullScreen
        sx={styles.map}
      />

      {/* Right (Text + Form) */}
      <Box sx={styles.textContainer}>
        <Typography variant="h3" sx={styles.heading}>
          Get In{" "}
          <Box component="span" sx={styles.highlight}>
            Touch
          </Box>
        </Typography>

        <Typography sx={styles.subtitle}>
          Have a project in mind or want to collaborate? Let’s connect and
          create something meaningful together.
        </Typography>

        <Box sx={styles.infoBox}>
          <Box sx={styles.infoItem}>
            <Mail size={20} />
            <Typography sx={styles.infoText}>jpellogo01@gmail.com</Typography>
          </Box>

          <Box sx={styles.infoItem}>
            <Phone size={20} />
            <Typography sx={styles.infoText}>+63 991 557 8274</Typography>
          </Box>

          <Box sx={styles.infoItem}>
            <MapPin size={20} />
            <Typography sx={styles.infoText}>Manila, Philippines</Typography>
          </Box>
        </Box>

        <Box sx={styles.socialIcons}>
          {[
            {
              Icon: Linkedin,
              url: "https://www.linkedin.com/in/john-paul-pellogo-41b6691b1/",
            },
            { Icon: Github, url: "https://github.com/jpellogo01" },
            { Icon: Instagram, url: "https://www.instagram.com/react_jp/" },
            { Icon: Twitter, url: "https://twitter.com/yourusername" },
          ].map(({ Icon, url }, i) => (
            <IconButton
              key={i}
              sx={styles.socialButton}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={20} />
            </IconButton>
          ))}
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
          <TextField label="Name" fullWidth required sx={styles.textField} />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            sx={styles.textField}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            required
            sx={styles.textField}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={styles.button}
            endIcon={<Send size={18} />}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// 🎨 Centralized Styles
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
  },
  map: {
    flex: 1,
    width: { xs: "auto", md: "auto" },
    height: { xs: 300, md: 400 },
    border: 0,
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  },
  textContainer: {
    flex: 1,
    maxWidth: 500,
    textAlign: { xs: "center", md: "left" },
  },
  heading: {
    fontWeight: "bold",
    mb: 3,
    fontSize: { xs: "2.5rem", md: "3.5rem" },
    color: "#D6AD60",
  },
  highlight: {
    color: "#B68D40",
  },
  subtitle: {
    color: "#BEBEBE",
    mb: 4,
    fontSize: { xs: "1.1rem", md: "1.25rem" },
  },
  infoBox: {
    mb: 3,
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "flex-start" },
    mb: 1.5,
  },
  infoText: {
    ml: 2,
    color: "#E5E5E5",
  },
  socialIcons: {
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" },
    gap: 2,
    mb: 4,
  },
  socialButton: {
    color: "#D6AD60",
    border: "1px solid #B68D40",
    "&:hover": {
      bgcolor: "#B68D40",
      color: "#122620",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    bgcolor: "#1E3D34",
    p: { xs: 3, md: 4 },
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      color: "#E5E5E5",
      "& fieldset": { borderColor: "#B68D40" },
      "&:hover fieldset": { borderColor: "#D6AD60" },
    },
    "& .MuiInputLabel-root": { color: "#BEBEBE" },
  },
  button: {
    bgcolor: "#B68D40",
    color: "#122620",
    fontWeight: "bold",
    "&:hover": {
      bgcolor: "#D6AD60",
    },
  },
};

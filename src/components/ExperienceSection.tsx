import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { BriefcaseBusiness, CalendarDays, Check } from "lucide-react";

interface ExperienceItem {
  role: string;
  company?: string;
  duration: string;
  current?: boolean;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Associate Application Developer",
    company: "Britana Solutions Inc.",
    duration: "February 2026 – Present",
    current: true,
    points: [
      "Contributed to the development and maintenance of business applications for company projects.",
      "Built and maintained user interfaces and reusable frontend components using Vue.js, TypeScript, Vite, Vuetify, and Tailwind CSS.",
      "Worked on inventory, transactions, employee management, authentication, and other business workflows.",
      "Integrated frontend features with backend APIs and handled application data and state.",
      "Collaborated through Git branches, commits, pull requests, and code reviews in a Spring Boot and MySQL environment.",
      "Participated in debugging, testing, issue fixing, and improving existing functionality with AI-assisted development tools.",
    ],
  },
  {
    role: "Internship — Software Developer",
    duration: "September – December 2025",
    points: [
      "Exposed to React Native while primarily working on web development.",
      "Developed client landing pages, registration forms, and login flows.",
      "Learned API integration following Figma mockups from the UI/UX team.",
      "Practiced standard code committing conventions, merge requests, and version control using Git and GitLab.",
      "Developed projects using React.js, TypeScript, and Material UI.",
      "Participated in Daily Standup (DSU) meetings within Scrum and Agile framework practices.",
    ],
  },
];

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

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
        A snapshot of the products, interfaces, and engineering work I have
        contributed to throughout my professional journey.
      </Typography>

      <Box
        component="ol"
        sx={styles.timeline}
        aria-label="Professional experience timeline"
      >
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.role}-${experience.duration}`}
            experience={experience}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
};

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Box
      component="li"
      ref={ref}
      sx={{
        ...styles.timelineItem,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <Box sx={styles.marker} aria-hidden="true">
        <BriefcaseBusiness size={18} strokeWidth={1.8} />
      </Box>
      <Paper
        component="article"
        sx={styles.card}
        aria-labelledby={`experience-role-${index}`}
      >
        <Box sx={styles.cardHeader}>
          <Box>
            <Typography
              id={`experience-role-${index}`}
              variant="h5"
              component="h3"
              sx={styles.position}
            >
              {experience.role}
            </Typography>
            {experience.company && (
              <Typography sx={styles.company}>{experience.company}</Typography>
            )}
          </Box>
          {experience.current && (
            <Typography sx={styles.current}>Current</Typography>
          )}
        </Box>
        <Typography sx={styles.duration}>
          <CalendarDays size={16} aria-hidden="true" />
          {experience.duration}
        </Typography>
        <Box component="ul" sx={styles.details}>
          {experience.points.map((point) => (
            <Typography component="li" key={point} sx={styles.detailItem}>
              <Check size={17} aria-hidden="true" />
              <Box component="span">{point}</Box>
            </Typography>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

// ----------------- Styles -----------------
const styles = {
  container: {
    bgcolor: "#122620",
    color: "#E5E5E5",
    py: { xs: 7, sm: 9, md: 12 },
    px: { xs: 2, sm: 4, md: 8 },
    minHeight: "80vh",
    backgroundImage: "linear-gradient(135deg, #122620 0%, #19382f 100%)",
  },
  title: {
    fontWeight: "bold",
    mb: { xs: 1.5, sm: 2 },
    color: "#D6AD60",
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
  },
  highlight: {
    color: "#B68D40",
  },
  subtitle: {
    color: "#BEBEBE",
    maxWidth: 650,
    mx: "auto",
    mb: { xs: 4, sm: 5, md: 6 },
    px: { xs: 1, sm: 0 },
    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
    lineHeight: 1.7,
  },
  timeline: {
    listStyle: "none",
    position: "relative",
    maxWidth: 900,
    mx: "auto",
    p: 0,
    m: 0,
    "&::before": {
      content: '""',
      position: "absolute",
      display: { xs: "none", md: "block" },
      top: 26,
      bottom: 26,
      left: 19,
      width: 1,
      bgcolor: "rgba(214, 173, 96, 0.42)",
    },
  },
  timelineItem: {
    position: "relative",
    pl: { xs: 0, md: 7 },
    mb: { xs: 3, sm: 4 },
    transition: "opacity 0.65s ease, transform 0.65s ease",
    "&:last-child": { mb: 0 },
  },
  marker: {
    position: "absolute",
    zIndex: 1,
    top: 24,
    display: { xs: "none", md: "flex" },
    left: 1,
    width: { xs: 32, md: 40 },
    height: { xs: 32, md: 40 },
    alignItems: "center",
    justifyContent: "center",
    color: "#122620",
    bgcolor: "#D6AD60",
    border: "4px solid #122620",
    borderRadius: "50%",
  },
  card: {
    p: { xs: 2.25, sm: 3, md: 4.5 },
    bgcolor: "#1E3D34",
    borderRadius: { xs: 1.5, sm: 2 },
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 14px 30px rgba(0,0,0,0.34)",
      },
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: { xs: 1, sm: 2 },
  },
  company: {
    color: "#D6AD60",
    fontWeight: 600,
    mt: { xs: 0.25, sm: 0.5 },
  },
  current: {
    px: { xs: 1.25, sm: 1.5 },
    py: 0.75,
    border: "1px solid #6E9F8D",
    borderRadius: 1,
    color: "#A8D5C1",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    flexShrink: 0,
  },
  position: {
    fontWeight: "bold",
    fontSize: { xs: "1.2rem", sm: "1.45rem", md: "1.8rem" },
    lineHeight: 1.2,
    mb: { xs: 0.75, sm: 1 },
    color: "#D6AD60",
  },
  duration: {
    color: "#BEBEBE",
    mb: { xs: 2.25, sm: 3 },
    fontStyle: "italic",
    display: "flex",
    alignItems: "center",
    gap: { xs: 0.75, sm: 1 },
    fontSize: { xs: "0.9rem", sm: "0.95rem" },
  },
  details: {
    display: "grid",
    gap: { xs: 1.25, sm: 1.5 },
    pl: 0,
    my: 0,
    listStyle: "none",
  },
  detailItem: {
    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
    color: "#D5DDD8",
    lineHeight: { xs: 1.7, sm: 1.65, md: 1.6 },
    display: "flex",
    alignItems: "flex-start",
    gap: 1.25,
    "& svg": { flexShrink: 0, color: "#D6AD60", mt: "0.3rem" },
  },
};

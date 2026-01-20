import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const steps = [
  {
    title: "Choose Your Service",
    description:
      "Select the TV or streaming package that best fits your entertainment needs.",
    icon: <TvIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Professional Setup",
    description:
      "Our technicians handle installation and configuration for a seamless experience.",
    icon: <SettingsInputAntennaIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Enjoy Live & On-Demand",
    description:
      "Access high-quality live TV and on-demand content anytime, anywhere.",
    icon: <LiveTvIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Get reliable assistance whenever you need help with your service.",
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
  },
];

const HowItWorks: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 10,
        px: isSmallScreen ? 2 : 6,
        color: "#e3f2fd",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/assets/tv-studio.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(13, 71, 161, 0.9) 0%, rgba(13, 71, 161, 0.75) 60%, rgba(13, 71, 161, 0.9) 100%)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
          }}
        >
          How DDTV Works
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "rgba(255, 255, 255, 0.75)",
            maxWidth: 600,
            mx: "auto",
            mb: 6,
          }}
        >
          Simple, reliable, and designed to deliver premium TV entertainment.
        </Typography>

        <Stack
          direction={isSmallScreen ? "column" : "row"}
          spacing={isSmallScreen ? 4 : 6}
          alignItems="flex-start"
          justifyContent="center"
        >
          {steps.map((step, i) => (
            <Stack
              key={i}
              spacing={2}
              sx={{
                backgroundColor: activeStep === i ? "#ff9800" : "#1e3a8a",
                p: 3,
                borderRadius: 2,
                flex: 1,
                minWidth: 220,
                transition: "all 0.3s ease",
                boxShadow:
                  activeStep === i
                    ? "0 6px 24px rgba(0,0,0,0.35)"
                    : "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  color: activeStep === i ? "#ff9800" : "#1e3a8a",
                  mb: 1,
                }}
              >
                {step.icon}
              </Box>

              <Typography variant="h6" fontWeight={700} color="#fff">
                {step.title}
              </Typography>

              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                {step.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorks;

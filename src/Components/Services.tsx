import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";

import logo from "../assets/DDTVLogo.png"; // Use your DDTV LLC logo
import backgroundImg from "../assets/tvbackground2.jpg"; // TV-themed background
import { Link } from "react-router-dom";

const services = [
  "Expert TV repair services for LED, LCD, OLED, and Smart TVs.",
  "Professional TV installation and wall mounting for homes and offices.",
  "Screen replacement for cracked or damaged TVs with quick turnaround.",
  "Smart TV setup including streaming services, apps, and Wi-Fi configuration.",
  "Home theater setup for immersive cinematic experiences.",
  "Preventive maintenance to keep your TV and entertainment systems in top shape.",
];

const Services: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 8,
        px: isSmallScreen ? 2 : 6,
        color: "#e3f2fd",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(13, 71, 161, 0.85)", // Blue overlay
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Reliable TV Services You Can Trust — Repair, Installation, and Home Setup
          </Typography>

          <Button
            component={Link}
            to="Get-your-Quote"
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#42a5f5",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: 2,
              px: 4,
              py: 1.5,
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1e88e5",
              },
            }}
          >
            Book a Service →
          </Button>

          <Stack spacing={4} sx={{ borderLeft: "3px solid #42a5f5", pl: 3 }}>
            {services.map((service, index) => (
              <Box key={index} sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#42a5f5",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "-29px",
                    top: "6px",
                  }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  {service}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Right Section - Logo */}
        <Box
          component="img"
          src={logo}
          alt="DDTV LLC Logo"
          sx={{
            flex: 1,
            maxWidth: "300px",
            width: "100%",
            borderRadius: 2,
            border: "3px solid #42a5f5",
            padding: 2,
            backgroundColor: "#ffffff",
          }}
        />
      </Box>
    </Box>
  );
};

export default Services;

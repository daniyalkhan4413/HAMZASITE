import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import backgroundImage from "../assets/trackingphoto.jpg";
import { Link } from "react-router-dom";

const HomeHero: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        textAlign: isSmallScreen ? "center" : "left",
        overflow: "hidden",
        px: isSmallScreen ? 2 : 4,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.65) 60%, rgba(10,25,47,0.3) 100%)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.1rem", md: "3.75rem" },
            lineHeight: 1.15,
            maxWidth: 720,
            mb: 3,
          }}
        >
          Flexible TV & Streaming Plans —
          <br />
          Built for Every Lifestyle
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 620,
            fontSize: { xs: "1rem", md: "1.15rem" },
            color: "rgba(255,255,255,0.8)",
            mb: 4,
          }}
        >
          Choose from affordable DDTV plans featuring live TV, on-demand
          content, and reliable service — no compromises, just entertainment
          your way.
        </Typography>

        <Button
          component={Link}
          to="/services"
          variant="contained"
          sx={{
            backgroundColor: "#ff9800",
            color: "#0a192f",
            fontWeight: 800,
            fontSize: "1rem",
            px: 5,
            py: 1.6,
            borderRadius: "10px",
            textTransform: "none",
            boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            "&:hover": {
              backgroundColor: "#fb8c00",
            },
          }}
        >
          View Plans →
        </Button>
      </Container>
    </Box>
  );
};

export default HomeHero;

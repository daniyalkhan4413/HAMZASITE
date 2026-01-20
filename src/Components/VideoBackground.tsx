import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import tvBackground from "../assets/tvBackground.jpg"; // TV-themed background image

const HomeHero: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${tvBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: { xs: 4, md: 12 },
        paddingRight: 4,
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(13, 71, 161, 0.6)", // semi-transparent overlay
          zIndex: 1,
        },
      }}
    >
      {/* Logo at the top-left */}
     
      {/* Content */}
      <Box sx={{ maxWidth: { xs: "100%", md: "600px" }, zIndex: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.5rem", md: "4rem" },
            color: "#ffffff",
            lineHeight: 1.2,
            mb: 3,
          }}
        >
          Expert TV Repair & Installation Services
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            color: "#e3f2fd",
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          From TV repairs to smart TV setups and home theater installations, DDTV LLC ensures your home entertainment works flawlessly.
        </Typography>

        <Button
          component={Link}
          to="Get-your-Quote"
          variant="contained"
          sx={{
            backgroundColor: "#42a5f5",
            color: "#fff",
            fontWeight: 700,
            fontSize: "1rem",
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
      </Box>
    </Box>
  );
};

export default HomeHero;

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const AboutUsPage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        marginTop:2,
        position: "relative",
        zIndex: 1,
        py: 12,
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
          backgroundColor: "rgba(13, 71, 161, 0.85)", // 🔵 Blue overlay
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3.5rem" },
            textAlign: "center",
            mb: 8,
            color: "#ffffff",
          }}
        >
          Built Around Better Entertainment
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Who We Are
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              DDTV LLC is a modern television and streaming service provider
              focused on delivering reliable, high-quality entertainment to
              homes and businesses.
              <br />
              <br />
              Our mission is to make TV simple, flexible, and enjoyable —
              without hidden costs or complicated setups.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              What We Believe
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              We believe entertainment should fit your lifestyle. That’s why we
              offer transparent pricing, flexible plans, and dependable
              service you can trust.
              <br />
              <br />
              From live TV to on-demand streaming, DDTV puts the customer first.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Our Approach
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Our technology is designed for smooth playback, minimal buffering,
              and consistent quality. Combined with responsive support, we
              ensure a frustration-free experience.
              <br />
              <br />
              No contracts. No confusion. Just reliable entertainment.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Why Choose DDTV
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Customers choose DDTV LLC for clarity, flexibility, and peace of
              mind. Whether at home or at work, we deliver TV services that
              perform when it matters most.
              <br />
              <br />
              With DDTV, you don’t just watch TV — you enjoy it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;

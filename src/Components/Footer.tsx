import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Twitter, Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import logoImage from "../assets/DDTVLogo.png";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0d47a1",
        color: "#ffffff",
        py: 8,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Section: Logo and Contact Info */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4} alignItems="flex-start">
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                 component="img"
    src={logoImage}
    alt="Company Logo"
    sx={{
      width: "100%",
      maxWidth: "650px",
      minWidth: "220px",
      objectFit: "contain",
      borderRadius: "20px",
      filter: "invert(1) hue-rotate(200deg) saturate(2)",
      outlineOffset: "8px",
      display: "block",
                  }}
                />
                
              </Stack>

              {/* Contact Info */}
              <Stack spacing={1}>
                <Typography variant="body2">
                  Address: 1833 Cheddar Loop 
Austin TX 78728, USA
                </Typography>
                <Typography variant="body2">Phone: (512) 999-0716
</Typography>
                <Typography variant="body2">
                  Email: ddtvllc@gmail.com

                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Section: Quick Links + Social */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              {/* First Column */}
              <Grid item xs={6} sm={4}>
                <Stack spacing={1}>
              
                </Stack>
              </Grid>

              {/* Second Column */}
              <Grid item xs={6} sm={4}>
                <Stack spacing={1}>
               
                </Stack>
              </Grid>

              {/* Third Column */}
              <Grid item xs={12} sm={4}>
                <Stack spacing={1}>
               
                
                  
                </Stack>
              </Grid>
            </Grid>

            {/* Social Icons */}
            <Stack direction="row" spacing={2} mt={4}>
              {[Twitter, Facebook, LinkedIn, Instagram].map((Icon, i) => (
                <IconButton
                  key={i}
                  href="#"
                  sx={{
                    color: "#ffffff",
                    "&:hover": { color: "#42a5f5" },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

        <Box textAlign="center" mt={2}>
          <Typography variant="caption" sx={{ color: "#b0bec5" }}>
            &copy; {new Date().getFullYear()} DDTV LLC. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

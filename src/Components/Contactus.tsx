import React from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Container,
  Stack,
  Link,
} from "@mui/material";
import backgroundImage from "../assets/contactus.jpg";

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        py: 16,
        px: isSmall ? 2 : 6,
        minHeight: "100vh",
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
          backgroundColor: "rgba(13, 71, 161, 0.55)", // 🔵 Blue overlay
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            {/* Header */}
            <Typography
              variant="subtitle1"
              sx={{
                color: "#26c6da",
                fontWeight: 700,
                mb: 1,
                textAlign: "center",
              }}
            >
              Get In Touch
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#ffffff",
                mb: 3,
                textAlign: "center",
              }}
            >
              Contact DDTV LLC
            </Typography>

            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "#d0eaf5",
                lineHeight: 1.8,
                mb: 6,
                textAlign: "center",
              }}
            >
              Have a question about our TV plans or need support? Reach out using
              the information below — we’re here to help.
            </Typography>

            {/* Contact Info Card */}
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 2,
                p: 4,
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.35)",
              }}
            >
              <Stack spacing={4}>
                {/* Location */}
                <Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    📍 Location
                  </Typography>
                  <Link
                    href="https://maps.google.com/?q=4820+Greenridge+Ct+Fairfield+CA+94534"
                    target="_blank"
                    underline="hover"
                    sx={{
                      fontSize: "1.15rem",
                      color: "#1976d2",
                      fontWeight: 500,
                    }}
                  >
                    PO BOX 1964, ROUND ROCK, TX, 78680-1964, USA
                  </Link>
                </Box>

                {/* Phone */}
                <Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    📞 Phone
                  </Typography>
                  <Link
                    href="tel:+15129990716"
                    underline="hover"
                    sx={{
                      fontSize: "1.15rem",
                      color: "#1976d2",
                      fontWeight: 500,
                    }}
                  >
                    (512) 999-0716
                  </Link>
                </Box>

                {/* Email */}
                <Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    ✉️ Email
                  </Typography>
                  <Link
                    href="mailto:info@ddtv.com"
                    underline="hover"
                    sx={{
                      fontSize: "1.15rem",
                      color: "#1976d2",
                      fontWeight: 500,
                    }}
                  >
                    info@ddtv.com
                  </Link>
                </Box>

                {/* Hours (Optional) */}
                <Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    ⏰ Support Hours
                  </Typography>
                  <Typography sx={{ fontSize: "1.05rem", color: "#555" }}>
                    Monday – Friday: 9:00 AM – 6:00 PM (PST)
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;

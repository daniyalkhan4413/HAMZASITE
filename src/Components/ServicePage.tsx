import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// MUI Icons
import TvIcon from "@mui/icons-material/Tv";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const services = [
  {
    title: "TV Repair Services",
    description:
      "We provide expert repair services for all types of TVs, including LED, LCD, OLED, and Smart TVs. Our certified technicians quickly diagnose and fix issues, ensuring your TV works like new.",
    icon: <TvIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
  {
    title: "TV Installation",
    description:
      "Professional TV mounting and installation for homes and offices. We ensure your TV is securely mounted, perfectly leveled, and all wiring is neatly managed for a clean setup.",
    icon: <SettingsRemoteIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
  {
    title: "Screen Replacement",
    description:
      "Cracked or broken TV screen? Our team offers fast and reliable screen replacement services to restore your TV’s display quality without compromising performance.",
    icon: <ScreenShareIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
  {
    title: "Smart TV Setup",
    description:
      "We help you get the most out of your Smart TV by connecting streaming services, apps, Wi-Fi, and other devices. Enjoy hassle-free entertainment in minutes.",
    icon: <SmartToyIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
  {
    title: "Home Theater Setup",
    description:
      "Transform your living room into a cinematic experience. We install and configure home theater systems, soundbars, surround sound, and all audio/video equipment.",
    icon: <HomeIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
  {
    title: "Preventive Maintenance",
    description:
      "Keep your TV and home entertainment systems in top condition with our routine maintenance services, including cleaning, firmware updates, and performance checks.",
    icon: <BuildIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
  {
    title: "Warranty & Service Plans",
    description:
      "We provide authorized warranty servicing and extended service plans for TVs, ensuring peace of mind and coverage for unexpected issues.",
    icon: <VerifiedUserIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
  {
    title: "Emergency TV Repair",
    description:
      "Urgent TV issues? Our emergency repair service ensures a technician is available quickly to get your TV back in action with minimal downtime.",
    icon: <FlashOnIcon sx={{ fontSize: 80, color: "#42a5f5" }} />,
  },
];

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 12,
        px: isSmallScreen ? 2 : 6,
        color: "#ffffff",
        backgroundColor: "#0d47a1",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3.5rem" },
            textAlign: "center",
            mb: 8,
            color: "#ffffff",
          }}
        >
          Our Services
        </Typography>

        {services.map((service, index) => (
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={isSmallScreen ? "column" : index % 2 === 0 ? "row" : "row-reverse"}
            key={index}
            sx={{ mb: 6 }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                }}
              >
                {service.icon}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                {service.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default ServicesSection;

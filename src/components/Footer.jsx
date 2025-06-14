import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#FAFAFA", py: 8 }}>
      <Container maxWidth="lg">
        {/* 5 columns in a row */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap", // fallback for small screens
          }}
        >
          {/* Column 1 - Uptown */}
          <Box sx={{ flex: 1, minWidth: 160 }}>
            <Typography variant="h6" mb={6} gutterBottom>
              Ayzenn Tech
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With Our Skills Put Together, You Get An Ensemble Capable Of Doing
              Anything And Everything Your Brand Needs.
            </Typography>
            {/* Social media icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="Twitter">
                <TwitterIcon color="secondary" />
              </IconButton>
              <IconButton aria-label="Facebook">
                <FacebookIcon color="secondary" />
              </IconButton>
              <IconButton aria-label="Instagram">
                <InstagramIcon color="secondary" />
              </IconButton>
            </Box>
          </Box>

          {/* Column 2 - Community */}
          <Box sx={{ flex: 1, minWidth: 160 }}>
            <Typography variant="h6" mb={6} gutterBottom>
              Community
            </Typography>
            <Link href="#" color="secondary" variant="body2" display="block">
              Search Properties
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              For Agents
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              Reviews
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              FAQs
            </Link>
          </Box>

          {/* Column 3 - About Us */}
          <Box sx={{ flex: 1, minWidth: 160 }}>
            <Typography variant="h6" mb={6} gutterBottom>
              About Us
            </Typography>
            <Link href="#" color="secondary" variant="body2" display="block">
              Our Story
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              Meet the team
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              Careers
            </Link>
          </Box>

          {/* Column 4 - Company */}
          <Box sx={{ flex: 1, minWidth: 160 }}>
            <Typography variant="h6" mb={6} gutterBottom>
              Company
            </Typography>
            <Link href="#" color="secondary" variant="body2" display="block">
              About Us
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              Press
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              Contact
            </Link>
            <Link href="#" color="secondary" variant="body2" display="block">
              Careers
            </Link>
          </Box>

          {/* Column 5 - Contact */}
          <Box sx={{ flex: 1, minWidth: 160 }}>
            <Typography variant="h6" mb={6} gutterBottom>
              Have a Question?
            </Typography>
            <Box
              sx={{
                mt: 1,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <LocationOnIcon color="secondary" />
              <Typography variant="body2">
                Mini comerical office No 5, Plaza No 13, Near hot & chilli
                Bahria Town Phase 7, Rawalpindi, 46000
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 1,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <PhoneIcon color="secondary" />
              <Typography variant="body2">+92 331 6670557</Typography>
            </Box>
            <Box
              sx={{
                mt: 1,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <EmailIcon color="secondary" />
              <Typography variant="body2">
                official@ayzenntechnologies.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Footer bottom */}
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Copyright &copy;2025 All rights reserved | Ayzenn Technologies
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

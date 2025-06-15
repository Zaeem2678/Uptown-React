import { Box, Typography, Container } from "@mui/material";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/Homepage Components/SearchBar";

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `
            linear-gradient(to bottom, #fff 0%, rgb(255, 255, 255, 0) 80%),
            url(https://preview.colorlib.com/theme/uptown/images/bg_1.jpg.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh",
          paddingBottom: "160px",
          overflow: "visible",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 50% 95%, 0% 90%)",
        }}
      >
        <Navbar />

        {/* Hero content */}
        <Box
          component="main"
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "32px", sm: "48px", md: "63px" },
                width: { xs: "100%", sm: "90%", md: "580px" },
                color: "#000000",
                lineHeight: 1.1,
                fontWeight: 300,
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Transform Your <br />
              Vision with Next-Gen Tech Solutions
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                width: { xs: "100%", sm: "90%", md: "800px" },
              }}
            >
              Leading the Charge in AI, Web, Mobile, and Custom Solutions
            </Typography>

            <SearchBar />
          </Container>
        </Box>
      </Box>

      {/* The circle is placed outside the clipping box */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-30%", // circle is 5% above bottom of clipping
          transform: "translateX(-60%) translateY(50%)",

          left: "50%",
          width: "90px",
          height: "90px",
          backgroundColor: "#e91e63",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 12px rgb(233 30 99 / 0.3)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Animated arrow */}
        <Box
          sx={{
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "14px solid #ffffff",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-8px)",
              },
              "60%": {
                transform: "translateY(-4px)",
              },
            },
          }}
        />
      </Box>
    </>
  );
}

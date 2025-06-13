import { Box, Typography, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Homepage Components/SearchBar";
export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `
      linear-gradient(to bottom, #fff 0%, rgb(255, 255, 255, 0) 80%),
      url(https://preview.colorlib.com/theme/uptown/images/bg_1.jpg.webp)`,
          backgroundSize: "cover",

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh", // This lets it fill the whole viewport height
        }}
      >
        <Navbar />
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
              color="#1A1A1B"
            >
              The Simplest <br />
              Way to Find Property
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                width: { xs: "100%", sm: "90%", md: "800px" },
              }}
              color="rgba(0, 0, 0, 0.8)"
            >
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </Typography>
            <SearchBar />
          </Container>
        </Box>
      </Box>
    </>
  );
}

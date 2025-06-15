import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";

export default function Pagenavigation({ title, subheading }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Box
        sx={{
          position: "relative",
          backgroundImage: `
          linear-gradient(to bottom, #fff 0%, rgb(255, 255, 255, 0) 40%),
          url(https://preview.colorlib.com/theme/uptown/images/bg_1.jpg.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          paddingBottom: "160px",
          overflow: "visible",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 50% 95%, 0% 90%)",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "18px",
              width: { xs: "100%", sm: "90%", md: "580px" },
              color: "rgba(0, 0, 0, 0.7);",
              textTransform: "uppercase",
              lineHeight: 1.1,

              fontFamily: "'Lato', sans-serif",
            }}
          >
            Home{">   "}
            {subheading}
            {">"}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#000000",
              fontSize: "66px",
              width: { xs: "100%", sm: "90%", md: "800px" },
              mt: 2,
            }}
          >
            {title}
          </Typography>
        </Container>
      </Box>
    </>
  );
}

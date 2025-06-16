import { Box, Typography, Container, Button } from "@mui/material";
import Pagenavigation from "../components/pagenav/PageNavigation";
import HeadingWithLines from "../components/Homepage Components/HeadingWithLines";

const projects = [
  {
    title: "ToneSync AI",
    image: "https://www.ayzenntechnologies.com/img/Tonesync.png",
  },
  {
    title: "MedVox AI",
    image: "https://www.ayzenntechnologies.com/img/medvox.png",
  },
  {
    title: "Chatzyr - Global Chat",
    image: "https://www.ayzenntechnologies.com/img/Chatzyr.png",
  },
  {
    title: "Shakeel Corporation",
    image: "https://www.ayzenntechnologies.com/img/ShakeelCorporation.png",
  },
  {
    title: "Dealer Auctions UK",
    image: "https://www.ayzenntechnologies.com/img/dealerauction.png",
  },
  {
    title: "Shelf: App Curator",
    image: "https://www.ayzenntechnologies.com/img/ShelfApp.PNG",
  },
];

export default function Projects() {
  return (
    <>
      <Pagenavigation title="Projects" subheading={"projects"} />
      <Box sx={{ py: 12, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box textAlign="center" mb={6}>
            <HeadingWithLines>Our Projects</HeadingWithLines>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
              Recently Completed Projects
            </Typography>
          </Box>

          {/* Filters */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              component="span"
              sx={{
                color: "#FBA504",
                fontWeight: "bold",
                mr: 3,
                cursor: "pointer",
                borderBottom: "2px solid #FBA504",
              }}
            >
              All
            </Typography>
            <Typography
              component="span"
              sx={{ mx: 3, color: "#333", cursor: "pointer" }}
            >
              Web Applications
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#333", cursor: "pointer" }}
            >
              Mobile Applications
            </Typography>
          </Box>

          {/* Project Cards - Services style grid */}
          <Container
            maxWidth="lg"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 7,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {projects.map((project, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "30px",
                  bgcolor: "#F6F4F9",
                  borderRadius: "4px",
                  boxShadow: 1,
                  gap: "20px",
                  width: "100%",
                  maxWidth: "600px",
                  mx: "auto",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                  height: "100%",
                  textAlign: "left",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                  src={project.image}
                  alt={project.title}
                />
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="initial"
                  sx={{ mt: 1 }}
                >
                  {project.title}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  See More
                </Button>
              </Box>
            ))}
          </Container>
        </Container>
      </Box>
    </>
  );
}

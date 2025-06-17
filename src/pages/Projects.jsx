import { Box, Typography, Container } from "@mui/material";
import Pagenavigation from "../components/pagenav/PageNavigation";
import HeadingWithLines from "../components/Homepage Components/HeadingWithLines";
import ProjectsComponent from "../components/ProjectsComponent";

export default function Projects() {
  return (
    <>
      <Pagenavigation title="Projects" subheading={"projects"} />
      <Box sx={{ py: 3, bgcolor: "#fff", mb: 10 }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box textAlign="center" mb={6}>
            <HeadingWithLines>Our Projects</HeadingWithLines>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
              Recently Completed Projects
            </Typography>
          </Box>
          <ProjectsComponent />
        </Container>
      </Box>
    </>
  );
}

import { Box, Container, Typography } from "@mui/material";
import HeadingWithLines from "../../components/Homepage Components/HeadingWithLines";
import ProjectsComponent from "../ProjectsComponent";

export default function ServicesComponent() {
  return (
    <Box
      sx={{
        marginX: { md: "60px", xs: "20px" },
        marginBottom: 20,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <HeadingWithLines>Our Services</HeadingWithLines>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "12px", sm: "16px", md: "17px" },
            width: { xs: "100%", sm: "90%", md: "580px" },
            color: "#4F4F4F",
            lineHeight: 1.1,
            textAlign: "center",
            fontWeight: 300,
            fontFamily: " sans-serif",
          }}
        >
          We possess a diverse range of skills, including web development,
          mobile app development, AI/ML development, UI/UX design, and digital
          marketing.
        </Typography>
      </Container>

      <Box
        sx={{
          mb: 11,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {[
          {
            logo: "https://cdn-icons-png.flaticon.com/512/14596/14596998.png",
            heading: "Web App Development",
            description:
              "We offer full-stack web development services for businesses of all sizes...",
          },
          {
            logo: "https://media.istockphoto.com/id/1423550966/vector/profit-rounded-lines-icon.jpg?s=612x612&w=0&k=20&c=_KFEK2PUIlquKGVUYQ18I2rO6xQ3ieFDEx-xHpXRLTI=",
            heading: "Mobile App Development",
            description:
              "Our mobile app development services help businesses create high-performance apps...",
          },
          {
            logo: "https://static.vecteezy.com/system/resources/previews/047/567/824/non_2x/suggestion-icon-logo-sign-outline-vector.jpg",
            heading: "AI Development",
            description:
              "Share your business challenges and ideas, and we will create digital solutions...",
          },
          {
            logo: "https://cdn-icons-png.flaticon.com/512/5272/5272442.png",
            heading: "Management Systems",
            description:
              "We create management systems to simplify your business operations...",
          },
        ].map((item, index) => {
          const hoverColors = ["#4CAF50", "#F44336", "#2196F3", "#FF9800"]; // green, red, blue, orange

          return (
            <Box
              key={index}
              sx={{
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: hoverColors[index % hoverColors.length],
                  color: "white",
                  transform: "translateY(-5px)",
                  boxShadow: 3,
                },
                "&:hover .bubble": {
                  opacity: 1,
                  transform: "scale(1.5)",
                },
              }}
            >
              <Box
                className="bubble"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  opacity: 0,
                  transform: "scale(0)",
                  transition: "all 0.5s ease",
                  zIndex: 1,
                }}
              />
              {/* Bottom Left Bubble */}
              <Box
                className="bubble"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  opacity: 0,
                  transform: "scale(0)",
                  transition: "all 0.5s ease",
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src={item.logo}
                alt={`${item.heading} logo`}
                sx={{ width: 100, height: 100, mb: 2, margin: "0 auto" }}
              />
              <Typography
                sx={{ mb: "10px", fontWeight: "bold" }}
                variant="h6"
                component="h2"
              >
                {item.heading}
              </Typography>
              <Typography color="#4F4F4F" variant="body2">
                {item.description}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <Box id="projects"></Box>
          <HeadingWithLines>Our Projects</HeadingWithLines>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "26px" },
              width: { xs: "100%", sm: "90%", md: "580px" },
              color: "#000000",
              lineHeight: 1.1,
              fontWeight: 500,
              fontFamily: "'Lato', sans-serif",
            }}
          >
            Recently Completed Projects
          </Typography>
        </Container>
        <ProjectsComponent />
      </Box>
    </Box>
  );
}

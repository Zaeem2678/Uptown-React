import HeadingWithLines from "../../components/Homepage Components/HeadingWithLines";
import { Box, Container, Typography, Paper } from "@mui/material";
import WorkflowExtend from "./WorkflowExtend";

export default function Workflow() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginX: { md: "60px", xs: "0px" },
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
          zIndex: 1,
          marginBottom: "50px",
        }}
      >
        {/* left side box */}
        <Box
          sx={{
            bgcolor: "#000000",
            height: { md: "850px", xs: "1400px" },
            padding: 4,
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "90px",
              textAlign: "center",
            }}
          >
            <HeadingWithLines
              sx={{
                color: "#fff",
              }}
            >
              Work flow
            </HeadingWithLines>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", sm: "36px", md: "39px" },
                width: { xs: "100%", sm: "90%", md: "580px" },
                color: "#fff",
                lineHeight: 1.1,
                fontWeight: 500,
                fontFamily: "'Lato', sans-serif",
              }}
            >
              How it works
            </Typography>
          </Container>
          <Box
            sx={{
              textAlign: "center",
              padding: "20px",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
            }}
          >
            {[
              {
                step: "01",
                title: "Analyze Your Requirements",
                description:
                  "We start by understanding your business goals, identifying your key challenges, and analyzing your technical needs.",
              },
              {
                step: "02",
                title: "Design Your Solution",
                description:
                  "Using our expertise, we craft a tailored solution architecture that best fits your company's unique operations.",
              },
              {
                step: "03",
                title: "Develop and Implement",
                description:
                  "Our team brings your solution to life with clean code, scalable technologies, and rigorous testing.",
              },
              {
                step: "04",
                title: "Launch and Support",
                description:
                  "Once deployed, we provide ongoing support and maintenance, ensuring your platform runs smoothly and evolves alongside your growing business.",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#E86ED0",
                    borderRadius: "50%",
                    width: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "70px",
                    color: "#fff",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  {item.step}
                </Box>
                <Typography
                  sx={{
                    mb: "10px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                  variant="h6"
                  component="h2"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#BCBCBC">
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {/* right side image */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Box>
            <img
              style={{ objectFit: "cover", height: "850px" }}
              src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <WorkflowExtend />
    </>
  );
}

import { Box, Container, Typography } from "@mui/material";
import HeadingWithLines from "../../components/Homepage Components/HeadingWithLines";
import ProjectsComponent from "../ProjectsComponent";

export default function ServicesComponent() {
  return (
    <Box
      sx={{
        marginX: { md: "60px", xs: "40px" },
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
            // there is a comment
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
              "We offer full-stack web development services for businesses of all sizes. Our solutions cover everything from engaging designs to smooth deployment. With our expertise, we build visually appealing and user-friendly websites. These enhance your brand's online presence and promote growth. Let us turn your vision into reality with our all-in-one web development services.",
          },
          {
            logo: "https://media.istockphoto.com/id/1423550966/vector/profit-rounded-lines-icon.jpg?s=612x612&w=0&k=20&c=_KFEK2PUIlquKGVUYQ18I2rO6xQ3ieFDEx-xHpXRLTI=",
            heading: "Mobile App Development",
            description:
              "Our mobile app development services help businesses create high-performance apps for Android. We focus on user-centric experiences and seamless interfaces that engage users. Whether you need a customer app or an internal tool, we ensure your mobile solution fits your needs. From concept to launch, we offer complete services that guarantee functionality.",
          },
          {
            logo: "https://static.vecteezy.com/system/resources/previews/047/567/824/non_2x/suggestion-icon-logo-sign-outline-vector.jpg",
            heading: "AI Development",
            description:
              "Share your business challenges and ideas, and we will create digital solutions. We aim to understand your needs and provide tailored solutions that improve your processes and boost success. Trust us to turn your concepts into effective solutions that increase efficiency and keep you competitive in the fast-changing digital landscape. You will surpass your own expectations.",
          },
          {
            logo: "https://cdn-icons-png.flaticon.com/512/5272/5272442.png",
            heading: "Management Systems",
            description:
              "We create management systems to simplify your business operations, like in hospitals and banks. Our solutions manage inventory, staff, performance tracking, and reporting. They boost productivity, cut down manual tasks, and offer real-time insights. This helps your organization run smoothly and efficiently.",
          },
        ].map((item, index) => (
          <Box key={index} sx={{ p: 2, textAlign: "center" }}>
            <Box
              component="img"
              src={item.logo}
              alt={`${item.heading} logo`}
              sx={{ width: 100, height: 100, mb: 2, margin: "0 auto" }}
            ></Box>

            {/* Heading */}
            <Typography
              sx={{
                mb: "10px",
                fontWeight: "bold",
              }}
              variant="h6"
              component="h2"
            >
              {item.heading}
            </Typography>

            {/* Description */}
            <Typography color="#4F4F4F" variant="body2">
              {item.description}
            </Typography>
          </Box>
        ))}
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

import { Box, Container, Typography } from "@mui/material";
import HeadingWithLines from "../components/Homepage Components/HeadingWithLines";
import PropertyList from "../components/Homepage Components/PropertyList";

export default function Services() {
  return (
    <Box
      sx={{
        marginX: "60px",
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
            fontSize: { xs: "32px", sm: "36px", md: "39px" },
            width: { xs: "100%", sm: "90%", md: "580px" },
            color: "#000000",
            lineHeight: 1.1,
            fontWeight: 500,
            fontFamily: "'Lato', sans-serif",
          }}
        >
          The smartest way to buy a home
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
            heading: "No Downpayment",
            description:
              "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          },
          {
            logo: "https://media.istockphoto.com/id/1423550966/vector/profit-rounded-lines-icon.jpg?s=612x612&w=0&k=20&c=_KFEK2PUIlquKGVUYQ18I2rO6xQ3ieFDEx-xHpXRLTI=",
            heading: "All Cash Offer",
            description:
              "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          },
          {
            logo: "https://static.vecteezy.com/system/resources/previews/047/567/824/non_2x/suggestion-icon-logo-sign-outline-vector.jpg",
            heading: "Experts in Your Corner",
            description:
              "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          },
          {
            logo: "https://cdn-icons-png.flaticon.com/512/5272/5272442.png",
            heading: "Lokced in Pricing",
            description:
              "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
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
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "80px",
          textAlign: "center",
        }}
      >
        <HeadingWithLines>What we offer</HeadingWithLines>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px", sm: "36px", md: "39px" },
            width: { xs: "100%", sm: "90%", md: "580px" },
            color: "#000000",
            lineHeight: 1.1,
            fontWeight: 500,
            fontFamily: "'Lato', sans-serif",
          }}
        >
          Exclusive Offer For You
        </Typography>
      </Container>
      <PropertyList />
    </Box>
  );
}

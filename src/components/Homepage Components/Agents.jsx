import { Box, Container, Typography } from "@mui/material";
import HeadingWithLines from "../../components/Homepage Components/HeadingWithLines";
import TeamMemberList from "./TeamMemberList";

export default function Agents() {
  return (
    <Box
      sx={{
        marginX: { md: "110px", xs: "30px", marginBottom: "90px" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 7,
          textAlign: "center",
        }}
      >
        <HeadingWithLines>Our Team</HeadingWithLines>
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
          Our Team Members
        </Typography>
      </Container>
      <TeamMemberList />
    </Box>
  );
}

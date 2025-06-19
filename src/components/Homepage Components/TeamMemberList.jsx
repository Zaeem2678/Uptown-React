import { Box, Card, CardMedia, Typography, Paper } from "@mui/material";

const teamMembers = [
  {
    id: 1,
    image: "https://www.ayzenntechnologies.com/img/umair.jpg",
    name: "Umair Arshad",
    role: "CEO",
  },
  {
    id: 2,
    image: "https://www.ayzenntechnologies.com/img/tahir.jpg",
    name: "Tahir Saeed",
    role: "CTO",
  },
  {
    id: 3,
    image: "https://www.ayzenntechnologies.com/img/shairAli.jpg",
    name: "Shair Ali",
    role: "Project Manager",
  },
  {
    id: 4,
    image: "./shahbaz.jpeg",
    name: "Shahbaz Hanif",
    role: "Full Stack Developer",
  },
  {
    id: 5,
    image: "./basit.jpeg",
    name: "Basit Ali",
    role: "Full Stack Developer",
  },
  {
    id: 6,
    image: "./zaeem.jpeg",
    name: "Zaeem Hussain",
    role: "Front-End Developer",
  },
  // You can add more team members here
];

const TeamMemberCard = ({ member }) => (
  <Box
    position="relative"
    width="100%"
    sx={{
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: 1,
      },
    }}
  >
    <Card sx={{ borderRadius: "50%", overflow: "hidden", width: "100%" }}>
      <CardMedia
        component="img"
        image={member.image}
        alt={member.name}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: { md: "370px", xs: "690px" },
          aspectRatio: "1/1", // <- maintains a square box across all devices
        }}
      />
    </Card>

    <Paper
      elevation={3}
      sx={{
        p: 2,
        bgcolor: "#fff",
        borderRadius: 2,
        width: "70%",
        mx: "auto",
        transform: "translateY(-20px)", // <- move upward gracefully
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Typography variant="h6">{member.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {member.role}
      </Typography>
    </Paper>
  </Box>
);

const TeamMemberList = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(4, 1fr)", // 4 cards per row
        },
        gap: { xs: 10, md: 4 },
      }}
    >
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </Box>
  );
};

export default TeamMemberList;

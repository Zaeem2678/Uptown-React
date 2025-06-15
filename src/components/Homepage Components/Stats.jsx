import { Box, Typography } from "@mui/material";

export default function Stats() {
  return (
    <Box
      sx={{
        marginLeft: { md: "125px", xs: "30px" },
        marginBottom:15,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" },
        gap:{xs:6,md:0}
      }}
    >
      {[
        { number: "3,450", title: "Working", name: "Hours" },
        { number: "250", title: "Happy", name: "Clients" },
        { number: "15", title: "Awards", name: "Recieved" },
        { number: "347", title: "Completed", name: "Projects" },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Typography variant="h3" color="initial">
            {item.number}
          </Typography>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              top: "7px",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              fontSize={"17px"}
              color="rgba(0, 0, 0, 0.6)"
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              fontSize={"17px"}
              color="rgba(0, 0, 0, 0.6)"
            >
              {item.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

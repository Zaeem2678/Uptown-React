import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <Box
      ref={ref}
      sx={{
        marginLeft: { md: "125px", xs: "30px" },
        marginBottom: 15,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" },
        gap: { xs: 6, md: 0 },
      }}
    >
      {[
        { number: "3450", title: "Working", name: "Hours" },
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
            {inView ? (
              <CountUp
                start={0}
                end={item.number}
                duration={2.5}
                separator=","
              />
            ) : (
              0
            )}
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

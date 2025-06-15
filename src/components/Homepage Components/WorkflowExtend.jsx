import Stats from "./Stats";
import { Box,Typography, Paper } from "@mui/material";

export default function WorkflowExtend() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile
          marginLeft: { xs: 0, md: "50px" }, // remove left margin on mobile
          px: { md: 10 },
          py: 8,
          position: "relative", // needed for stacking on desktop
          gap: { xs: 4, md: 0 }, // spacing between items on mobile
          marginBottom: "0px",
        }}
      >
        {/* Base Image Card */}
        <Box
          sx={{
            width: { xs: "100%", md: "600px" },
            height: { xs: "300px", md: "550px" },
            flexShrink: 0,
            position: "relative",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Stacked Card"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* Paper Card */}
        <Paper
          elevation={6}
          sx={{
            boxShadow: { xs: "none", md: 2 },
            position: { xs: "static", md: "absolute" },
            top: { md: "50%" },
            left: { md: "60%" },
            transform: { md: "translate(-50%, -50%)" },
            width: { xs: "100%", md: "40%" },
            mt: { xs: 2, md: 0 }, // vertical gap on mobile
            p: 4,
            borderRadius: 0,
            backgroundColor: "#fff",
            zIndex: 2,
          }}
        >
          <Typography variant="h5" fontWeight={600} mb={2}>
            Transform your business with our comprehensive technology expertise.
          </Typography>
          <Typography variant="body1" fontSize={14} color="text.secondary">
            We combine innovation, creativity, and technical expertise to bring
            your ideas to life. Our team is passionate about delivering
            scalable, reliable, and custom software solutions that drive growth
            and empower your business for the future. From designing elegant
            user interfaces to developing complex enterprise applications, we’re
            here to help you navigate your digital transformation and achieve
            your goals. Let’s collaborate to turn your vision into a powerful,
            game-changing platform.
            <br />
            <br />
            With a deep understanding of industry trends and emerging
            technologies, we enable you to stay ahead of the competition and
            adapt to changing market demands. Our team strives to solve complex
            problems with innovative solutions, ensuring your business operates
            efficiently, securely, and at scale — today and in the future. We’re
            not just your technology provider; we’re your strategic partner on
            your path to ongoing success.
          </Typography>
        </Paper>
      </Box>
      <Stats />
    </>
  );
}

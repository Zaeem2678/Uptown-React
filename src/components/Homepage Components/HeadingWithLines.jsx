import { Box, Typography } from "@mui/material";

function HeadingWithLines({ children, sx = {} }) {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 1,
        color: "#EA7AD4",
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        justifyContent: "center",
        width: "100%", // make sure it stretches across its parent
        ...sx,
      }}
    >
      {/* Left line */}
      <Box
        sx={{ height: "2px", background: "#EA7AD4", mr: 2, width: "100px" }}
      />

      {/* Heading text */}
      <Typography variant="h6" fontSize={"18px"} component="h2">
        {children}
      </Typography>

      {/* Right line */}
      <Box
        sx={{ height: "2px", background: "#EA7AD4", ml: 2, width: "100px" }}
      />
    </Box>
  );
}

export default HeadingWithLines;

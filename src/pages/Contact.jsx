import PageNavigation from "../components/pagenav/PageNavigation";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <>
      <PageNavigation title="Contact Us" subheading="contact us" />

      {/* Contact Info Section */}
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { md: 7, xs: 1 },
            padding: 4,
          }}
        >
          {/* Address Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">Address:</Typography>
            <Typography color="text.secondary">
              198 West 21th Street, Suite 721
              <br />
              New York NY 10016
            </Typography>
          </Box>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              width: "1px",
              backgroundColor: "grey.400",
            }}
          />

          {/* Phone Section */}
          <Box sx={{ textAlign: "center" }}>
            {/* icon can go here*/}
            <Typography variant="h6">Phone:</Typography>
            <Typography color="text.secondary">+ 1235 2355 98</Typography>
          </Box>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: { md: 120, xs: "none" },
              width: "1px",
              backgroundColor: "grey.400",
            }}
          />

          {/* Email Section */}
          <Box sx={{ textAlign: "center" }}>
            {/* icon can go here*/}
            <Typography variant="h6">Email:</Typography>
            <Typography color="text.secondary">info@yoursite.com</Typography>
          </Box>
        </Box>

        {/* Contact Form Section */}
        <Typography
          sx={{ textAlign: "center", mt: 9, mb: 6, fontSize: "26px" }}
          variant="h6"
          color="#333333"
        >
          If you got any questions <br /> please do not hesitate to send us a
          message
        </Typography>

        <Box
          sx={{
            maxWidth: "850px",
            margin: "0 auto",
            marginBottom: 9,
            padding: 7,
            background: "#F8F9FA",
            borderRadius: 2,
          }}
        >
          {/* Name Field */}
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Email Field */}
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Subject Field */}
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Message Field */}
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={5}
          />

          {/* Send Button */}
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, bgcolor: "#E86ED0" }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </>
  );
}

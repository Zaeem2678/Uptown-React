import Hero from "../components/Homepage Components/Hero";
import { Box } from "@mui/material";
import Workflow from "../components/Homepage Components/Workflow";
import Testimonials from "../components/Homepage Components/Testimonials";
import Agents from "../components/Homepage Components/Agents";
import ServicesComponent from "../components/Homepage Components/ServicesComponent";

export default function Home() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Hero />
      <ServicesComponent />
      <Workflow />
      <Testimonials />
      <Agents />
    </Box>
  );
}

import PageNavigation from "../components/pagenav/PageNavigation";
import ServicesComponent from "../components/Homepage Components/ServicesComponent";
import Workflow from "../components/Homepage Components/Workflow";
import { Box } from "@mui/material";

export default function Services() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <PageNavigation title="Services" subheading="SErvices" />
      <ServicesComponent />
      <Workflow />
    </Box>
  );
}

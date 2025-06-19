import React, { Suspense } from "react";
import { Box } from "@mui/material";
import FadeInSection from "../components/wrapper/FadeInSection";

// Lazy-load components
const Hero = React.lazy(() => import("../components/Homepage Components/Hero"));
const ServicesComponent = React.lazy(() =>
  import("../components/Homepage Components/ServicesComponent")
);
const Workflow = React.lazy(() =>
  import("../components/Homepage Components/Workflow")
);
const Testimonials = React.lazy(() =>
  import("../components/Homepage Components/Testimonials")
);
const Agents = React.lazy(() =>
  import("../components/Homepage Components/Agents")
);

export default function Home() {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", padding: "2rem", color: "#000" }}>
          Loading sections...
        </div>
      }
    >
      <Box sx={{ overflowX: "hidden" }}>
        <Hero />

        <FadeInSection delay={0.2}>
          <ServicesComponent />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <Workflow />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <Testimonials />
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <Agents />
        </FadeInSection>
      </Box>
    </Suspense>
  );
}

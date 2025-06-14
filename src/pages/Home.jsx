import Hero from "../components/Homepage Components/Hero";
import Services from "./Services";
import Workflow from "../components/Homepage Components/Workflow";
import Testimonials from "../components/Homepage Components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Workflow />
      <Testimonials />
    </>
  );
}

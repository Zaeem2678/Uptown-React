import WorkflowExtend from "../components/Homepage Components/WorkflowExtend";
import PageNavigation from "../components/pagenav/PageNavigation";
import Testimonials from "../components/Homepage Components/Testimonials";

export default function About() {
  return (
    <>
      <PageNavigation title="About Us" subheading="about us" />
      <WorkflowExtend />
      <Testimonials />
    </>
  );
}

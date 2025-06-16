import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export default function FadeInSection({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <Box
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      sx={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </Box>
  );
}

import { Box, Container, Typography } from "@mui/material";
import HeadingWithLines from "../../components/Homepage Components/HeadingWithLines";
import { useRef, useEffect } from "react";

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      // Disable text selection
      document.body.style.userSelect = "none";
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("dragging");
      document.body.style.userSelect = "";
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("dragging");
      document.body.style.userSelect = "";
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    if (slider) {
      slider.addEventListener("mousedown", handleMouseDown);
      slider.addEventListener("mouseleave", handleMouseLeave);
      slider.addEventListener("mouseup", handleMouseUp);
      slider.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("mousedown", handleMouseDown);
        slider.removeEventListener("mouseleave", handleMouseLeave);
        slider.removeEventListener("mouseup", handleMouseUp);
        slider.removeEventListener("mousemove", handleMouseMove);
      }
      // Reset in case user released mouse outside window
      document.body.style.userSelect = "";
    };
  }, []);

  const testimonials = [
    {
      logo: "https://www.ayzenntechnologies.com/img/testimonial-1.jpg",
      heading: "Mr. Bilal Sr. Manager",
      description:
        "We engaged Ayzenn Technologies to develop an AI-based system for our quality assurance. They are highly professional, and their team is exceptionally skilled.",
      role: "Nayatel",
    },
    {
      logo: "https://www.ayzenntechnologies.com/img/testimonial-3.jpg",
      heading: "Jacob",
      description:
        "Partnering with Ayzenn Technologies, we successfully delivered several projects in South Korea, including work for the Korean government. Their expertise is remarkable.",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9g15s85WmTKLSjitkyevXySYGSgKZj6gJmA&s",
      heading: "Mohammad Hassan",
      description:
        "We've collaborated with Ayzenn Technologies on multiple projects. Their professionalism stands out, and their work on Rapid Engine was excellent."
              ,
      role: "Rapid Engine",
    },
    
    
  ];

  return (
    <Box sx={{ marginX: { md: "90px", xs: "30px" }, marginBottom: 15 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 7,
          textAlign: "center",
        }}
      >
        <HeadingWithLines>Testimonial</HeadingWithLines>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px", sm: "36px", md: "39px" },
            width: { xs: "100%", sm: "90%", md: "580px" },

            color: "#000000",
            lineHeight: 1.1,
            fontWeight: 500,
            fontFamily: "'Lato', sans-serif",
          }}
        >
          Happy Clients
        </Typography>
      </Container>

      <Box
        ref={scrollRef}
        sx={{
          mb: 11,
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          gap: 2,
          px: 1,
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          cursor: "grab",
          "&.dragging": {
            cursor: "grabbing",
          },
        }}
      >
        {testimonials.map((item, index) => (
          <Box
            key={index}
            sx={{
              scrollSnapAlign: "start",
              p: 4,
              textAlign: "left",
              minWidth: { xs: "85%", sm: "70%", md: "30%" },
              maxWidth: "350px",
              flexShrink: 0,
              boxShadow: 1,
              borderRadius: 2,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <Typography
              color="#4F4F4F"
              variant="body2"
              sx={{
                mb: 3,
                wordWrap: "break-word",
                display: "-webkit-box",

                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <img
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={item.logo}
                alt={item.heading}
              />
              <Box>
                <Typography variant="h5" fontSize={17} fontWeight="bold">
                  {item.heading}
                </Typography>
                <Typography variant="h5" fontSize={14} color="#CFCFCF">
                  {item.role}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

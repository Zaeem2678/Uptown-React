import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { useState } from "react";

const projects = [
  {
    title: "ToneSync AI",
    image: "https://www.ayzenntechnologies.com/img/Tonesync.png",
    description: "AI-powered music creation tool for artists and producers.",
  },
  {
    title: "MedVox AI",
    image: "https://www.ayzenntechnologies.com/img/medvox.png",
    description: "Virtual health assistant improving patient experience.",
  },
  {
    title: "Chatzyr - Global Chat",
    image: "https://www.ayzenntechnologies.com/img/Chatzyr.png",
    description: "Global chat platform for instant messaging and groups.",
  },
  {
    title: "Shakeel Corporation",
    image: "https://www.ayzenntechnologies.com/img/ShakeelCorporation.png",
    description: "Official business site for Shakeel Corporation.",
  },
  {
    title: "Dealer Auctions UK",
    image: "https://www.ayzenntechnologies.com/img/dealerauction.png",
    description: "Buy and sell vehicles via trusted UK auction houses.",
  },
  {
    title: "Shelf: App Curator",
    image: "https://www.ayzenntechnologies.com/img/ShelfApp.PNG",
    description: "Smart app recommendations tailored to your needs.",
  },
];

export default function ProjectsComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const cardsPerView = isMobile ? 1 : 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = projects.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <>
      {/* Filter Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography component="span" sx={{ color: "#FBA504", fontWeight: "bold", mr: 3, cursor: "pointer", borderBottom: "2px solid #FBA504" }}>All</Typography>
        <Typography component="span" sx={{ mx: 3, color: "#333", cursor: "pointer" }}>Web Applications</Typography>
        <Typography component="span" sx={{ color: "#333", cursor: "pointer" }}>Mobile Applications</Typography>
      </Box>

      {/* Slider Container */}
      <Box sx={{ position: "relative", width: "100%", maxWidth: "1200px", mx: "auto" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: { xs: -10, md: -50 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "rgba(251, 165, 4, 0.1)",
            color: "#FBA504",
            width: 50,
            height: 50,
            "&:hover": {
              bgcolor: "rgba(251, 165, 4, 0.2)",
            },
          }}
        >
          <Box
            component="svg"
            sx={{ width: 24, height: 24 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </Box>
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            right: { xs: -10, md: -50 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "rgba(251, 165, 4, 0.1)",
            color: "#FBA504",
            width: 50,
            height: 50,
            "&:hover": {
              bgcolor: "rgba(251, 165, 4, 0.2)",
            },
          }}
        >
          <Box
            component="svg"
            sx={{ width: 24, height: 24 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </Box>
        </IconButton>

        {/* Sliding Cards */}
        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              width: `${(projects.length * 100) / cardsPerView}%`,
              transform: `translateX(-${(currentIndex * 100) / projects.length}%)`,
            }}
          >
            {projects.map((project, idx) => (
              <Box
                key={idx}
                sx={{
                  width: `${100 / projects.length}%`,
                  px: 2,
                  flexShrink: 0,
                }}
              >
                <HoverCard project={project} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

function HoverCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (hoverTimeout) clearTimeout(hoverTimeout);
    const timeout = setTimeout(() => setHovered(true), 500);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        width: "100%",
        height: "320px",
        overflow: "hidden",
        borderRadius: "4px",
      }}
    >
      {/* Main Card */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 3,
          bgcolor: "#F6F4F9",
          borderRadius: "4px",
          gap: "10px",
          textAlign: "left",
          transition: "transform 0.5s ease, box-shadow 0.3s ease",
          transform: hovered ? "translateY(-50%)" : "translateY(0)",
          boxShadow: isHovering
            ? "0 8px 25px rgba(251, 165, 4, 0.4)"
            : "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
        <Typography variant="h6" fontWeight={700}>
          {project.title}
        </Typography>
      </Box>

      {/* Description Panel */}
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "transparent",
          borderRadius: "4px",
          p: 3,
          transition: "transform 0.5s ease",
          transform: hovered ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#333",
            fontWeight: 500,
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}

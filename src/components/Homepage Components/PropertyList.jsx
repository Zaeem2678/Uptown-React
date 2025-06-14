import {
  Box,
  Card,
  CardMedia,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "$3,050/mo",
    oldPrice: "$800,000",
    beds: 3,
    baths: 2,
    sqft: "1,878",
    title: "The Blue Sky Home",
    location: "Oakland",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHzjVje93AEMJSJIiH5IoPZuoklz8_0-upA&s",
    price: "$3,050/mo",
    oldPrice: "$800,000",
    beds: 3,
    baths: 2,
    sqft: "1,878",
    title: "The Blue Sky Home",
    location: "Oakland",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/564x/08/c7/9f/08c79f6713bcf8cea3d8d8bf3da748a6.jpg",
    price: "$3,050/mo",
    oldPrice: "$800,000",
    beds: 3,
    baths: 2,
    sqft: "1,878",
    title: "The Blue Sky Home",
    location: "Oakland",
  },
];

const PropertyCard = ({ property }) => (
  <Box position="relative" width="100%">
    <Card sx={{ borderRadius: 0, overflow: "hidden", width: "100%" }}>
      <CardMedia
        component="img"
        height="200"
        image={property.image}
        alt={property.title}
        sx={{ objectFit: "cover", width: "100%" }}
      />
    </Card>

    <Paper
      elevation={3}
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -100,
    
        p: 2,
        bgcolor: "#fff",
        borderRadius: 0,
         width: "70%",        // make it slightly narrower than the full card
    mx: "auto",          // centers it horizontally
      }}
    >
      <Box display="flex" alignItems="center" mb={1}>
        <Typography
          sx={{ textDecoration: "line-through", mr: 1 }}
          color="text.secondary"
          fontSize={14}
        >
          {property.oldPrice}
        </Typography>
        <Typography variant="h6">{property.price}</Typography>
        <Typography variant="body2" color="text.secondary" ml={0.5}>
          /mo
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={2} mb={1}>
        <Box display="flex" alignItems="center" gap={0.5}>
          <BedIcon fontSize="small" />
          <Typography>{property.beds}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={0.5}>
          <BathtubIcon fontSize="small" />
          <Typography>{property.baths}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={0.5}>
          <SquareFootIcon fontSize="small" />
          <Typography>{property.sqft} sqft</Typography>
        </Box>
      </Box>

      <Typography fontWeight={600}>{property.title}</Typography>
      <Box display="flex" alignItems="center" gap={0.5}>
        <LocationOnIcon fontSize="small" />
        <Typography variant="body2">{property.location}</Typography>
      </Box>

      <IconButton
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          bgcolor: "deeppink",
          color: "#fff",
          "&:hover": { bgcolor: "#d81b60" },
        }}
      >
        <LinkIcon />
      </IconButton>
    </Paper>
  </Box>
);

const PropertyList = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(3, 1fr)",
        },
        gap: { xs: 16, md: 4 },
        mb: 30,
      }}
    >
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </Box>
  );
};

export default PropertyList;

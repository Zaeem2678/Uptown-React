import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search location"
      sx={{ 
        width: '100%', 
        padding:'5px',
        maxWidth: 600,
        borderRadius: '50px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 14px rgb(0 0 0 / 0.1)', 
        '& fieldset': { border: 'none' },
        '& input': { paddingLeft: 3 },
      }}
      InputProps={{ 
        endAdornment: (
          <InputAdornment position="end">
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar;

import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({ value, onChange, placeholder = 'Search...' }) => (
  <TextField
    fullWidth
    variant="outlined"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    size="small"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchField;

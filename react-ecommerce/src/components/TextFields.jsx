import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function TextFields() {
  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Search for Products, brands and more " id="fullWidth" />
    </Box>
  );
}
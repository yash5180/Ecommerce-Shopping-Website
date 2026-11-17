import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [clothing, setClothing] = React.useState('');

  const handleChange = (event) => {
    setClothing(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Clothing</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={clothing}
        label="Products"
        onChange={handleChange}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={"Men"}>Men</MenuItem>
        <MenuItem value={"Women"}>Women</MenuItem>
        <MenuItem value={"Kids"}>Kids</MenuItem>
      </Select>
    </FormControl>
  );
}
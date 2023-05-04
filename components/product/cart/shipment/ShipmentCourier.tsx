import * as React from 'react';
import { Typography, Button, Box, FormControl, InputLabel, MenuItem } from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ShipmentCourier(){
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return(
        <>
            <Typography fontWeight="bold">Pilih Kurir</Typography>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" color="secondary">Kurir</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    color="secondary"
                    id="demo-simple-select"
                    value={age}
                    label="Kurir"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>JNE Ekonomi Rp. 10.000</MenuItem>
                    <MenuItem value={20}>JNE Reguler Rp. 12.000</MenuItem>
                    <MenuItem value={30}>Sicepat Reguler Rp. 12.000</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}
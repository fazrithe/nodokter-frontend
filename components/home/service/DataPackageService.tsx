import * as React from 'react';
import { Grid, Typography, TextField, Button, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DataPackageService(){
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return(
        <Grid container spacing={1} className="mt-2 ml-2 mb-2">
            <Grid item xs={8} sm={4}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <TextField type="number" size="small" color="secondary" variant="outlined" label="Nomor Telepon" />
            </FormControl>
            </Grid>
            <Grid item xs={8} sm={4}>
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                <InputLabel id="demo-select-small" color="secondary">Nominal</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    color="secondary"
                >
                    <MenuItem value={10}>5000 - Rp. 6000</MenuItem>
                    <MenuItem value={20}>10000 - Rp. 11.000</MenuItem>
                    <MenuItem value={30}>25.000 - Rp. 27.000</MenuItem>
                </Select>
                </FormControl>
            </Grid>
            <Grid item className="" xs={6} sm={3}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Button variant="contained" color="warning" className="">Beli</Button>
                </FormControl>
            </Grid>
        </Grid>
    );
}
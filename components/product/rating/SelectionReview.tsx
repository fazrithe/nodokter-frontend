import * as React from 'react';
import { Typography, Grid, InputLabel, MenuItem, FormControl, Rating, Avatar, Divider } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectionReview(){
    const [age, setAge] = React.useState('');
    const [rating, setRating] = React.useState<number | null>(4);
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return(
        <>
        <Grid container>
            <Grid item  xs={12} sm={8} paddingTop={3}>
            <Typography fontWeight="bold">ULASAN PILIHAN</Typography>
            </Grid>
            <Grid item  xs={12} sm={3}>
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                    <InputLabel id="demo-select-small" color="secondary">Urutkan</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            color="secondary"
                                    >
                            <MenuItem value={10}>Paling Sesuai</MenuItem>
                            <MenuItem value={20}>Ulasan</MenuItem>
                            <MenuItem value={30}>Terbaru</MenuItem>
                            <MenuItem value={40}>Harga Tertinggi</MenuItem>
                            <MenuItem value={50}>Harga Terendah</MenuItem>
                        </Select>
                    </FormControl>
            </Grid>
        </Grid>
        <Typography fontSize={12}>Menampilkan 10 dari 56 Ulasan</Typography>
        <Grid container paddingTop={2}>
            <Grid item xs={8} sm={12}>
                <Rating readOnly value={rating} />
                <Grid item xs={8} sm={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={2}>
                            <Avatar alt="NoDokter" src="/global/store.jpg" />
                        </Grid>
                        <Grid item xs={6} sm={4} className="mt-2">
                            <Typography>NoDokter</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography paddingTop={1}>Sangat bagus sekali</Typography>
            </Grid>
        </Grid>
        <Divider/>
        <Grid container paddingTop={2}>
            <Grid item xs={8} sm={12}>
                <Rating readOnly value={rating} />
                <Grid item xs={8} sm={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={2}>
                            <Avatar alt="NoDokter" src="/global/store.jpg" />
                        </Grid>
                        <Grid item xs={6} sm={4} className="mt-2">
                            <Typography>NoDokter</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography paddingTop={1}>Sangat bagus sekali</Typography>
            </Grid>
        </Grid>
        </>
    )
}
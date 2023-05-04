import * as React from 'react';
import WorkshopFilter from "@/components/workshop/WorkshopFilter"
import WorkshopList from "@/components/workshop/WorkshopList"
import { Container, Grid, Typography, InputLabel, FormControl, MenuItem, Link, Stack, Breadcrumbs } from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Workshop(){
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
            Home
        </Link>,
        <Typography key="3" color="text.primary">
            Apotik
        </Typography>
      ];
    return(
        <>
        <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        <Grid container className="mt-4">
            <Grid item xs={12} sm={2.5}>
                <WorkshopFilter/>
            </Grid>
            <Grid item xs={12} sm={9.5}>
            <Grid container>
                        <Grid item xs={12} sm={8} className="mt-3 ml-2">
                            <Typography>Menampilkan 2394316 produk untuk apotik (1 - 60 of 2394316)</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3.5}>
                            <Grid container>
                                <Grid>
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
                                    </Select>
                                 </FormControl>  
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className="mt-2 ml-2">
                        <WorkshopList/>
                    </Grid>
            </Grid>
        </Grid>
        </Container>
        </>
    )
}
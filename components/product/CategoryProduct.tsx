import * as React from 'react';
import { NextPage } from "next";
import { Breadcrumbs, 
    Container, 
    Link, 
    Typography, 
    Stack,
    Grid,
    Hidden,
    FormControl,
    InputLabel,
    MenuItem
   } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Filter from './category/Filter';
import CatProduct from './category/CatProduct';

function handleClick(event: React.SyntheticEvent) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


interface Props {
    cateogry:any;
}

const CategoryProduct: NextPage<Props> = (props) => {
    const {cateogry} = props;
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
        Home
        </Link>,
        <Typography key="3" color="text.primary">
            {cateogry}
        </Typography>,
      ];
    
    return(
        <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <Grid container className="mt-4">
                <Grid item xs={12} sm={2.5}>
                    <Filter/>
                </Grid>
                <Grid item xs={12} sm={9.5}>
                    <Grid container>
                        <Grid item xs={12} sm={8} className="mt-3 ml-2">
                            <Typography>Menampilkan 2394316 produk untuk {cateogry} (1 - 60 of 2394316)</Typography>
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
                                        <MenuItem value={30}>Terbaru</MenuItem>
                                        <MenuItem value={40}>Harga Tertinggi</MenuItem>
                                        <MenuItem value={50}>Harga Terendah</MenuItem>
                                    </Select>
                                 </FormControl>  
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className="mt-2 ml-2">
                        <CatProduct />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CategoryProduct;
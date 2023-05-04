import { Box, Button, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import TabDescription from '@/components/product/items/TabDescription'
import Store from './Store'
import { Place, LocalShipping } from "@mui/icons-material";

let labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

export default function Detail(){
    let value = 3.5;
    return(
        <>
        <Typography fontWeight="lg" variant="h6">Paracetamol</Typography>
        <Grid container spacing={1}>
            <Grid item xs={8} sm={3}>
                <Typography>Terjual 60 </Typography>
            </Grid>
            <Grid item xs={8} sm={7}>
            <Box
                sx={{
                    width: 350,
                    display: 'flex',
                    alignItems: 'center',
                }}
                >
                <Rating
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>{labels[value]} 36(Rating)</Box>
                </Box>
            </Grid>
            <Grid item xs={8} sm={2}>
                <Typography>Diskusi(4)</Typography>
            </Grid>
        </Grid>
        <Typography variant="h5" className="mt-1" fontWeight="bold">Rp. 151.800</Typography>
        <hr/>
        <Typography>Pilih Ukuran : Tablet</Typography>
        <Grid container>
            <Grid item>
                <Stack spacing={2} direction="row">
                <Button variant="outlined" color="secondary">Tablet</Button>
                <Button variant="outlined" color="secondary">Strip</Button>
                </Stack>
            </Grid>
        </Grid>
        <hr/>
        <Grid container>
            <Grid item>
                <TabDescription />
            </Grid>
        </Grid>
        <Grid container className="mt-2">
                <Store />
        </Grid>
        <Divider/>
        <Grid container>
            <Grid item>
                <Typography fontWeight="bold">Pengiriman:</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item>
                <Place />
            </Grid>
            <Grid item>
                <Typography>Dikirim dari</Typography>
            </Grid>
            <Grid item>
                <Typography fontWeight="bold">Jakarta Barat</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item>
                <LocalShipping />
            </Grid>
            <Grid item>
                <Typography>Ongkir Reguler 18 rb - 23 rb</Typography>
            </Grid>
        </Grid>
        </>    
    )
}
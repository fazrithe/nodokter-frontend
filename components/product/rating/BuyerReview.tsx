import { Typography, Grid } from "@mui/material";
import Star from "@mui/icons-material/Star";

export default function BuyserReview(){
    return(
        <>
        <Grid container paddingTop={3}>
            <Grid item>
                <Typography fontWeight="bold">ULASAN PEMBELI</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item>
                <Star style={{color:"#ffc400", fontSize:42}} />
            </Grid>
            <Grid item>
                <Typography variant="h2">4.2</Typography>
            </Grid>
            <Grid item paddingTop={4}>
                <Typography variant="h6">/5.0</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item>
                <Typography fontWeight="bold" fontSize={11}>98% pembeli merasa puas</Typography>
            </Grid>
        </Grid>
        </>
    )
}
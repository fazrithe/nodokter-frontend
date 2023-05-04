import { Grid, Paper, Hidden, Typography } from "@mui/material";
import { Apps, ReceiptLong, BuildCircle, Diversity3 } from "@mui/icons-material";

export default function ListService(){
    return(
        <>
         <Hidden only={['sm', 'lg']}>
            <Paper className="mt-4 mb-2">
                <Grid container padding={1} paddingLeft={1} spacing={1.5}>
                    <Grid item>
                        <Grid container>
                            <Grid item paddingLeft={3}> 
                                <Apps color="secondary"/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item> 
                                <Typography variant="caption">Lihat Semua</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item paddingLeft={3.5}> 
                                <ReceiptLong color="secondary"/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item> 
                                <Typography variant="caption">Topup & Tagihan</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item paddingLeft={1}> 
                                <BuildCircle color="secondary"/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item> 
                                <Typography variant="caption">Apotik</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item paddingLeft={2}> 
                                <Diversity3 color="secondary"/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item> 
                                <Typography variant="caption">Komunitas</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </Hidden>
        </>
    )
}
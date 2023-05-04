import { Card, Hidden, CardContent, Divider, Grid, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CartBuy(){
    return(
        <>
            <Hidden only="xs">
            <Card sx={{ minWidth: 355, position: "fixed" }}>
                <CardContent>
                    <Paper>
                        <Grid container padding={1}>
                            <Grid item xs={2} sm={1}>
                                <Typography color="secondary">%</Typography>
                            </Grid>
                            <Grid item xs={6} sm={8}>
                                <Typography color="secondary">Lebih hemat pakai promo</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <hr/>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6">Ringkasan Belanja</Typography>
                        </Grid>
                    </Grid>
                    <Grid container paddingTop={1}>
                        <Grid item xs={4} sm={8}>
                            <Typography>Total Harga (1 Brang)</Typography>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Typography>Rp. 151.800</Typography>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container>
                        <Grid item xs={4} sm={8}>
                            <Typography fontWeight="bold">Total Harga</Typography>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Typography fontWeight="bold">Rp. 151.800</Typography>
                        </Grid>
                    </Grid>
                    <Grid container paddingTop={2} paddingLeft={6}>
                        <Grid item xs={4} sm={8}>
                            <Link href="/cart/shipment">
                                <Button variant="contained" color="secondary" fullWidth>B e l i</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </Hidden>
        </>
    )
}
import { Card, Paper, Grid, Button, Typography, CardContent, FormGroup, FormControl, InputLabel, OutlinedInput, TextField } from "@mui/material";
import {FavoriteBorder, Chat, Share, Palette} from '@mui/icons-material'
import React, { useState } from "react";
import Link from "next/link";

export default function BuyProduct(){
    let [count, setCount] = useState(0)

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    return(
        <>
            <Card sx={{ minWidth: 345, position: "fixed" }}>
                <CardContent>    
                <Paper elevation={0}><Typography variant="h6" fontWeight="bold" color="secondary">Brand Pilihan</Typography></Paper>
                    <Typography fontWeight="bold">Atur jumlah & catatan</Typography>
                    <Grid container>
                        <Grid item>
                            <Grid container spacing={0} padding={1}>
                                <Grid item xs={7} sm={5}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={decrementCount}>
                                        <Typography fontWeight="bold">-</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={1} sm={2} padding={1}>
                                    <Typography fontWeight="bold" color="secondary">{count}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={incrementCount}>
                                        <Typography fontWeight="bold">+</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item alignContent="center" alignItems="center" paddingTop={1}>
                            <Typography fontWeight="bold">Stok: Sisa 4</Typography>
                        </Grid>
                    </Grid>
                    <TextField id="standard-basic" label="Catatan" color="secondary" variant="standard" />
                    <Grid container paddingTop={2}>
                        <Grid item xs={4} sm="auto">
                            <Typography>Subtotal</Typography>
                        </Grid>
                        <Grid item xs={4} sm="auto" paddingLeft={2}>
                            <Typography variant="h5" fontWeight="bold">Rp. 151.800</Typography>
                        </Grid>
                    </Grid>
                    <Grid container paddingTop={1} spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="secondary">+ Keranjang</Button>
                        </Grid>
                        <Grid item>
                            <Link href="/cart/shipment">
                                <Button variant="outlined" color="secondary">B e l i</Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className="mt-4" spacing={2}>
                        <Grid item sm={4}>
                            <Typography><Chat/>Chat</Typography>
                        </Grid>
                        <Grid item sm={5}>
                            <Typography><FavoriteBorder/>Wishlist</Typography>
                        </Grid>
                        <Grid item>
                            <Typography><Share/>Share</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
import * as React from 'react';
import { Button, Hidden, Paper, BottomNavigation, BottomNavigationAction, Typography } from "@mui/material"
import Link from "next/link"


export default function CartBuyMobile(){
    const [value, setValue] = React.useState(0);
    return(
        <>
        <Hidden only={['sm', 'lg']}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <Typography padding={2}>Total Harga</Typography>
            <Typography padding={2} fontWeight="bold">Rp. 151.800</Typography> 
            <Link href="/cart/shipment" className="mt-2">
                <Button variant="contained" color="secondary" className="ml-2">B e l i</Button>
            </Link>
        </BottomNavigation>
        </Paper>
        </Hidden>
        </>
    )
}
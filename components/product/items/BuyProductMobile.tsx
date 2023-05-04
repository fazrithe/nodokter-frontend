import * as React from 'react';
import { Button, Hidden, Paper, BottomNavigation, BottomNavigationAction, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import {FavoriteBorder, Chat, Share} from '@mui/icons-material'

export default function BuyProductMobile(){
    const router = useRouter();
    const [value, setValue] = React.useState(0);

    function shipment(){
        router.push({
            pathname: '/cart/shipment',
            query: { returnUrl: router.asPath }
        });
    }
    return(
        <>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <BottomNavigationAction color="inherit" icon={<Chat color="secondary"/>} />
            <Link href="/cart/shipment" className="mt-2">
                <Button variant="contained" color="secondary" className="ml-2">+ Keranjang</Button>
            </Link>
            <Link href="/cart/shipment" className="mt-2 mr-4">
                <Button variant="contained" color="secondary" fullWidth className="ml-2">B e l i</Button>
            </Link>
        </BottomNavigation>
        </Paper>
        </>
    )
}
import { Container, Grid } from "@mui/material"
import CartDetail from "@/components/product/cart/CartDetail"
import CartBuy from "@/components/product/cart/CartBuy"
import CartBuyMobile from "@/components/product/cart/CartBuyMobile"
import CartRecomProduct from "@/components/product/cart/CartRecomProduct"

export default function Cart(){
    return(
        <>
        <Container fixed>
        <Grid container paddingTop={2}>
            <Grid item xs={12} sm={8}>
                <CartDetail/>
                <Grid container paddingTop={2}>
                    <Grid item xs={12} sm={12}>
                        <CartRecomProduct/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8} sm={4}>
                <CartBuy/>
                <CartBuyMobile/>
            </Grid>
        </Grid>
        </Container>
        </>
    )
}
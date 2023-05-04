import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { Hidden } from "@mui/material";
import Image from "next/image";
import CategoryHome from "@/components/home/dashboard/CategoryHome";
import TabService from "@/components/home/dashboard/TabService";
import FlashSale from "@/components/home/dashboard/FlashSale";
import CardHome from "@/components/home/dashboard/CardHome";
import Products from "@/components/home/dashboard/Products";
import CarouselHome from "@/components/home/dashboard/CarouselHome";
import NavbarBottom from "@/components/home/NavbarBottom";
import PayReward from "@/components/home/pay/PayReward";
import ListService from "@/components/home/service/mobile/ListService";
import WorkshopHome from "@/components/home/dashboard/WorkshopHome";

const classes = {
  root: {
    flexGrow: 2
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "#b43fd4",
    fontFamily: "Roboto"
  },

  labelSale: {
    color: "#b43fd4"
  }
};
export default function Home() {
  return (
      <div>
        <Container fixed>
          <PayReward/>
          <ListService/>
          <CarouselHome/>
        <div style={classes.root}>
            <Grid container spacing={1} className="mt-4">
              {/*This item will be 12 units on extra small screens */}
              {/*But will be 6 units on small screens */}
              <CategoryHome />
              <Hidden only="xs">
              <Grid item xs={12} sm={5.9} className="ml-2 mt-4">
                <Paper className="mt-3">
                    <TabService />
                </Paper>
              </Grid>
              </Hidden>
              <Grid container spacing={1} className="mt-1">
                <FlashSale />
              </Grid>
              <Grid container spacing={1} className="mt-1">
                <WorkshopHome/>
              </Grid>
              <Grid container spacing={1} className="mt-4">
                <CardHome />
              </Grid>
              <Grid container spacing={1} className="mt-2">
                <Products />
              </Grid>
            </Grid>
          </div>
          <NavbarBottom/>
        </Container>
      </div>
  )
}

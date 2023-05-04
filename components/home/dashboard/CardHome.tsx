import { Grid, Card, CardContent, Typography } from "@mui/material"

const classes = {
    root: {
      flexGrow: 1
    },
    label: {
      padding: 20,
      textAlign: "center",
      color: "#ffffff",
      fontFamily: "Roboto"
    }
  };

export default function CardHome(){
  return(
    <>
        <Grid item xs={6} sm={3}>
            <Card style={{backgroundColor:"#7732a8"}}>
                <CardContent>
                    <Typography color="white" variant="h6">Special Discount</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card style={{backgroundColor:"#a8323e"}}>
                <CardContent>
                    <Typography color="white" variant="h6">Special Discount</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card style={{backgroundColor:"#a8323e"}}>
                <CardContent>
                    <Typography color="white" variant="h6">Special Discount</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card style={{backgroundColor:"#7732a8"}}>
                <CardContent>
                    <Typography color="white" variant="h6">Special Discount</Typography>
                </CardContent>
            </Card>
        </Grid>
   </>
  )
}
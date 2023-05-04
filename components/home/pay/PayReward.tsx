import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Hidden, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccountBalanceWallet, Stars } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent style={{backgroundColor:"#6d1b7b"}}>
        <Paper>
            <Grid container padding={2}>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <AccountBalanceWallet color="secondary" />
                        </Grid>
                        <Grid item>
                            Dompet
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight="bold">Rp. 100.000</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Stars color="secondary" />
                        </Grid>
                        <Grid item>
                            Reward
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight="bold">100 Poin</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </CardContent>
  </React.Fragment>
);

export default function PayReward() {
  return (
    <Hidden only={['sm', 'lg']}>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </Hidden>
  );
}
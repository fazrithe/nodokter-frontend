import * as React from 'react';
import { Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from '@mui/material/styles';

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  
export default function MenuCategories(){
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
  
    return(
        <>
            <Grid container padding={2} spacing={2}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                        <Typography sx={{ mt: 1, mb: 1 }} fontWeight="bold" component="div">
                            Cek Kesehatan
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                            {generate(
                                <ListItem>
                                <ListItemText
                                    primary="Item"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                </ListItem>,
                            )}
                            </List>
                        </Demo>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ mt: 1, mb: 1 }} fontWeight="bold" component="div">
                            Informasi Umum
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                            {generate(
                                <ListItem>
                                <ListItemText
                                    primary="Item"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                </ListItem>,
                            )}
                            </List>
                        </Demo>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ mt: 1, mb: 1 }} fontWeight="bold" component="div">
                            Apotik
                        </Typography>
                        <Demo>
                            <List dense={dense}>
                            {generate(
                                <ListItem>
                                <ListItemText
                                    primary="Item"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                </ListItem>,
                            )}
                            </List>
                        </Demo>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
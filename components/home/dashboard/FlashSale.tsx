import * as React from 'react';
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { color } from "@mui/system";
import Link from 'next/link';
import { productService } from '../../../services/product.service';

const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "#b43fd4",
      fontFamily: "Roboto"
    }
  };

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  
}
const printedBooks = [
  { name: 'Ethical Design', id: 'ethical-design' },
  { name: 'Design Systems', id: 'design-systems' },
];
export default function FlashSale(){
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    // console.log(productService.getAll());
    productService.getAll().then(x => setProducts(x));
  }, []);
  console.log(products);
  return(
    <>
        <Grid container alignItems="center" className="ml-2 mt-4">
          <Grid item xs={7} sm={2}>
            <Typography gutterBottom variant="h6" component="div">
              Harga promo hari ini
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
          <Typography gutterBottom component="div" color="secondary">
              Lihat Semua
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} alignItems="center">
          <Typography gutterBottom component="div" color="secondary" className="ml-4">
              Berakhir dalam
            </Typography>
            <Typography gutterBottom component="div" color="secondary" padding={2}>
              <Chip label="1" size="small" sx={{bgcolor:'red', color:'white'}} className="mr-2 ml-2"></Chip>:<Chip label="1" size="small" sx={{bgcolor:'red', color:'white'}} className="mr-2 ml-2"></Chip>:<Chip label="1" size="small" sx={{bgcolor:'red', color:'white'}} className="mr-2 ml-2"></Chip>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            
          </Grid>
        </Grid>
        {/* {products && products.map(product =>
        <Grid item xs={6} sm={2} key={product.id}>
        <Link 
        href="/product/[name]" 
        as={`/product/paracetamol`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/paracetamol.jpg"
                  alt="Paracetamol"
                />
                <CardContent>
                  <Typography>{product.name}</Typography>
                  <Typography fontWeight="bold">Rp. 151.800</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="error" className="mr-2"></Chip>
                    <Typography variant="caption" style={{ textDecorationLine: 'line-through' }}>Rp. 179.500</Typography>
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    <LinearProgress variant="determinate" value={90} color="error" />
                    <Typography variant="caption">Segera Habis</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        )} */}
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/paracetamol`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/paracetamol.jpg"
                  alt="Paracetamol"
                />
                <CardContent>
                  <Typography>Paracetamol</Typography>
                  <Typography fontWeight="bold">Rp. 151.800</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="error" className="mr-2"></Chip>
                    <Typography variant="caption" style={{ textDecorationLine: 'line-through' }}>Rp. 179.500</Typography>
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    <LinearProgress variant="determinate" value={90} color="error" />
                    <Typography variant="caption">Segera Habis</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/paracetamol`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/paracetamol.jpg"
                  alt="Paracetamol"
                />
                <CardContent>
                  <Typography>Paracetamol</Typography>
                  <Typography fontWeight="bold">Rp. 151.800</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="error" className="mr-2"></Chip>
                    <Typography variant="caption" style={{ textDecorationLine: 'line-through' }}>Rp. 179.500</Typography>
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    <LinearProgress variant="determinate" value={90} color="error" />
                    <Typography variant="caption">Segera Habis</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/paracetamol`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/paracetamol.jpg"
                  alt="Paracetamol"
                />
                <CardContent>
                  <Typography>Paracetamol</Typography>
                  <Typography fontWeight="bold">Rp. 151.800</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="error" className="mr-2"></Chip>
                    <Typography variant="caption" style={{ textDecorationLine: 'line-through' }}>Rp. 179.500</Typography>
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    <LinearProgress variant="determinate" value={90} color="error" />
                    <Typography variant="caption">Segera Habis</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/paracetamol`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/paracetamol.jpg"
                  alt="Paracetamol"
                />
                <CardContent>
                  <Typography>Paracetamol</Typography>
                  <Typography fontWeight="bold">Rp. 151.800</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="error" className="mr-2"></Chip>
                    <Typography variant="caption" style={{ textDecorationLine: 'line-through' }}>Rp. 179.500</Typography>
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    <LinearProgress variant="determinate" value={90} color="error" />
                    <Typography variant="caption">Segera Habis</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/paracetamol`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/paracetamol.jpg"
                  alt="Paracetamol"
                />
                <CardContent>
                  <Typography>Paracetamol</Typography>
                  <Typography fontWeight="bold">Rp. 151.800</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="error" className="mr-2"></Chip>
                    <Typography variant="caption" style={{ textDecorationLine: 'line-through' }}>Rp. 179.500</Typography>
                  </Typography>
                  <Box sx={{ width: '100%'}}>
                    <LinearProgress variant="determinate" value={90} color="error" />
                    <Typography variant="caption">Segera Habis</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
   </>
  )
}
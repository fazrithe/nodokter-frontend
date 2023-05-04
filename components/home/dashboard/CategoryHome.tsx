import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import { CardActionArea } from '@mui/material';
import Link from "next/link";


export default function CategoryHome(){
  return(
    <Grid item xs={12} sm={6}>
        <Typography gutterBottom variant="h6" component="div">
          Kategori Pilihan
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Link href="/cat/[name]" as={`/cat/aksesoris`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/obat.jpg"
                  alt="Cek Kesehatan"
                />
                <CardContent>
                  <Typography fontSize="14" fontWeight="bold">
                    Obat
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/cat/[name]" as={`/cat/sparepart`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/informasi.jpg"
                  alt="Informasi Umum"
                />
                <CardContent>
                  <Typography fontSize="14" fontWeight="bold">
                    Informasi Umum
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/workshop" as={`/workshop`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/workshop/apotik.jpg"
                  alt="Obat"
                />
                <CardContent>
                  <Typography fontSize="14" fontWeight="bold">
                    Apotik
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
        </Grid>
  </Grid>
  )
}
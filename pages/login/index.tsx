import * as React from 'react';
import { Alert, AlertTitle, FormGroup, FormControl, Container, Stack, Breadcrumbs, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, Typography} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

interface Values {
    email: string;
    password: string;
}

export default function Login(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
          Home
        </Link>,
        <Typography key="3" color="text.primary">
          Login
        </Typography>,
      ];
    
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resError, setError] = useState('');

    const submitData = async (e: React.SyntheticEvent) => {
        localStorage.setItem('status', 'active');
        router.push('/');
      };
    return(
        
        <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>  
        <Grid container alignItems="center" className="mt-4 d-flex justify-content-center">
        <Paper elevation={0}>
        {resError ? <Alert severity="error"><AlertTitle>Error</AlertTitle>{resError}</Alert> : ''}
            <Grid container alignItems="center" className="mt-4">
                <Grid item xs={9} sm={9}>
                    <Typography variant="h6">Masuk</Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Link href="register">
                    <Typography color="secondary">Daftar</Typography>
                    </Link>
                </Grid>
            </Grid>
            <form onSubmit={submitData}>
            <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel color="secondary">Email</InputLabel>
                <OutlinedInput
                    type="text"
                    label="Email"
                    color="secondary"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" color="secondary">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    color="secondary"
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </FormControl>
            </FormGroup>
              <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <button type="submit" className="bttn-pill bttn-sm bttn-royal">Masuk</button>
                </FormControl>
            </FormGroup>
            </form>
            </Paper>
            </Grid>
            </Container>
    )
}
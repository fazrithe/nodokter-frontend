import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { spacing } from '@mui/system';
import { purple } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';
import { Grid, Popover, MenuList, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import LogoNavbar from '@/public/nodokter.png'
import MenuCategories from './MenuCategories';
import { ContentCut, Assignment, Star, Favorite, RecordVoiceOver, SupportAgent } from '@mui/icons-material';

const pages = ['Categories'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //categories
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
    <AppBar position="fixed" sx={{ bgcolor: "purple" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Image src={LogoNavbar} alt="logo" width={180} />
          </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <Grid container className="ml-2">
                <Grid item>
                <Link href="/login">
                  <ColorButton variant="contained" className='mr-2'>Masuk</ColorButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register">
                  <ColorButton variant="contained" className='mr-2'>Register</ColorButton>
                </Link>
              </Grid>
            </Grid>
            <MenuList>
                <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemText>
                    <Typography fontWeight="bold">Aktivitas Saya</Typography>
                  </ListItemText>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                    <Assignment fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Daftar Transaksi</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                    <Star fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Ulasan</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                    <Favorite fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Wishlist</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemText>
                    <Typography fontWeight="bold">Pusat Bantuan</Typography>
                  </ListItemText>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                    <RecordVoiceOver fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Pesanan Dikomplain</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                    <SupportAgent fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Bantuan Nodokter Care</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <MenuCategories/>
            </Popover>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 0, padding:1 }}>
            <Link href="/cart">
            <Tooltip title="Open your cart">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ShoppingCart  style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Link href="/login">
          <ColorButton variant="contained" className='mr-2'>Masuk</ColorButton>
          </Link>
          <Link href="/register">
          <ColorButton variant="contained">Daftar</ColorButton>
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
};
export default Navbar;

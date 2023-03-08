import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
16
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ResponsiveAppBar() {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);
const handleOpenNavMenu = (event) => {
setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
setAnchorElUser(event.currentTarget);
};
const handleCloseNavMenu = () => {
setAnchorElNav(null);
};
const handleCloseUserMenu = () => {
 setAnchorElUser(null);
};
17
return (
<AppBar position="static">
<Container maxWidth="xl">
<Toolbar disableGutters>
<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
<Typography
 variant="h6" noWrap
 component="a"
 href="/" sx={{ mr:
2,
display: { xs: 'none', md: 'flex' },
fontFamily: 'monospace',
fontWeight: 700, letterSpacing:
'.3rem', color:
'inherit', textDecoration:
'none',
}}
>
SKCET
</Typography>
<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
<IconButton
size="large"
aria-label="account of current user"
18
aria-controls="menu-appbar" ariahaspopup="true"
onClick={handleOpenNavMenu} color="inherit"
>
<MenuIcon />
</IconButton>
<Menu id="menuappbar"
anchorEl={anchorElNav}
anchorOrigin={{ vertical:
'bottom', horizontal:
'left',
}}
keepMounted
transformOrigin={{ vertical:
'top', horizontal:
'left',
}}
open={Boolean(anchorElNav)}
onClose={handleCloseNavMenu} sx={{ display: { xs: 'block',
md: 'none' },
}}
>
{pages.map((page) => (
<MenuItem key={page} onClick={handleCloseNavMenu}>
<Typography textAlign="center">{page}</Typography>
</MenuItem>
))}
19
</Menu>
</Box>
<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
<Typography
variant="h5" noWrap
component="a"
href="" sx={{ mr:
2,
display: { xs: 'flex', md: 'none' },
flexGrow: 1, fontFamily: 'monospace',
fontWeight: 700, letterSpacing:
'.3rem',
color: 'inherit',
textDecoration: 'none',
}}
>
SKCET
</Typography>
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
{pages.map((page) => (
<Button
key={page}
onClick={handleCloseNavMenu}
sx={{ my: 2, color: 'white', display: 'block' }}
>
{page}
20
</Button>
))}
</Box>
<Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
</IconButton>
</Tooltip>
<Menu sx={{ mt:
'45px' }} id="menuappbar"
 anchorEl={anchorElUser}
anchorOrigin={{ vertical:
'top', horizontal: 'right',
}}
keepMounted
 transformOrigin={{ vertical:
'top', horizontal:
'right',
}}
 open={Boolean(anchorElUser)}
 onClose={handleCloseUserMenu}
>
 {settings.map((setting) => (
<MenuItem key={setting} onClick={handleCloseUserMenu}>
21
<Typography textAlign="center">{setting}</Typography>
</MenuItem>
))}
</Menu>
</Box>
</Toolbar>
</Container>
</AppBar>
);
}
export default ResponsiveAppBar;
App.js
import React from 'react'
import Hello from'./over';
import Card from './button';
import UpdatedComponent from './update';
import './style.css';
import ResponsiveAppBar from './navbar';
function App(){
 return(
<ResponsiveAppBar/>
 );
}
22
export default App
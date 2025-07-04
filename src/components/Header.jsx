import React from "react"

import "../styles/components/Header.css";
import "../styles/components/subcomponents/Searchbar.css"
import {AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import HeaderSearchbar from "./subcomponents/HeaderSearchbar";
import ProfileBox from "./subcomponents/ProfileMenu";

const drawerWidth = 240;
const navItems = [
  {
    label:'My Profile',
    relPath: "/profile"
  },
  {
    label: 'My Account',
    relPath: "/account"
  },
  {
    label: 'Log Out',
    relPath: "/logout"
  }];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // Prevent drawer from closing when clicking inside the DrawerSearchBar input
  const handleDrawerClick = (event) => {
    // If the click originated from inside the search bar, don't close the drawer
    if (
      event.target.closest('.search-bar-container') || // adjust selector to your DrawerSearchBar root class
      event.target.closest('input[type="text"]')
    ) {
      event.stopPropagation();
    } else {
      handleDrawerToggle();
    }
  };
  const drawer = (
    <Box id="nb-drawer" onClick={handleDrawerClick}
      sx={{
        height: "100%",
        textAlign:"center"
      }}
    >
      <Button className="logo-container" href="/">
        <img id="nb-drawer-logo" src="../images/dc_logo.png"/>
      </Button>
      <HeaderSearchbar drawer={true}/>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton href={item.relPath} className="drawer-nav-link"
              sx={{
                color: "#FFF",
                textAlign: 'center'
                }}
            >
              <ListItemText primary={item.label}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box id="navbar"
      sx={{
        display: 'flex'
      }}
    >
      <CssBaseline />
      <AppBar component="nav"
        sx={{
          padding:0
        }}
      >{/* HEADER */}
        <Toolbar id="nb-header"
          sx={{

          }}
        >
          {/* BURGER MENU */}
          <IconButton id="drawer-menu" color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
            sx={{
              display: {
                sm: "flex",
                md: 'none'
              },
              justifyContent: "flex-start"
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* HEADER LOGO */}
          <Button id="nb-logo-container" href="/">
            <img id="nb-logo" src="../images/dc_logo.png"/>
          </Button>
          {/* HEADER SEARCHBAR */}
          <Container id="nb-searchbar" sx={{
              display: {
                xs: "none",
                md: "block"
              }
            }}
          >
            <HeaderSearchbar drawer={false}/>
          </Container>
          {/* PROFILE MENU */}
          <Box id="nb-profile-menu"
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
                },
              justifyContent: "flex-start"
            }}
          >
            <ProfileBox/>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        {/* DRAWER NAV */}
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{keepMounted: true}}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main"
        sx={{
          padding: 5
        }}
      >
      </Box>
    </Box>

  );
}

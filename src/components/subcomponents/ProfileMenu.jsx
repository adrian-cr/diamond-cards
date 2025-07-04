import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import "../../styles/components/subcomponents/ProfileMenu.css"

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = anchorEl;
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path="") => {
    setAnchorEl(null);
    if (path) navigate(path);
  };

  return (
    <div>
      <Button
        id="menu-button"
        onClick={handleClick}
      >
        <img id="menu-image" src="../../images/avatar.png"/>
      </Button>
      <Menu
        id="menu-items"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className="menu-item" onClick={() => handleClose("/profile")}>My Profile</MenuItem>
        <MenuItem className="menu-item" onClick={() => handleClose("/account")}>My account</MenuItem>
        <MenuItem className="menu-item" onClick={() => handleClose("/logout")}>Log Out</MenuItem>
      </Menu>
    </div>
  );
}

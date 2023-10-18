import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          PeerPrep
        </Typography>
        <Button component={Link} to="/Home" color="inherit">HOME</Button>
        <Button component={Link} to="/Questions" color="inherit">QUESTIONS</Button>
        <Button component={Link} to="/UserProfile" color="inherit">PROFILE</Button>
        <Button component={Link} to="/AddQuestion" color="inherit">ADD QUESTION</Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
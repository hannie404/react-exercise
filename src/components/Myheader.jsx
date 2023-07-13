import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

console.log(styled)

const NavList = styled.a`text-decoration: none`;

const StyledLink = styled(Link)`
  color: white;
  position: relative;
  margin-right: 10px;
  &:hover {
    color: black;
  };
`;


const Myheader =() => {
  return (
    <Box sx={{ flexGrow: 1 }} component='nav'>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <StyledLink to='/'>Home</StyledLink>
              <StyledLink to='/about'>About</StyledLink>
              <StyledLink to='/Contact'>Contact</StyledLink>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Myheader
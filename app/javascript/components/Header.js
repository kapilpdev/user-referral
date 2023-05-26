import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const isLoggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (isLoggedIn) {
      setPages([
        {
          title: "DashBoard",
          handleClick: () => {
            navigate("/dashboard");
          },
        },
        {
          title: "Logout",
          handleClick: () => {
            navigate("/login");
            localStorage.removeItem('token');
          },
        },
      ]);
    } else {
      setPages([
        {
          title: "Sign In",
          handleClick: () => {
            navigate("/login");
          },
        },
        {
          title: "Sign Up",
          handleClick: () => {
            navigate("/registration");
          },
        },
      ]);
    }
  }, [isLoggedIn]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => page.handleClick()}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

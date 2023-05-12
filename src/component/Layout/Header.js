import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <Typography>My Resturant</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
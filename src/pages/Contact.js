import React from 'react'
import Layout from '../component/Layout/Layout';
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,ml:10, "& h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
          It’s great that I can talk about my favorite restaurant. I like very much restaurants that have modern  menu on the food, the drinks and the dessert .

          I am very attracted by those that are served as pumpkin sauce with cream. Or offer arugula juice. Things like this make me happy.

          Eating in the restaurant is one of the good things. Since childhood, we did not encourage eating in restaurants a lot due to the loss of beneficial nutrients. The orders are always saturated with oils and fats.

          But because of the change and the experience of some new varieties, I became a lot more encouraged to eat in restaurants. One of my most favorite restaurants is the tomato Indian restaurant. They can always surprise me and offer one of those new meals or offer a modern sauce that I like.
        </p>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell>Contact Details</TableCell>
              </TableRow>
            </TableHead>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}
export default Contact;

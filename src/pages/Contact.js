import React from 'react'
import Layout from '../component/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { 
  Box, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography,

} from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5,ml:10, "& h4":{fontWeight:'bold',mb:2}}}>
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
      <Box sx={{m:3,width:'600px',ml:10,"@media(max-width:600px)":{
        width:'300px'
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <SupportAgentIcon sx={{color:'red',pt:1}}/> 1800 23000 123 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <MailIcon sx={{color:'skyblue',pt:1}}/> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <CallIcon sx={{color:'green',pt:1}}/> +99-123456789 (toll-free)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}
export default Contact;

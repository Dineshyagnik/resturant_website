import React from "react";
import Layout from '../component/Layout/Layout'
import { Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my:11,
                p:2,
                textAlign:'center',
                "& h4":{
                    fontWeight:'bold',
                    my:2,
                    fontSize:'2rem',
                },
                " & p":{
                    textAlign:'justify'
                },
                "@media(max-width:600px)":{
                    mt:0,
                    "& h4":{
                        fontSize:'1.5rem'
                    }
                }
            }}>
                <Typography variant="h4">
                    Welcome To My Resturant
                </Typography>
                <p>
                    A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
                    Restaurant provides with all the amenities that one requires for a shift of mood or change in environment to cherish the pleasant atmosphere and enjoy different cuisines to satisfy your hunger.
                    A family style restaurant is similar to the casual dining model mentioned above with one significant difference: servers deliver the food in large dishes and customers then serve the food for themselves and pass it to other diners at the table.
                    </p>
                <br />
                <p>
                    A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. The restaurant offers a menu with various options for your meal, to choose from.

                    Restaurants provide you with different cuisines of food to satisfy your hunger.
                    The food preparation and presentation gives you a happy feel during your dull
                    The ambiance that a restaurant provides you with gives one all the more reason to visit to cherish their time.
                    The restaurant is a life savior when one doesn’t feel like cooking or wants to eat something else.
                    You get to explore places when you plan to visit a restaurant.
                    The fast-food restaurant provides your meals on the go to save your time at affordable prices.
                    The restaurant is a place to enjoy your special occasions like Birthdays, Anniversaries, Achievements, etc.
                </p>
            </Box>
        </Layout>
    )
}
export default About;
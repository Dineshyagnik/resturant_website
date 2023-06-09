import React from "react";
import Layout from "../component/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from '../images/Banner.jpeg'
import '../Styles/HomeStyle.css';
 const Home=()=>{
    return(
        <Layout>
            <div className="home" style={{backgroundImage:`url(${Banner})`}}>
                <div className="headerContent">
                    <h1>Food Website</h1>
                    <p>Best food in India</p>
                    <Link to='/menu'>
                    <button>ORDER NOW</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}
export default Home;
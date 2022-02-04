import Link from "../src/components/Link";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { Input, Button, Avatar, Grid, container, Menu, IconButton, Typography, Toolbar, Box, AppBar, MenuItem } from '@mui/material';
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


function PageTitle(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: black;
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

function HomePage() {
  return (
    <div style={{backgroundImage: `url("/Dinosaur-Easy-Feature.webp")`, backgroundRepeat: "no-repeat",    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}  >
       {/* <ResponsiveAppBar></ResponsiveAppBar> */}
<Grid  container
  spacing={0}
  direction="row"
alignItems="center"  justifyContent="center"style={{minHeight: '200px'}}>

<Grid item xs={3}>
  <Container style={{background: 'rgba(0, 0, 0, 0.2)', opacity: 0.7}}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <PageTitle tag="h2" children="div">Welcome!</PageTitle>
      <h2>Discord - Lumen</h2>
      <Input color="warning">Enter your name</Input><br></br>
      <Link href="/chat"><Button variant="contained" color="warning">Chat</Button></Link>
      </Container>
      </Grid>   
</Grid>

    </div>
  );
}

export default HomePage;

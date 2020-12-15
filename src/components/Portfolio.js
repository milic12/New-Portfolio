import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import project1 from "../images/gif1.gif";
import project2 from "../images/webstoregif.gif";
import project3 from "../images/mhgif.gif";
import project4 from "../images/intellishell.png";
import project5 from "../images/hotel1.png";
import project7 from "../images/taxigif.gif";
import project8 from "../images/portfolio.gif";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgorund: "tomato",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 450,
    margin: "8rem auto",
    color: "tomato",
  },
  particlesCanva: {
    position: "absolute",
    opacity: "50",
  },
  button1: {
    margin: theme.spacing(1),
    backgroundColor: "#FF826C",
  },
  button2: {
    backgroundColor: "#80CEDC",
    margin: theme.spacing(1),
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Particles
          canvasClassName={classes.particlesCanva}
          params={{
            particles: {
              number: {
                value: 45,
                density: {
                  enable: false,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                  color: "tomato",
                },
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: false,
                  speed: 6,
                  size_min: 0.1,
                  sync: false,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: true,
                },
              },
            },
          }}
        />

        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <label className="clicktogif" title="click to show gif">
                <input type="checkbox"></input>
                <CardMedia
                  component="img"
                  alt="Project img"
                  height="200"
                  image={project1}
                />
              </label>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Covid-19 tracker app
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  React JS app built with material-ui and API data fetching
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                color="primary"
                size="small"
                variant="contained"
                href="https://github.com/milic12/covid19-app-reactJS"
              >
                See on Github
              </Button>
              <Button
                className={classes.button2}
                size="small"
                variant="contained"
                color="secondary"
                href="https://milic12.github.io/covid19-app-reactJS/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <label className="clicktogif4" title="click to show gif">
                <input type="checkbox"></input>
                <CardMedia
                  component="img"
                  alt="Project img"
                  height="200"
                  image={project2}
                />
              </label>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Online Webstore
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Built with MERN Stack
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                size="small"
                variant="contained"
                color="primary"
                href="https://github.com/milic12/webstore/tree/master"
              >
                See on Github
              </Button>
              <Button size="small" color="primary" disabled>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <label className="clicktogif3" title="click to show gif">
                <input type="checkbox"></input>
                <CardMedia
                  component="img"
                  alt="Project img"
                  height="200"
                  image={project3}
                />
              </label>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Hackathon #HealthTechMonth
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  App idea for HealthTechMonth Hackathon,
                  <br /> This app can help people with mental health problems at
                  this time of global pandemic where we face a problem of
                  meeting our therapist in person, with online video meetings,
                  tools and exercises this app can offer a solution to new
                  problems that we are facing today
                  <br /> made with ReactJS, nodeJs, Twilio
                  <br /> <b>Still in progress</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                color="primary"
                size="small"
                variant="contained"
                href="https://github.com/milic12/HealthTechMonth/tree/master"
              >
                See on Github
              </Button>
              <Button
                className={classes.button2}
                size="small"
                variant="contained"
                color="secondary"
                href="https://quirky-albattani-440896.netlify.app/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="iframe"
                alt="Project video"
                image="https://player.vimeo.com/video/487817192"
                height="250"
                type="video/mp4"
                muted=""
                autoPlay=""
                controls
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Ericsson Innovation Awards
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br />
                  Our intelliShell Team made it to be one of 15 teams in the
                  semi-finals who have entered top 1 percent of teams, against
                  tough international competition of over 2000 teams, including
                  more than 6800 students from 69 countries.
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=ig4mJScvK_Q&ab_channel=intelliShellSystem"
                    className="color hover:text-tomato-400"
                  >
                    Youtube link
                  </a>
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                color="primary"
                size="small"
                variant="contained"
                href="https://www.ericsson.com/en/careers/eia/past-competitions/eia-2019/fesb-intellishell"
              >
                See more here
              </Button>
              <Button
                className={classes.button2}
                size="small"
                variant="contained"
                color="secondary"
                href="https://www.ericsson.hr/en/20190610-eia"
              >
                Also here
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 6 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project video"
                height="250"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  3D Model
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  3D model of our projet for EIA competition made in Fusion360
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                color="primary"
                size="small"
                variant="contained"
                href="https://drive.google.com/drive/folders/1zv4pcDA67fiCxtUChMxX3dq7ig3_Ycc_"
              >
                See more here
              </Button>
              <Button size="small" color="secondary" disabled>
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project img"
                height="200"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Hotel Reservation System
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  <br />
                  .NET MVC web API , with Azure Sql
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                color="primary"
                size="small"
                variant="contained"
                href="https://github.com/milic12/Hotel-Reservation-.NET-MVC"
              >
                See on Github
              </Button>

              <Button size="small" color="secondary" disabled>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 7 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <label className="clicktogif5" title="click to show gif">
                <input type="checkbox"></input>
                <CardMedia
                  component="img"
                  alt="Project img"
                  height="200"
                  image={project7}
                />
              </label>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Taxi app
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Built with .NET and Entity Framework
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                color="primary"
                size="small"
                variant="contained"
                href="https://github.com/milic12/Taxi-app-ASP.NET"
              >
                See on Github
              </Button>
              <Button size="small" disabled>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 8 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <label className="clicktogif6" title="click to show gif">
                <input type="checkbox"></input>
                <CardMedia
                  component="img"
                  alt="Project img"
                  height="200"
                  image={project8}
                />
              </label>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  <br />
                  First Portfolio
                  <br />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br />
                  Built with HTML, CSS, JS(jQuery)
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.button1}
                color="primary"
                size="small"
                variant="contained"
                href="https://github.com/milic12/first-portfolio"
              >
                See on Github
              </Button>
              <Button
                className={classes.button2}
                color="secondary"
                size="small"
                variant="contained"
                href="http://pzi1.fesb.hr/~milic/CV/milic.me/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;

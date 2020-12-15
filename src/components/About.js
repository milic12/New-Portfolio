import React from "react";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import image from "../images/desing4.png";
import image1 from "../images/books4.png";
import image2 from "../images/my-picture18.png";
import image3 from "../images/html.png";
import image4 from "../images/Css.png";
import image5 from "../images/javascript.png";
import image6 from "../images/c.png";
import image7 from "../images/database1.png";
import image8 from "../images/cplus.png";
import Navbar from "./Navbar";

//CSS Styles

const useStyles = makeStyles((theme) => ({
  github: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
    fill: "tan",
    fontSize: "1.5rem",
    "&:hover": {
      fill: "tomato",
    },
  },

  title: {
    color: "tomato",
    marginLeft: "2rem",
    marginTop: "15rem",
  },

  subtitle: {
    color: "tan",
    marginBottom: "1rem",
    marginLeft: "2rem",
  },

  typedContainer: {},
  cardContainer: {
    maxWidth: 590,
    marginBotoom: "5rem auto",
    marginLeft: "65rem auto",
    backgroundColor: "transparent",
  },
  frontimage: {
    maxWidth: "100%",
    borderRadius: "0.5rem",
    paddingTop: "3rem",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 pb-32 pt-12">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <Typography
                className="text-4xl font-bold  text-tomato-400"
                variant="h4"
              >
                <Typed strings={["Who Am I?"]} typeSpeed={40} />
              </Typography>
              <p className="mt-1 text-2xl text-align1 leading-snug text-gray-600">
                A software developer who loves front-end and playing with
                design, always striving to make beautiful web apps, with clean
                code
              </p>
              <p className="mt-4 text-xl text-align1 leading-subnormal text-gray-600">
                Graduated with a bachelor's degree in Computer Engineering and
                Electronics at University of{" "}
                <a
                  href="https://eng.fesb.unist.hr/"
                  className="color hover:text-tomato-400"
                >
                  FESB
                </a>
                . Besides front-end, I also worked with Electronics-embedded
                systems for a university project.
              </p>
              <p className="mt-4 text-xl text-align1  leading-snug text-gray-600">
                When I'm not programming you can find me drinking coffee while
                enjoying the sea and sun,
              </p>
              <p className="mt-4 text-xl leading-relaxed text-gray-600">
                if not{" "}
              </p>
              <p className="mt-4 text-xl leading-relaxed text-gray-600">
                then I'm helping at the local voluntary group,
              </p>
              <p className="mt-4 text-xl leading-relaxed text-gray-600">else</p>
              <p className="mt-4 text-xl leading-relaxed text-gray-600">
                Might be Writing for a local Tech Enthusiast group{" "}
                <a
                  href="https://en.split-techcity.com/"
                  className="color hover:text-tomato-400"
                >
                  Split Tech City
                </a>
              </p>
            </div>

            <div>
              <a href="https://github.com/milic12" className="hover:-mt-4">
                <GitHubIcon className={classes.github} />
              </a>
              <a href="https://www.linkedin.com/in/manojlo-ili%C4%87-141261192/">
                <LinkedInIcon className={classes.github} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <div className="maincontainer container">
              <div className="thecard ">
                <div className="thefront">
                  <img
                    alt="frontimg"
                    className="max-w-full rounded-lg pt-12"
                    src={image2}
                  />
                </div>

                <div className="theback">
                  <img
                    alt="backimg"
                    className="max-w-full rounded-lg shadow-xl pt-12"
                    src={image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="wrapper">
          <h2 className="text-3xl font-semibold text-tomato-400  pl-4 ">
            Column of accumulated{" "}
          </h2>
          <h2 className="text-3xl font-semibold text-tomato-400 pl-10 pb-6">
            Knowledge
          </h2>
          <div id="content">
            <ul id="bar">
              <li id="database">
                <div className="top">
                  <img alt="database" src={image7} />
                </div>

                <div className="bottom">
                  <div className="infobox">
                    <h2>MongoDB, Azure&nbsp;SQL</h2>
                  </div>
                </div>
              </li>
              <li id="c">
                <div className="top">
                  <img alt="c#" src={image6} />
                </div>
                <div className="bottom">
                  <div className="infobox">
                    <h3>ASP.NET</h3>
                  </div>
                </div>
              </li>
              <li id="javascript">
                <div className="top">
                  <img alt="javascript" src={image5} />
                </div>
                <div className="bottom">
                  <div className="infobox">
                    <h3>ReactJs, Mern&nbsp;Stack</h3>
                  </div>
                </div>
              </li>
              <li id="cplus">
                <div className="top">
                  <img alt="cplus" src={image8} />
                </div>
                <div className="bottom">
                  <div className="infobox">
                    <h3>C/C++</h3>
                  </div>
                </div>
              </li>
              <li id="css">
                <div className="top">
                  <img alt="css" src={image4} />
                </div>
                <div className="bottom">
                  <div className="infobox">
                    <h3>CSS</h3>
                  </div>
                </div>
              </li>
              <li id="html">
                <div className="top">
                  <img alt="macmini" src={image3} />
                </div>
                <div className="bottom">
                  <div className="infobox">
                    <h3>HTML</h3>
                  </div>
                </div>
              </li>
            </ul>
            <div id="books">
              <img alt="Books" src={image1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

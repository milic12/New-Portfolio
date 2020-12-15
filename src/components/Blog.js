import React from "react";
import { Grid, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import blog1 from "../images//Split-tech-city-blog.png";
import blog3 from "../images//blog3.png";

const Blog = () => {
  return (
    <Box component="div" style={{ background: " bg-white" }}>
      <Navbar />

      <Grid>
        <div className="justify-center">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 -mt-5">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-6 ">
                  <h5 className="text-xl font-semibold pb-4 text-center color">
                    Split Tech City
                  </h5>
                  <a href="https://split-techcity.com/zdravko-blagdan-maraton-od-4-desetljeca-programiranja-koji-i-dalje-traje-opencfoffee-meetup">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="SplitTechCity"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={blog1}
                      />
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-5/12 px-6">
                  <h5 className="text-xl font-semibold pb-4 text-center color">
                    Split Tech City
                  </h5>
                  <a href="https://split-techcity.com/stvari-koje-trebate-znati-o-net5-manojlo-ilic">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="SplitTechCity"
                        className="align-middle border-none max-w-full h-auto rounded-lg "
                        src={blog3}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Box>
  );
};

export default Blog;

import React, { Component } from "react";
import classes from "./App.module.scss";
import Emoji from "react-emoji-render";

import * as imageIcon from "./assets/images/index";

import Header from "./components/header/header";
import TechStack from "./components/techStack/techStack";
import Work from "./components/work/work";

import stacks from "./config/techStack";
import wallpaper from "./assets/images/wallpaper.jpg";

const style = {
  backgroundImage: `url(${wallpaper})`,
  height: "100vh",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%"
};

class App extends Component {
  render() {
    return (
      <>
        {/* Head and Parallax */}
        <div className={classes.parallaxContainer}>
          <div style={style} />
          <div className={classes.overlay}>
            <h1>Web Developer</h1>
            <h3>Developing Web, Line by Line</h3>
          </div>
        </div>
        <Header />

        {/* Tech stack section */}
        <div className={[classes.aboutMe, classes.techStackSection].join(" ")}>
          <span className={classes.header}>Tech Stack</span>
          <span className={classes.subHeader}>Knowledge is power !!</span>
          <hr />
          <div className={classes.aboutMeBody}>
            <TechStack type="FrontEnd Stack" stack={stacks.frontEnd} />
            <TechStack type="BackEnd Stack" stack={stacks.backEnd} />
            <TechStack type="DevTools Stack" stack={stacks.devTools} />
          </div>
          <svg
            width="100%"
            height="75px"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="m 0 100 l 100 -100 v 100 h -100 "></path>
          </svg>
        </div>

        {/* Recent work section */}

        <div className={[classes.aboutMe, classes.recentWork].join(" ")}>
          <span className={classes.header}>Recent Works</span>
          <span className={classes.subHeader}>Keep learning, Keep helping</span>
          <hr />
          <div
            className={[classes.aboutMeBody, classes.aboutMeRecentWork].join(
              " "
            )}
          >
            <Work />
            <Work />
            <Work />
          </div>
          <svg
            width="100%"
            height="75px"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="m 0 100 l 100 -100 v 100 h -100 "></path>
          </svg>
        </div>

        {/* About me Section */}
        <div className={classes.aboutMe}>
          <span className={classes.header}>About Me</span>
          <span className={classes.subHeader}>
            Keep Learning / Keep Achieving
          </span>
          <hr />
          <div
            className={[classes.aboutMeBody, classes.aboutMeDetails].join(" ")}
          >
            <p>
              I am FullStack Web Developer, who has worked on various projects
              and in various roles. I have worked a lot in startup environment
              thus gathering knowledge in various domains, and stages starting
              from product designing to final delivery.
            </p>
            <p>
              I have also mentored junior developers and developed systems and
              procedures within a company for efficient development.
            </p>
            <p>
              In free time I like to workout and try out new tech stuff.
              <Emoji text=":punch:" />{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;

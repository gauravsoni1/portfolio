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
        <div className={classes.parallaxContainer}>
          <div style={style} />
          <div className={classes.overlay}>
              <h1>Web Developer</h1>
              <h3>Developing Web, Line by Line</h3>
          </div>
        </div>
        <Header></Header>
        <div className={classes.aboutMe}>
          <span className={classes.header}>Tech Stack</span>
          <span className={classes.subHeader}>Knowledge is power !!</span>
          <hr />
          <div className={classes.aboutMeBody}>
            <TechStack type="FrontEnd Stack" stack={stacks.frontEnd} />
            <TechStack type="BackEnd Stack" stack={stacks.backEnd} />
            <TechStack type="DevTools Stack" stack={stacks.devTools} />
          </div>
        </div>
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
        <div className={classes.aboutMe}>
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
        </div>
        <div className={classes.aboutMe}>
          <span className={classes.header}>Let's work !!</span>
          <span className={classes.subHeader}>
            Don't wait for opportunity, create them !!
          </span>
          <hr />
          <div
            className={[classes.aboutMeBody, classes.aboutMeFooter].join(" ")}
          >
            <ul>
              <li>
                <img src={imageIcon["gitIcon"]} />
              </li>
              <li>
                <img src={imageIcon["facebookIcon"]} />
              </li>
              <li>
                <img src={imageIcon["linkedinIcon"]} />
              </li>
              <li>
                <img src={imageIcon["emailIcon"]} />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;

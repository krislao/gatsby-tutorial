import React from "react";
import Container from "components/container";
import * as classes from "./about-css-modules.module.css";

function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS modules are cool!</p>

      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  );
}

function User(props) {
  return (
    <div className={classes.user}>
      <img src={props.avatar} className={classes.avatar} alt="" />
      <div className={classes.description}>
        <h2 className={classes.username}>{props.username}</h2>
        <p className={classes.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  );
}
export default About;

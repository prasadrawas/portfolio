import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                KNOW MORE <span className="purple"> ABOUT ME </span>
              </h1>
              <p className="home-about-body">
                Hi! I'm a passionate software developer specializing in
                <i>
                  <b className="purple"> Flutter, Vue.js, and React</b>
                </i>
                . With <b className="purple">3.5 years of experience</b>, I love
                building modern web and mobile applications that solve real-world
                problems.
                <br />
                <br />
                My expertise includes developing <b className="purple">scalable</b>
                , <b className="purple">efficient</b>, and <b className="purple">secure</b>
                &nbsp; applications. I'm always exploring new technologies and
                keeping up with industry trends.
                <br />
                <br />
                When I'm not coding, I enjoy diving into topics like
                <b className="purple"> software engineering best practices</b>,
                automation, and tech blogging.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>CONNECT WITH ME</h1>
              <p>
                Feel free to <span className="purple">connect</span> with me on
                my social platforms!
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/prasadrawas"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/prasad-rawas-392b10204"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;

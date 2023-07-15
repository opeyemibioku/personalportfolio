import React, { useState } from "react";
import { Link } from "react-router-dom";
import ope from "../assets/images/ope.png";
import opeyemibioku from "../assets/images/opeyemibioku.png";
import op from "../assets/images/op.png";
import opeyemi from "../assets/images/opeyemi.png";

import project from "../assets/images/projects/project.jpg";
import cash2go from "../assets/images/projects/cash2go.png";
import haven from "../assets/images/projects/haven.png";
import eightgear from "../assets/images/projects/eightgear.png";
import mindafrik from "../assets/images/projects/mindafrik.png";
import freshchow from "../assets/images/projects/freshchow.png";
import jolevi from "../assets/images/projects/jolevi.png";
import languagehub from "../assets/images/projects/languagehub.png";
import portfolio from "../assets/images/projects/portfolio.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      {/* <Hero /> */}
      <TechStacks />
      <MyProjects />
      <Experience />
      {/* <Footer /> */}
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div
        className="container-fluid ps-5"
        style={{ backgroundColor: "#222A35" }}
      >
        <div className="d-flex">
          <Link to="/" style={{ textDecoration: "none", opacity: ".9" }}>
            {" "}
            <h5 className="mt-4 text-white">Opeyemi Bioku</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export const HomeHero = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#222A35" }}>
      <div className="row align-items-center justify-content-center px-4 py-4">
        <div className="col-lg-2 col-md-1 pt-3 d-none d-lg-block d-md-block d-sm-none d-xs-none">
          <div className="my-3">
            <a href="https://github.com/opeyemibioku">
              <i className="bi bi-github text-light" target="_blank"></i>
            </a>
          </div>
          <div className="my-3">
            <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank">
              <i className="bi bi-linkedin text-light"></i>
            </a>
          </div>{" "}
          <div className="my-3">
            <a href="mailto:opeyemibioku@gmail.com">
              <i className="bi bi-envelope text-light" target="_blank"></i>
            </a>
          </div>
          <div className="my-3">
            <a href="">
              <i className="bi bi-instagram text-light" target="_blank"></i>
            </a>
          </div>
        </div>
        <div className="col-sm-12 d-xs-block d-sm-block d-md-none d-lg-none">
          <a href="https://github.com/opeyemibioku">
            <i className="bi bi-github text-light mx-2" target="_blank"></i>
          </a>

          <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank">
            <i className="bi bi-linkedin text-light mx-2"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram text-light mx-2" target="_blank"></i>
          </a>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12 pt-2">
          <p className="text-light" style={{ opacity: ".9" }}>
            Hi, I’m Opeyemi Bioku
            <br />
          </p>
          {/* <h5
            className=" d-xs-block d-sm-block d-md-block d-lg-none text-light"
            style={{ opacity: ".9" }}
          >
            Hi, I’m Opeyemi Bioku.
            <br />
          </h5> */}{" "}
          <h2 className="text-light">A Fullstack Developer</h2>
          <p className="text-light" style={{ fontSize: "20px" }}>
            Proficient in building web solutions.
          </p>
          <div className="mt-4">
            {/* <div className="col-lg-12 col-md-7 col-sm-12 pt-3"> */}
            <div className="d-flex">
              <hr style={{ width: "4rem" }} className="text-light" />
              <a href="#techstacks" className="text-decoration-none">
                {" "}
                <p
                  className="ms-3 mt-1"
                  style={{ fontSize: "0.9rem", color: "#3bafca" }}
                >
                  TECH STACKS
                </p>
              </a>
            </div>
            <div className="d-flex">
              <hr style={{ width: "4rem" }} className="text-light" />
              <a href="#myprojects" className="text-decoration-none">
                {" "}
                <p
                  className="ms-3 mt-1"
                  style={{ fontSize: "0.9rem", color: "#3bafca" }}
                >
                  MY PROJECTS
                </p>
              </a>
            </div>
            <div className="d-flex">
              <hr style={{ width: "4rem" }} className="text-light" />
              <a href="#experience" className="text-decoration-none">
                {" "}
                <p
                  className="ms-3 mt-1"
                  style={{ fontSize: "0.9rem", color: "#3bafca" }}
                >
                  EXPERIENCE
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-12">
          <div className="d-flex justify-content-center mt-5">
            <img
              src={opeyemi}
              className="d-block mx-lg-auto img-fluid"
              alt=""
              loading=""
              width="350"
              height="350"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="container-fluid " style={{ backgroundColor: "#222A35" }}>
      {/* <h5 className="pt-5 ps-3 text-white">Opeyemi Bioku</h5> */}
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-2 col-md-1 pt-3 d-none d-lg-block d-md-block d-sm-none d-xs-none">
          <div className="my-3">
            <a href="https://github.com/opeyemibioku">
              <i className="bi bi-github text-light" target="_blank"></i>
            </a>
          </div>
          <div className="my-3">
            <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank">
              <i className="bi bi-linkedin text-light"></i>
            </a>
          </div>{" "}
          <div className="my-3">
            <a href="mailto:opeyemibioku@gmail.com">
              <i className="bi bi-envelope text-light" target="_blank"></i>
            </a>
          </div>
          <div className="my-3">
            <a href="">
              <i className="bi bi-instagram text-light" target="_blank"></i>
            </a>
          </div>
        </div>
        <div className="d-xs-block d-sm-block d-md-none d-lg-none">
          <a href="https://github.com/opeyemibioku">
            <i className="bi bi-github text-light mx-2" target="_blank"></i>
          </a>

          <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank">
            <i className="bi bi-linkedin text-light mx-2"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram text-light mx-2" target="_blank"></i>
          </a>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12 pt-3">
          <p className="text-light" style={{ opacity: ".9" }}>
            Hi, I’m Opeyemi Bioku
            <br />
          </p>
          {/* <h5
            className=" d-xs-block d-sm-block d-md-block d-lg-none text-light"
            style={{ opacity: ".9" }}
          >
            Hi, I’m Opeyemi Bioku.
            <br />
          </h5> */}{" "}
          <h2 className="text-light">A Fullstack Developer</h2>
          <p className="text-light" style={{ fontSize: "20px" }}>
            Proficient in building web solutions.
          </p>
          <div className="mt-4">
            {/* <div className="col-lg-12 col-md-7 col-sm-12 pt-3"> */}
            <div className="d-flex">
              <hr style={{ width: "4rem" }} className="text-light" />
              <a href="#techstacks" className="text-decoration-none">
                {" "}
                <p
                  className="ms-3 mt-1"
                  style={{ fontSize: "0.9rem", color: "#3bafca" }}
                >
                  TECH STACKS
                </p>
              </a>
            </div>
            <div className="d-flex">
              <hr style={{ width: "4rem" }} className="text-light" />
              <a href="#myprojects" className="text-decoration-none">
                {" "}
                <p
                  className="ms-3 mt-1"
                  style={{ fontSize: "0.9rem", color: "#3bafca" }}
                >
                  MY PROJECTS
                </p>
              </a>
            </div>
            <div className="d-flex">
              <hr style={{ width: "4rem" }} className="text-light" />
              <a href="#experience" className="text-decoration-none">
                {" "}
                <p
                  className="ms-3 mt-1"
                  style={{ fontSize: "0.9rem", color: "#3bafca" }}
                >
                  EXPERIENCE
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <img
            src={opeyemi}
            // src={ope}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
            width="250"
            height="250"
          />
        </div>
      </div>
      {/* <div className="row align-items-center px-4 pb-5">
        <div className="col-lg-12 col-md-7 col-sm-12 pt-3">
          <div className="d-flex">
            <hr style={{ width: "4rem" }} className="text-light" />
            <a href="#techstacks" className="text-decoration-none">
              {" "}
              <p className="ms-4 text-light" style={{ fontSize: "1.2rem" }}>
                TECH STACKS
              </p>
            </a>
          </div>
          <div className="d-flex">
            <hr style={{ width: "4rem" }} className="text-light" />
            <a href="#myprojects" className="text-decoration-none">
              {" "}
              <p className="ms-4 text-light" style={{ fontSize: "1.2rem" }}>
                MY PROJECTS
              </p>
            </a>
          </div>
          <div className="d-flex">
            <hr style={{ width: "4rem" }} className="text-light" />
            <a href="#experience" className="text-decoration-none">
              {" "}
              <p className="ms-4 text-light" style={{ fontSize: "1.2rem" }}>
                EXPERIENCE
              </p>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};
const TechStacks = () => {
  return (
    <div
      className="container-fluid pt-5"
      id="techstacks"
      style={{ backgroundColor: "#1B232E" }}
    >
      <h4 className="text-center text-light mb-4">Tech Stacks</h4>
      <div className="row align-items-center justify-content-evenly justify-content-center px-4 pt-3 pb-5">
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Node JS
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Express
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            MongoDB
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            MySQL
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            HTML
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-evenly justify-content-center px-4 pb-5">
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            SASS
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            JavaScript
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            React JS
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Next JS
          </p>
        </div>
        {/* <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            React-Bootstrap
          </p>
        </div> */}
      </div>
      <div className="row align-items-center justify-content-center px-4 pb-5">
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2 mx-5"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Git/GitHub
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2 mx-5"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Figma
          </p>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 mt-2 mx-5"
          style={{
            border: "1px solid #3BAFCA",
            backgroundColor: "#1B232E",
            borderRadius: "10px",
            width: "9rem",
            height: "2.5rem",
          }}
        >
          {" "}
          <p
            className="text-center mt-2"
            style={{
              color: "#ffffff",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Vercel
          </p>
        </div>
      </div>
    </div>
  );
};

const MyProjects = () => {
  const [active, setActive] = useState("firstButton");
  return (
    <div
      className="container-fluid px-5 pb-3 pt-5"
      id="myprojects"
      style={{ backgroundColor: "#222A35" }}
    >
      {" "}
      <h4 className="text-center text-white">My Projects</h4>
      <div className="text-center mt-3">
        <div className="mx-3">
          <button
            onClick={() => setActive("firstButton")}
            className="DevBtn mx-2 mt-3"
            style={{
              border: "1px solid #3BAFCA",
              // backgroundColor: "#1B232E",
              backgroundColor: "#3BAFCA",
              borderRadius: "10px",
              width: "9rem",
              height: "2.5rem",
              color: "#000000",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Development
          </button>

          {/* </button> */}
          <button
            onClick={() => setActive("secondButton")}
            className="DesBtn mx-2 mt-3"
            style={{
              border: "1px solid #3BAFCA",
              // backgroundColor: "#1B232E",
              backgroundColor: "#3BAFCA",
              borderRadius: "10px",
              width: "9rem",
              height: "2.5rem",
              color: "#000000",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.05rem",
            }}
          >
            Design
          </button>
        </div>
      </div>{" "}
      <div className="mt-3">
        {active === "firstButton" && (
          <h2>
            {" "}
            <div className="row justify-content-evenly">
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={cash2go}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">Cash2go</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Loan Prediction App
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        Node JS
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        Express
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        MongoDB
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a href="https://cash2go.netlify.app/" target="_blank">
                      <p style={{ fontSize: "14px" }}>Project Link</p>
                    </a>
                    <a
                      href="https://github.com/Cash2go-backend-org/cash2go-backend"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={haven}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">Haven</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Instructor-School Matching App
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        React-bootstrap
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        SASS
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        JavaScript
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a href="https://www.haveneduservices.com/" target="_blank">
                      <p style={{ fontSize: "14px" }}>Project Link</p>
                    </a>
                    <a
                      href="https://github.com/8thGear-Tech/haven-web-app"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={eightgear}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">8thGear</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Business Website
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        React
                      </p>
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        Bootstrap
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        SASS
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        JavaScript
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a href="https://8thgearpartners.com/" target="_blank">
                      <p style={{ fontSize: "14px" }}>Project Link</p>
                    </a>
                    <a
                      href="https://github.com/8thGear-Tech/8thGearWebsite"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={mindafrik}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">Mindafrik</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Virtual Therapy App
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        React-bootstrap
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        SASS
                      </p>
                      <p
                        className="card-text text-white ms-3"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        JavaScript
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a href="https://www.mindafrik.com/" target="_blank">
                      <p style={{ fontSize: "14px" }}>Project Link</p>
                    </a>
                    <a
                      href="https://github.com/8thGear-Tech/MindAfrik"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </h2>
        )}
        {active === "secondButton" && (
          <h2>
            {" "}
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={freshchow}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">Freshchow</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Food Delivery App
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        Figma
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a
                      href="https://www.figma.com/proto/LTRLUlKSkWQt4NLdKjkxqd/Fresh-Chow?type=design&node-id=233-903&t=tUAKC6Us4Z74bKAb-0&scaling=scale-down&page-id=3%3A2&starting-point-node-id=233%3A1483"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>Design Link</p>
                    </a>
                    {/* <a
                      href="https://github.com/8thGear-Tech/MindAfrik"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={jolevi}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">Jolevi</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Freelance Marketplace
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        Figma
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a
                      href="https://www.figma.com/proto/g4zcpr232hab89Yk3h51Ox/Jolevi?type=design&node-id=91-103&t=CwteqslBfHeZO3Sa-0&scaling=scale-down&page-id=1%3A2&starting-point-node-id=1%3A4"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>Design Link</p>
                    </a>
                    {/* <a
                      href="https://github.com/8thGear-Tech/MindAfrik"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={languagehub}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">LanguageHub</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Language Learning Platform
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        Figma
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a
                      href="https://www.figma.com/proto/jR5miImofMkFRGjqDDVGOn/LanguageHubng?node-id=3-15&scaling=scale-down"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>Design Link</p>
                    </a>
                    {/* <a
                      href="https://github.com/8thGear-Tech/MindAfrik"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
                <div className="mb-5 py-4 cardBg">
                  <div className="">
                    <img
                      src={portfolio}
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title text-white">Porfolio Website</h5>
                    <p
                      className="card-title text-white my-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Porfolio
                    </p>
                    <div className="d-flex mt-2">
                      {" "}
                      <p
                        className="card-text text-white"
                        style={{
                          fontSize: "14px",
                          opacity: ".8",
                          fontWeight: "200",
                        }}
                      >
                        Figma
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a
                      href="https://www.figma.com/proto/GvyThbsKeyZxLxXV8coXMG/titiekundayo?type=design&node-id=513-178&t=jPnMJbFVZjOmxlbU-0&scaling=scale-down&page-id=513%3A2&starting-point-node-id=513%3A1165"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>Design Link</p>
                    </a>
                    {/* <a
                      href="https://github.com/8thGear-Tech/MindAfrik"
                      target="_blank"
                    >
                      <p style={{ fontSize: "14px" }}>GitHub Link</p>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </h2>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div
        className="container-fluid py-5 px-3"
        id="#experience"
        style={{ backgroundColor: "#1B232E" }}
      >
        <div
          className="row g-0 aboutSection d-flex justify-content-center"
          id="experience"
        >
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="card-body">
              <h4 className="card-title text-white">Experience</h4>
              <p className="card-text experience-header mt-3 text-white ">
                Stutern, Lagos, Nigeria.
              </p>
              <p
                className="card-text experience-text text-white m-0 p-0"
                style={{ fontWeight: "200", opacity: ".8", fontSize: "15px" }}
              >
                Backend Developer, February 2023 - Present
              </p>
              <ul className="list-group list-group-flush experience-sub-text">
                <li className="ms-5 text-white">
                  Develop and maintain scalable backend infrastructure for web
                  applications using Node.js, Express, and MongoDB.
                </li>
                {/* <li className="ms-5 pt-1 text-white">
                  Work closely with designers and developers to meet project
                  requirements, fix bugs, and implement new features.
                </li> */}
              </ul>
              <p className="card-text experience-header mt-3 text-white">
                8thGear Hub & Venture Studio, Lagos, Nigeria
              </p>
              <p
                className="card-text experience-text text-white m-0 p-0"
                style={{ fontWeight: "200", opacity: ".8", fontSize: "15px" }}
              >
                Frontend Developer, April 2021 - Present
              </p>
              <ul className="list-group list-group-flush experience-sub-text">
                <li className="ms-5 text-white">
                  Lead and collaborate with a team to develop and maintain
                  scalable solutions using React.js, Bootstrap, Node.js,
                  Express, and MySQL
                </li>
                <li className="ms-5 pt-1 text-white">
                  Manage the IT infrastructure, and analyze web traffic for
                  future enhancements and optimizations.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1 d-flex justify-content-center">
            <div
              className="vertical-line d-lg-block d-md-block d-sm-none"
              style={{ borderLeft: "1px solid #fff", height: "100%" }}
            ></div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="card-body">
              <h4 className="card-title experience-text text-white">
                Education
              </h4>
              <p className="card-text experience-header mt-3 text-white"></p>
              <ul className="list-group list-group-flush experience-sub-text">
                <li className="ms-5 text-white ">
                  {" "}
                  Stutern Graduate Accelerator
                  <ul>
                    <li
                      style={{
                        fontWeight: "200",
                        opacity: ".8",
                        fontSize: "15px",
                      }}
                    >
                      Backend Development, Feb 2023 – July 2023
                    </li>
                  </ul>
                </li>
                <li className="ms-5 text-white mt-3">
                  {" "}
                  Innkeeper Talent Accelerator
                  <ul>
                    <li
                      style={{
                        fontWeight: "200",
                        opacity: ".8",
                        fontSize: "15px",
                      }}
                    >
                      Frontend Development, Dec 2021 – Feb 2022
                    </li>
                  </ul>
                </li>
                <li className="ms-5 text-white mt-3">
                  {" "}
                  Ladoke Akintola University of Technology
                  <ul>
                    <li
                      style={{
                        fontWeight: "200",
                        opacity: ".8",
                        fontSize: "15px",
                      }}
                    >
                      Bachelor of Technology (Hons.) Science Laboratory
                      Technology Sep 2013 – Dec 2018
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5 pt-3 px-5">
          {" "}
          <div>
            <a
              href="mailto:opeyemibioku@gmail.com"
              style={{ color: "#3BAFCA" }}
            >
              opeyemibioku@gmail.com
            </a>
          </div>
          <div className="">
            <a href="https://github.com/opeyemibioku">
              <i className="bi bi-github text-light mx-2" target="_blank"></i>
            </a>

            <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank">
              <i className="bi bi-linkedin text-light mx-2"></i>
            </a>
            <a href="">
              <i
                className="bi bi-instagram text-light mx-2"
                target="_blank"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid pt-5 px-5"
        style={{ backgroundColor: "#222A35" }}
        // style={{ backgroundColor: "#1B232E" }}
      >
        <div className="d-flex justify-content-between">
          {" "}
          <div>
            <a
              href="mailto:opeyemibioku@gmail.com"
              style={{ color: "#3BAFCA" }}
            >
              opeyemibioku@gmail.com
            </a>
          </div>
          <div className="">
            <a href="https://github.com/opeyemibioku">
              <i className="bi bi-github text-light mx-2" target="_blank"></i>
            </a>

            <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank">
              <i className="bi bi-linkedin text-light mx-2"></i>
            </a>
            <a href="">
              <i
                className="bi bi-instagram text-light mx-2"
                target="_blank"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

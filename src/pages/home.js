import ope from "../assets/images/ope.png";

import project from "../assets/images/projects/project.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <TechStacks />
      <MyProjects />
      <Experience />
    </>
  );
};

const Hero = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#222A35" }}>
      <div className="row align-items-center justify-content-center px-4 pt-5">
        <div className="col-lg-2 col-md-1 col-sm-12 pt-3">
          <div className="my-3">
            <a href="https://github.com/opeyemibioku">
              <i className="bi bi-github text-light" target="_blank"></i>
            </a>
          </div>
          <div className="my-3">
            <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank">
              <i className="bi bi-linkedin text-light"></i>
            </a>
          </div>
          <div className="my-3">
            <a href="">
              <i className="bi bi-instagram text-light" target="_blank"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12 pt-3">
          <h1 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none text-light">
            Lorem Ipsum
            <br />
          </h1>
          <h2 className=" d-xs-block d-sm-block d-md-block d-lg-none text-light">
            Lorem Ipsum
            <br />
          </h2>
          <p className="text-light" style={{ fontSize: "1.15rem" }}>
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="col-lg-5 col-md-4 col-sm-12">
          <img
            src={ope}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
      <div className="row align-items-center px-4 pb-5">
        <div className="col-lg-12 col-md-7 col-sm-12 pt-3">
          <div className="d-flex">
            <hr style={{ width: "4rem" }} className="text-light" />
            <a href="" className="text-decoration-none">
              {" "}
              <p className="ms-4 text-light" style={{ fontSize: "1.2rem" }}>
                LOREMIPSUM
              </p>
            </a>
          </div>
          <div className="d-flex">
            <hr style={{ width: "4rem" }} className="text-light" />
            <a href="" className="text-decoration-none">
              {" "}
              <p className="ms-4 text-light" style={{ fontSize: "1.2rem" }}>
                LOREMIPSUM
              </p>
            </a>
          </div>
          <div className="d-flex">
            <hr style={{ width: "4rem" }} className="text-light" />
            <a href="" className="text-decoration-none">
              {" "}
              <p className="ms-4 text-light" style={{ fontSize: "1.2rem" }}>
                LOREMIPSUM
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const TechStacks = () => {
  return (
    <div
      className="container-fluid pt-5"
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
            React-Bootstrap
          </p>
        </div>
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
            Vercel
          </p>
        </div>
      </div>
    </div>
  );
};

const MyProjects = () => {
  return (
    <div
      className="container-fluid px-5 pb-3 SectionTwoBg mt-5"
      style={{ backgroundColor: "#222A35" }}
    >
      {" "}
      <h4 className="text-center">My Projects</h4>
      <div className="row justify-content-evenly">
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          <div className="mb-5 py-4 cardBg">
            <div className="">
              <img
                src={project}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="card-body mt-3">
              <h4 className="card-title text-white">Title</h4>
              <div className="d-flex mt-2">
                {" "}
                <p className="card-text text-white">React</p>
                <p className="card-text ms-3 text-white">Node</p>
                <p className="card-text ms-3 text-white">Node</p>
                <p className="card-text ms-3 text-white">Node</p>
                {/* <p className="card-text mt-2">
                  React Node Express React Node Express
                </p> */}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a href="">
                <p>Project Link</p>
              </a>
              <a href="">
                <p>GitHub Link</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          <div className="mb-5 py-4 cardBg">
            <div className="">
              <img
                src={project}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="card-body mt-3">
              <h4 className="card-title text-white">Title</h4>
              <div className="d-flex mt-2">
                {" "}
                <p className="card-text text-white">React</p>
                <p className="card-text ms-3 text-white">Node</p>
                <p className="card-text ms-3 text-white">Node</p>
                <p className="card-text ms-3 text-white">Node</p>
                {/* <p className="card-text mt-2">
                  React Node Express React Node Express
                </p> */}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a href="">
                <p>Project Link</p>
              </a>
              <a href="">
                <p>GitHub Link</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          <div className="mb-5 py-4 cardBg">
            <div className="">
              <img
                src={project}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="card-body mt-3">
              <h4 className="card-title text-white">Title</h4>
              <div className="d-flex mt-2">
                {" "}
                <p className="card-text text-white">React</p>
                <p className="card-text ms-3 text-white">Node</p>
                <p className="card-text ms-3 text-white">Node</p>
                <p className="card-text ms-3 text-white">Node</p>
                {/* <p className="card-text mt-2">
                  React Node Express React Node Express
                </p> */}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a href="">
                <p>Project Link</p>
              </a>
              <a href="">
                <p>GitHub Link</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{ backgroundColor: "#1B232E" }}
      >
        <div
          className="row g-0 aboutSection d-flex justify-content-center"
          id="experience"
        >
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="card-body">
              <h4 className="card-title text-white">EXPERIENCE</h4>
              <p className="card-text experience-header mt-3 text-white">
                (8thGear Partners Limited, Lagos, Nigeria.)
              </p>
              <p className="card-text experience-text text-white">
                April 2021 - Present
              </p>
              <p className="card-text experience-text text-white">
                Frontend Developer
              </p>
              <p className="card-text experience-text text-white">Role</p>
              <ul className="list-group list-group-flush experience-sub-text">
                <li className="ms-5 text-white">
                  Develop and maintain functional and interactive user interface
                  using frontend technologies.
                </li>
                <li className="ms-5 pt-1 text-white">
                  Work closely with designers and developers to meet project
                  requirements, fix bugs, and implement new features.
                </li>
                <li className="ms-5 pt-1 text-white">
                  Manage and update existing web apps and websites to improve
                  user experience and web functionality.
                </li>
                <li className="ms-5 pt-1 text-white">
                  Optimize web apps and websites performance using modern web
                  standards and design.
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
                EDUCATION
              </h4>
              <ul className="list-group list-group-flush experience-sub-text">
                <li className="ms-5 text-white">
                  B.Tech Science Laboratory Technology, LAUTECH (2019).
                </li>
                <li className="ms-5 pt-1 text-white">
                  NYSC discharge certificate (March 9, 2021).
                </li>
                <li className="ms-5 pt-1 text-white">
                  Programming Foundations: Fundamentals, LinkedIn (Dec 2020).
                </li>
                <li className="ms-5 pt-1 text-white">
                  Jobberman Soft-Skills Training (March 2021).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Experience = () => {
//   return (
//     <>
//       <div
//         className="container-fluid pt-5"
//         style={{ backgroundColor: "#1B232E" }}
//       >
//         <div
//           className="row g-0 aboutSection d-flex justify-content-center justify-content-around"
//           id="experience"
//         >
//           <div className="col-lg-4">
//             {/* <div className=""> */}
//             <div className="card-body">
//               <h4 className="card-title  text-white">EXPERIENCE</h4>
//               <p className="card-text experience-header mt-3 text-white">
//                 (8thGear Partners Limited, Lagos, Nigeria.)
//               </p>
//               <p className="card-text experience-text text-white">
//                 April 2021 - Present
//               </p>
//               <p className="card-text experience-text text-white">
//                 Frontend Developer
//               </p>
//               <p className="card-text experience-text text-white">Role</p>
//               <div className="vl ms-5"></div>
//               <ul className="list-group list-group-flush experience-sub-text">
//                 <li className="ms-5 text-white">
//                   Develop and maintain functional and interactive user interface
//                   using frontend technologies.
//                 </li>
//                 <li className="ms-5 pt-1 text-white">
//                   Work closely with designers and developers to meet project
//                   requirements, fix bugs and implement new features.
//                 </li>
//                 <li className="ms-5 pt-1 text-white">
//                   Manage and update existing web apps and websites to improve
//                   user experience and web functionality.
//                 </li>
//                 <li className="ms-5 pt-1 text-white">
//                   Optimize web apps and websites performance using modern web
//                   standards and design.
//                 </li>
//               </ul>
//             </div>
//             {/* </div> */}
//           </div>
//           <div
//             className="vertical-line col-lg-2"
//             style={{
//               borderLeft: "1px solid #fff",
//               height: "400px",
//               marginLeft: "15px",
//             }}
//           ></div>
//           <div className="col-lg-4">
//             <div className="">
//               <div className="card-body">
//                 <h4 className="card-title experience-text text-white">
//                   EDUCATION
//                 </h4>
//                 <ul className="list-group list-group-flush experience-sub-text">
//                   <li className="ms-5 text-white">
//                     B.Tech Science Laboratory Technology, LAUTECH (2019).
//                   </li>
//                   <li className="ms-5 pt-1 text-white">
//                     NYSC discharge certificate (March,9 2021).
//                   </li>
//                   <li className="ms-5 pt-1 text-white">
//                     Programming Foundations: Fundamentals, LinkedIn (Dec, 2020).
//                   </li>
//                   <li className="ms-5 pt-1 text-white">
//                     Jobberman Soft-Skills Training (March 2021).
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Home;

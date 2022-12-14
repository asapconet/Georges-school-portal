import * as React from "react";
import "./Styles/App.css";
// import { Icons } from "./assets/icons";
import Header from "./components/header";
import SchoolLogo from "./assets/images/schoolLogo.png";
import Stepper1 from "./Pages/stepper1";
import Events from "./Pages/events";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <div>
        <h1 className="logo--cont">
          <img src={SchoolLogo} alt="school Logo" />
        </h1>
        <nav>
          <ul className="home--nav">
            <li>Home</li>
            <li>About</li>
            <li>Academics</li>
            <li>Admission</li>
            <li>Research</li>
            <li>Resource</li>
            <li>Unit</li>
            <li>Campus Life</li>
            <li>Tetfund</li>
          </ul>
        </nav>
      </div>
      <div className="landing">
        <div className="landing--content">
          <h4>The University for National Unity</h4>
          <h1>
            Welcome to University of <br /> Abuja
          </h1>
          <button className="gen-btn">Find out More </button>
          <div className="slidders ">
            <div className="">
              <h4>
                <a href="#">
                  Lorem I warmly welcome you to the University of Abuja, the
                  UofA of Nigeria,
                </a>
              </h4>
              <p>
                {" "}
                I warmly welcome you to the University of Abuja, the UofA of
                Nigeria, the only Federal University in the heart (FCT) of
                Nigeria, !{" "}
              </p>
            </div>
            <div className="col-span-1 uppercase">
              <h4>
                <a href="#">
                  Lorem I warmly welcome you to the University of Abuja, the
                  UofA of Nigeria,{" "}
                </a>
              </h4>
              <p>
                {" "}
                I warmly welcome you to the University of Abuja, the UofA of
                Nigeria, !{" "}
              </p>
            </div>
            <div className="col-span-1 uppercase">
              <h4>
                <a href="#">
                  Lorem I warmly welcome you to the University of Abuja, the
                  Nigeria, the only Federal University in the heart (FCT) of
                  UofA of Nigeria,{" "}
                </a>
              </h4>
              <p>
                {" "}
                I warmly welcome you to the University of Abuja, the UofA of
                Nigeria, !{" "}
              </p>
            </div>
            <div className="col-span-1 uppercase">
              <h4>
                <a href="#">
                  Lorem I warmly welcome you to the University of Abuja, the
                  UofA of Nigeria,{" "}
                </a>
              </h4>
              <p>
                {" "}
                I warmly welcome you to the University of Abuja, the UofA of
                Nigeria, the only Federal University in the heart (FCT) of
                Nigeria, !{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Stepper1 />
      <Events />
      <Footer />
    </>
  );
}

export default App;

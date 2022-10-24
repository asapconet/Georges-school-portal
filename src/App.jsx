import * as React from "react";
import "./App.css";
// import { Icons } from "./assets/icons";
import Header from "./components/header";
import SchoolLogo from "./assets/images/schoolLogo.png";

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>
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
          <h5>The University for National Unity</h5>
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
            </div>
            <div className="col-span-1 uppercase">
              <h4>
                <a href="#">
                  Lorem I warmly welcome you to the University of Abuja, the
                  UofA of Nigeria,{" "}
                </a>
              </h4>
            </div>
            <div className="col-span-1 uppercase">
              <h4>
                <a href="#">
                  Lorem I warmly welcome you to the University of Abuja, the
                  UofA of Nigeria,{" "}
                </a>
              </h4>
            </div>
            <div className="col-span-1 uppercase">
              <h4>
                <a href="#">
                  Lorem I warmly welcome you to the University of Abuja, the
                  UofA of Nigeria,{" "}
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

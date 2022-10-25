import React from "react";
import { FaArrowRight, FaFacebook, FaTwitter } from "react-icons/fa";
import "../Styles/event.css";
import "../Styles/spotlight.css";
import bestStudent from "../assets/images/bestStudent.png";
import socialOne from "../assets/images/social1.jpg";
import socialTwo from "../assets/images/social2.png";

const Events = () => {
  return (
    <>
      <div className="event--container">
        <h1> Events</h1>
        <div className="envent--content">
          <div className="content--one">
            <button>
              MAR <p>08</p>
            </button>
            <span>
              <h5>09:00am</h5>
              <h2>
                Matriculation Ceremony for <br /> 2022/2023
              </h2>
              <p>This is to inform the University community...</p>
            </span>
          </div>
          <div className="content--two">
            <button>
              More Events <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="spotlight--container">
        <h1>STUDENTS SPOTLIGHTS</h1>
        <div className="student">
          <header>
            <h3>Mrs George Ogbedo Rowe</h3>
            <p>
              Computer Science Student <br /> 2022/2023
            </p>
          </header>
          <figure>
            <img src={bestStudent} alt="best sTudent" />
          </figure>
          <p>
            Mrs George Ogbedo Rowe emerged the Overall Best Student of the UofA
            in the 2018/2019 Academic Session. She graduated from the Department
            of Statistics with 4.83 Cumulative Grade Point Average (CGPA).
          </p>
        </div>
        <div className="divider">...</div>
        <div>
          <header className="social--title">
            <h2>UNIABUJA SOCIAL</h2>
            <div>
              <span>
                <FaFacebook />
              </span>
              <FaTwitter />
            </div>
          </header>
          <div className="gallery">
            <img src={socialOne} alt="social1" />
            <img src={socialTwo} alt="social2" />
            <img src={socialOne} alt="social3" />
            <img src={socialTwo} alt="social4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;

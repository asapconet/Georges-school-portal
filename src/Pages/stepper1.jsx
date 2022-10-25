import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../Styles/stepper1.css";
import vCImg from "../assets/images/vCImg.png";
import player from "../assets/images/play.png";

const Stepper1 = () => {
  return (
    <>
      <div className="container">
        <span className="container--stuffs">
          <img src={vCImg} alt="vCimg" />
          <h2>Welcome to the University of Abuja </h2> I warmly welcome you to
          the University of Abuja, the UofA of Nigeria, the only Federal
          University in the heart (FCT) of Nigeria, the University for National
          Unity! The UofA of Nigeria was established in 1988 with three colleges
          namely: College of Arts and Education; College of Law, Management and
          Social Sciences; and College of Science and Agriculture. The total
          population of students at inception was less than five hundred, but
          today, the UofA has twelve faculties and about to start three new
          ones, and has more than forty thousand students! The UofA has
          continued to witness tremendous and rapid growth in terms of academic
          programmes, infrastructural development, staff strength, students’
          population, research, and innovation. The University of Abuja is the
          model University in Nigeria, and has developed robust developmental
          strategies to meet and sustain that status and remain a pride of
          Nigerians and humanity in the provision of higher education. It is
          dedicated to quality teaching, learning, and research. It offers both
          staff and students a serene and conducive environment for living,
          working, teaching, learning, and research. In developing to be a
          global University, we are strengthening electronic technology through
          smart classrooms, computer laboratories... <button>Read More</button>{" "}
          <figcaption>Professor Abdul-Rasheed Na'Allah</figcaption>
        </span>
      </div>
      <div className="play--sec">
        <div className="play--items">
          <figure>
            <img src={player} alt="play btn" />
          </figure>
          <text>
            <h3>Explore</h3>
            <h2>The University of Abuja ( UNIABUJA )</h2>
            <p>
              Take a tour around the University, get to see why we are the best
              University
            </p>
            <button>
              Explore UNIABUJA <FaArrowRight />
            </button>
          </text>
        </div>
      </div>
    </>
  );
};

export default Stepper1;

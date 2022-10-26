import React from "react";
import "../Styles/footer.css";
import { CiMail } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { BsTelephoneFill } from "react-icons/bs";
import schoolLogo from "../assets/images/schoolLogoTwo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div className="foot--container">
          <div className="container--one">
            <figure>
              <img src={schoolLogo} alt="schoolLogo" />
            </figure>
            <span>
              <GoLocation />
              <a href="#">
                Main Campus Airport <br /> road,Abuja <br /> FCT Nigeria
              </a>
            </span>
            <span>
              <CiMail />
              <a href="mailto:info@uniabuja.edu.ng">info@uniabuja.edu.ng</a>
            </span>
            <span>
              <BsTelephoneFill />
              <a href="tel: 911">+234 000 3334 44533</a>
            </span>
            <p>For more enquiries</p>
            <button>Contact Us</button>
          </div>
          <div>
            <h4>Health and Safety</h4>
            <a href="#">Police</a>
            <a href="#">Institution Securities</a>
            <a href="#">Safty Alert</a>
            <a href="#">Health Services</a>
            <a href="#">Counceling & Psychological Service</a>
            <a href="#">Health & Safety</a>
            <a href="#">Giving/Donatins</a>
            <h4>StakeHolder</h4>
            <a href="#">Tetfund</a>
            <a href="#">NUC</a>
            <a href="#">Ministry of Education</a>
          </div>
          <div>
            <h4>Students</h4>
            <a href="#">Students</a>
            <a href="#">Schedule of Classes</a>
            <a href="#">Course Information</a>
            <a href="#">Intergrated Portal</a>
            <a href="#">Financials</a>
            <a href="#">Technical Services</a>
            <a href="#">Work, Stores</a>
            <h4>Alumni</h4>
            <a href="#">Awards</a>
            <a href="#">Events</a>
            <a href="#">Online Communities</a>
            <a href="#">Projects</a>
            <a href="#">Leaderships</a>
            <a href="#">Benefits & Resources</a>
            <a href="#">Alumi</a>
          </div>
          <div>
            <h4>Other Links</h4>
            <a href="#">FAQ</a>
            <a href="#">Campuses</a>
            <a href="#">Global Locations</a>
            <a href="#">Sitemaps</a>
            <a href="#">Enterprices</a>
            <a href="#">Teaching Practice</a>
            <h4>Career</h4>
            <a href="#">Vacancies</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="footer--bottom">
          Copyright © 2021 : University of Abuja{" "}
          <span>
            <FaTwitter />
            <FaFacebook />
            <FaLinkedinIn />
            <FaInstagram />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

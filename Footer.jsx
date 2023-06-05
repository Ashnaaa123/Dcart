import React, { useEffect, useState } from "react";
import "./footer.scss";
import video3 from "../../Assets/video (3).mp4";
import { FiSend } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [content,setContent] = useState();

  const sendComplaint=()=>{
    var id = window.sessionStorage.getItem("company-id");
    axios
      .get("http://localhost/d-cart/backend/Company/Complaint.php?id=" + id+"&content="+content)
      .then((response) => response.data[0])
      .then((data) => {
        alert("Complaint Submitted")
      });
  }

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video3} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <h2>Get in Touch with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              onChange={(e)=>setContent(e.target.value)}
              placeholder="Enter Your Complaint"
            />
            <button data-aos="fade-up" className="btn flex" type="submit" onClick={sendComplaint}>
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <AiOutlineShoppingCart className="icon" /> DCART.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet,ffgffgff ffgffgffddd
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          {/*Group one  */}
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
             <span className="groupTitle">USEFUL LINKS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/Company">
                  Home
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/Company/Up">
                  Profile
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/Company/Upd">
                  Edit Profile
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/Company/Designer">
                  Designer
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/Company/OwnDesign">
                  Own Design
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/Company/Product_list">
                  List
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/Company/booking">
                  Bookings
                </Link>
              </li>
              </div>
              </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED ISRA-TECH 2022 </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

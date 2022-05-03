import React from "react";
import img from "../Data/img.png";
import "../styles/footer.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <div className="footermain">
        <a className="arrowstart">
          <IoIosArrowBack />
        </a>

        <div>
          <img src={img} alt="course"></img>
        </div>
        <div className="footertext">
          <h2>UI/UX Designing Course</h2>
          <p>
            Lorem ipsum is the dummy text used tokdkdi kdolll kolk yundjkdi
            idkdldie dkdldiek idiekm in the nrooot .
          </p>
          <div className="hoh">
            <h2 >Rs 699</h2>
          </div>
        </div>
        <a className="arrowend">
          <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
};

export default Footer;

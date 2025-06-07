import img from "../../assets/frey-2844c621-Picsart-AiImageEnhancer.jpeg";
import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-display-div">
        <div className="about-div-img">
          <img src={img} />{" "}
        </div>

        <div className="about-content-div">
          <h2>MY MISSION STATEMENT</h2>
          <p>
            {" "}
            I'm a Financial Consultant and Wealth Creator living in USA, who has
            over 20 years of professional experience, and has merits of awards
            as well as Professional Certificate/ license in Europe ,
            North-American and Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import "./about.css";
import Award from "../../img/award.png";
import AboutMe from "../../img/AboutMe.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AboutMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Experienced in Java Programming Language and DSA with 4 star rated for java coding in hacker rank. 
          In addition, I’m experienced in the MERN stack, building full-stack web applications that combine powerful backend services with user-friendly frontend interfaces.Developed projects using HTML, CSS, JavaScript, and frameworks like Bootstrap. I specialize in frontend development and have built interactive projects like Blogs template, Analog clock, Snake Game etc.Aspiring for a challenging career in Software development as to leverage my learned skills and experience for best results.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
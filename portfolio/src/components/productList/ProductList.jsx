import "./productList.css";
import Product from "../product/Product";
import Project6 from "../../img/projects/project1.png"
import Project1 from "../../img/projects/project2.png";
import Project3 from "../../img/projects/project3.png";
import Project2 from "../../img/projects/project4.png";
import Project4 from "../../img/projects/project5.png";
import Project5 from "../../img/projects/project6.avif";

const products = [
  {
    id: 1,
    img: Project1,
    link: "https://github.com/SujitKumarGupta/Car-Price-Predictor",
    title: "Car Price Predictor",
    desc: "Predicts used car prices using ML (Random Forest).",
  },
  {
    id: 2,
    img: Project2,
    link: "https://github.com/SujitKumarGupta/Sales-Forecasting-System",
    title: "Spotify Clone",
    desc: "Tried to replicate the front end of the original spotify website.",
  },
  {
    id: 3,
    img: Project3,
    link: "https://github.com/SujitKumarGupta/IoT-Energy-Monitoring",
    title: "IoT Energy Monitoring",
    desc: "Dashboard to monitor office energy consumption in real-time.",
  },
  {
    id: 4,
    img: Project5,
    link: "https://github.com/SujitKumarGupta/AI-Voice-Assistant",
    title: "AI Voice Assistant",
    desc: "Python-based Alexa-like personal assistant.",
  },
  {
    id: 5,
    img: Project4,
    link: "https://github.com/SujitKumarGupta/Visual-Defect-Detection",
    title: "Classic Snake Game",
    desc: "The game is rendered on a grid system, and the snake is controlled using keyboard arrow keys. It features real-time animations, collision detection, score tracking, and local storage for high score persistence.",
  },
  {
    id: 6,
    img: Project6,
    link: "https://github.com/SujitKumarGupta/Airbnb-Web-App",
    title: "Airbnb-Inspired Web App",
    desc: "Full-stack EJS web app for property listing and booking.",
  },
];

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          A collection of AI, IoT, and full-stack projects that reflect my
          skills in software engineering, design, and innovation.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

import "./Portal.css"; // Importing CSS file for styling

// Import the image
import flowerImage from "../assets/flower.png";
import flowerImage2 from "../assets/flower2.png";

function Portal() {
  return (
    <div className="portal-container">
      <div className="content">
        <h1 className="main-heading">Makar Sankranti Special Offer</h1>
        <h2 className="sub-heading-one">Hydrafacial only in 1500 Rs...</h2>

        <div className="services-images-container">
          {/* Services Section */}
          <div className="services-section">
            <div className="services-heading">
              <hr className="line" />
              <h3 className="our-services">OUR SERVICES</h3>
            </div>
            <ul>
              <li>IPL laser hair removal</li>
              <li>Hydrafacial</li>
              <li>Antidandruff treatment</li>
              <li>Antihairloss treatment</li>
              <li>High frequency</li>
              <li>CC Glow</li>
              <li>BB Glow</li>
              <li>Mole/Wart removal</li>
            </ul>
          </div>

          {/* Images Section */}
          <div className="images-section">
            <div className="image-bottom">
              <img src={flowerImage} alt="Flower 1" />
            </div>
            <div className="image-top">
              <img src={flowerImage2} alt="Flower 2" />
            </div>
          </div>
        </div>

        <h3 className="sub-heading-two">SKINOLOGY</h3>
        <div className="cosmetics">
          <p>Advanced Aesthetics</p>
          <p>& Cosmetology</p>
        </div>

        <div className="information">
          <h4>Contact No: 8055135567</h4>
          <h4>Address- B.G.Vikhe Patil Plaza, Chitralay Chauk, Loni</h4>
        </div>
      </div>
    </div>
  );
}

export default Portal;

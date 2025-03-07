import React from "react";
import "../src/App.css";
import "../src/index.css";
import img1 from "./assets/Vector.svg";
import img2 from "./assets/Intersect.svg";
import img3 from "./assets/pngwing 4.png";
import img4 from "./assets/Fattoush salad.png";
import img5 from "./assets/Mask group (1).png";
import mask from "./assets/Mask group (3).png";
import mask2 from "./assets/Mask group (4).png";
import mask3 from "./assets/Mask group (5).png";
import star from "./assets/fi-sr-star.png";
import salad from "./assets/fi-rr-salad.png";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div className="logo">
            <h2>
              <span className="logo_f">F</span>oodi
            </h2>
          </div>
          <div className="centre">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Offers</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="src">
              <img src={img1} alt="" />
              
            </div>
            <div className="button">
              <button>Contact</button>
            </div>
          </div>
        </nav>
        <div className="header">
          <div className="left2">
            <div className="global-text">
              <h1>
                Dive into Delights Of Delectable <span>Food</span>
              </h1>
              <h3>
                Where Each Plate Weaves a Story of Culinary Mastery and
                Passionate Craftsmanship
              </h3>
              <button>Order Now</button>
            </div>
          </div>
          <div className="right4">
            <div className="image">
              <img className="girl" src={img2} alt="" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="con">
          <div className="txt">
            <p>CUSTOMER FOVORITES</p>
            <h2>Popular Categories</h2>
          </div>
          <div className="cards">
            <div className="card">
              <img src={img3} alt="" />
              <h4>Main dish</h4>
              <p>(bg dish)</p>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <h4>Main dish</h4>
              <p>(bg dish)</p>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <h4>Main dish</h4>
              <p>(bg dish)</p>
            </div>
          </div>
          <div className="txt">
            <p>SPECIAL DISHES</p>
            <h2>Standout Dishes From Our Menu</h2>
          </div>
          <div className="cards">
            <div className="card-2">
              <img src={img4} alt="" />
              <h4>Fattoush salad</h4>
              <p>Description of the item</p>
            </div>
            <div className="card-2">
              <img src={img4} alt="" />
              <h4>Fattoush salad</h4>
              <p>Description of the item</p>
            </div>
            <div className="card-2">
              <img src={img4} alt="" />
              <h4>Fattoush salad</h4>
              <p>Description of the item</p>
            </div>
          </div>
          <div className="header3">
            <div className="left4">
              <img src={img5} alt="" />
            </div>
            <div className="right3">
              <div className="global-text4">
                <h1>What Our Customers Say About Us</h1>
                <h3 className="vv">
                  “I had the pleasure of dining at Foodi last night, and I'm
                  still raving about the experience! The attention to detail in
                  presentation and service was impeccable”
                </h3>
                <div className="comment">
                  <img className="one" src={mask} alt="" />
                  <img className="two" src={mask2} alt="" />
                  <img className="three" src={mask3} alt="" />
                  <img className="four" src={star} alt="" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="header">
          <div className="left3">
            <div className="global-text1">
              <h1>
                Dive into Delights Of Delectable <span>Food</span>
              </h1>
              <h3>
                Where Each Plate Weaves a Story of Culinary Mastery and <br />
                Passionate Craftsmanship
              </h3>
              <button>Order Now</button>
            </div>
          </div>
          <div className="right3">
            <div className="box">
              <div className="img--2">
                <img src={salad} alt="" />
              </div>
              <div className="tex">
                <p>Catering</p>
                <h4>Delight your guests with our flavors and presentation</h4>
              </div>
            </div>
            <div className="box">
              <div className="img--2">
                <img src={salad} alt="" />
              </div>
              <div className="tex">
                <p>Catering</p>
                <h4>Delight your guests with our flavors and presentation</h4>
              </div>
            </div>
            <div className="box">
              <div className="img--2">
                <img src={salad} alt="" />
              </div>
              <div className="tex">
                <p>Catering</p>
                <h4>Delight your guests with our flavors and presentation</h4>
              </div>
            </div>
            <div className="box">
              <div className="img--2">
                <img src={salad} alt="" />
              </div>
              <div className="tex">
                <p>Catering</p>
                <h4>Delight your guests with our flavors and presentation</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h1>Owered by Burhon</h1>
      </footer>
    </React.Fragment>
  );
};

export default App;
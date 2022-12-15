import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="box i-box">
            <h2>Vue</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae delectus est dolorum, unde, beatae fugiat laudantium,
              hic quae dolore illum animi aliquid nulla consequatur minima
              tenetur repudiandae harum eaque alias!
            </p>
            <p className="contect-num">(0600) 874 548</p>
          </div>
          <div className="box">
            <h2>Social Media</h2>
            <ul>
              <li>youtube</li>
            </ul>
            <ul>
              <li>Instagram</li>
            </ul>
            <ul>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="box">
            <h2>Location</h2>
            <ul>
              <li>Mumbai</li>
            </ul>
            <ul>
              <li>Delhi</li>
            </ul>
            <ul>
              <li>Nagpur</li>
            </ul>
          </div>
          <div className="box">
            <h2>About</h2>
            <ul>
              <li>Contect Us</li>
            </ul>
            <ul>
              <li>About</li>
            </ul>
            <ul>
              <li>Faq</li>
            </ul>
          </div>
          <div className="box img-box">
            <img src="/img/big-sale.jpg" alt="footer-pic" />
          </div>
        </div>
      </footer>
    </>
  );
}

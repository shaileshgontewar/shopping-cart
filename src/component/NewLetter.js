import React from "react";

export default function Newsletter() {
  return (
    <>
      <section>
        <h1>News Feed</h1>
        <div className="news-row">
          <div className="new-col">
            <img src="/img/one.png" alt="pic1" />
            <h3>Product information</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tenetur maiores,
            </p>
          </div>
          <div className="new-col">
            <img src="/img/two.png" alt="pic2" />
            <h3>Product information</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tenetur maiores,
            </p>
          </div>
          <div className="new-col">
            <img src="/img/three.png" alt="pic3" />
            <h3>Product information</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tenetur maiores,
            </p>
          </div>
        </div>
        <div className="news">
          <div className="new-box">
            <h2>Newsletter</h2>
            <p>Event </p>
            <button>Favourite View</button>
          </div>
        </div>
      </section>
    </>
  );
}

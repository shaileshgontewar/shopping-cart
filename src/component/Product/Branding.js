import React from "react";

export default function Branding() {
  return (
    <>
      <section className="brand-shopping">
        <div className="brand">
          <img src="./img/shop1.jpeg" alt="shopping" />
          <div className="button">
            <span>New Year Trend</span>
            <b>2019</b>
          </div>
        </div>
        {/* <div className="brand">
          <img src="./img/shop2.jpeg" alt="shopping" />
        </div> */}
        <div className="brand">
          <img src="./img/shop3.jpeg" alt="shopping" />
          <div className="button shop2">
            <p className="perfect">Perfect Look</p>
            <h2>Festive Look</h2>
            <p>your favourite shopping</p>
            <button>
              <b>Discover...!</b>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

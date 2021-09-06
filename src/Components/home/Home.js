import React from "react";
import "./Home.css";
import Product from "../product/Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12312332"
          title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
          price={999 }
          rating={4}
          image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg"
        />
        <Product
          id="12312334"
          title="BLACK+DECKER Lightweight Hand Mixer, White, MX1500W"
          price={80}
          rating={2}
          image="https://m.media-amazon.com/images/I/710J7T4v5KL._AC_SY450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12312337"
          title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
          price={360}
          rating={4}
          image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
        />
        <Product
          id="123123321"
          title="SAMSUNG Galaxy Watch 4 44mm Smartwatch with ECG Monitor Tracker for Health Fitness"
          price={450}
          rating={5}
          image="https://m.media-amazon.com/images/I/41MEOjGz0LL._AC_SX569_.jpg"
        />
        <Product
          id="12312331"
          title="
          Samsung Galaxy A42 5G, Factory Unlocked Smartphone"
          price={300}
          rating={2}
          image="https://m.media-amazon.com/images/I/61w77bA742L._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12312344"
          title="
          SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black"
          price={780}
          rating={4}
          image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

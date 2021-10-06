import React from "react";
import { RichText } from "prismic-reactjs";

//  position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

const HeroSlice = ({ slice }) => (
  <section>
    <span className="title">
      <div
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          src={slice.primary.BackgroundImage.url}
          alt={slice.primary.BackgroundImage.alt}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <RichText className="" render={slice.primary.HeroText} />
        </div>
      </div>
    </span>

    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default HeroSlice;

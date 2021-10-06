import React from "react";
import { RichText, Date as ParseDate } from "prismic-reactjs";

const BannerSlice = ({ slice }) => (
  <section>
    <div className="contentSection">
      <div className="titleSection">
        <p className="title">
          {slice.primary.title ? (
            <h1>
              <RichText render={slice.primary.title} />
            </h1>
          ) : (
            <h1>Pavemint title</h1>
          )}
        </p>
        {slice.primary.description ? (
          <span>{slice.primary.description}</span>
        ) : (
          <p>start by editing this slice from inside Prismic builder!</p>
        )}
      </div>
      <div className="imageContainer">
        <img
          className="image"
          src={slice.primary.pavemintBannerImage.url}
          alt={slice.primary.pavemintBannerImage.alt}
        />
      </div>
    </div>
    <style jsx>{`
      section {
        max-width: 100%;
        height: 550px;
        margin: 4em auto;
        text-align: center;
        background-image: linear-gradient(#f6f7f7, #e7eaed);
      }
      .titleSection {
        width: 43%;
      }
      .title {
        color: #8592e0;
      }
      .contentSection {
        display: flex;
        padding-top: 250px;
        padding-left: 30px;
        padding-right: 30px;
      }
      .imageContainer {
        width: 20%;
      }
      .image {
        width: 550px;
      }
    `}</style>
  </section>
);

export default BannerSlice;

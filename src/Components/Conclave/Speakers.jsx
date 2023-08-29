import React from "react";
import SpeakerCard from "./SpeakerCard";
import { Data } from "./SpeakersData";

const Speakers = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(23 0 54)",
        position: "absolute",
        top: "100vh",
        minHeight: "100vh",
      }}>
      <h1 style={{ margin: "25px", color: "white" }}>Speakers</h1>
      <div className="SpeakerContainer" style={{ width: "80%" }}>
        <div className="row">
          {Data.map(speaker => (
            <SpeakerCard data={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;

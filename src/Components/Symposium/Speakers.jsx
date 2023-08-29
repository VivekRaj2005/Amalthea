import React from "react";
import SpeakerCard from "./SpeakerCard";
import { Data } from "./SpeakersData";

const Speakers = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:"#13102f"
      }}>
      <h1 style={{ margin: "25px", color: "white" }}>Speakers</h1>
      <div className="SpeakerContainer">
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

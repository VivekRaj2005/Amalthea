import React from "react";
import SpeakerCard from "../Conclave/SpeakerCard";
import { Data } from "./SpeakersData";

const Speakers = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#13102f",
        position: "absolute",
        top: "100vh",
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

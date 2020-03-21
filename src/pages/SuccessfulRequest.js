import React from "react";
import JustTextContent from "../components/JustTextContext";

export default function SuccessfulRequest() {
  return (
    <>
      <JustTextContent
        header="Request submitted!"
        body="A volunteer will follow up with you after one is found."
      />
    </>
  );
}

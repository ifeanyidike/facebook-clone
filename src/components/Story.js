// import dependencies
import React from "react";
import { Avatar } from "@material-ui/core";

// import stylesheet
import "../styles/Story.css";

// import custom components

const Story = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;

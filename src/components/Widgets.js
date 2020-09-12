// import dependencies
import React from "react";
// import stylesheet
import "../styles/Widgets.css";
// import custom components

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsterlingdigitals%2F&tabs=timeline&width=340&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=274968123839330"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;

//--------CSS----------------
import "./previewer.css";
//--------LIBS----------------
import React from "react";
//--------IMAGES----------------
import fccIcon from "../../assests/images/free-code-camp-brands.svg";
import expandIcon from "../../assests/images/expand-arrows-alt-solid.svg";
import compressIcon from "../../assests/images/compress-arrows-alt-solid.svg";

const Previewer: React.FC = () => {
  return (
    <div className="previewer-container">
      <div className="previewer-header">
        <div className="fcc-icon icon icon-s-square">
          <img src={fccIcon} className="full-icon" alt="FCC" />
        </div>
        <span className="previewer-heading flex-g2">Previewer</span>
        <div className="size-icon icon icon-s-square">
          <img src={expandIcon} className="full-icon" alt="FCC" />
        </div>
      </div>
      <div className="previewer">Formatted mark down goes here.</div>
    </div>
  );
};

export default Previewer;

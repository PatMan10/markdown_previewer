//--------CSS----------------
import "./editor.css";
//--------LIBS----------------
import React from "react";
//--------IMAGES----------------
import fccIcon from "../../assests/images/free-code-camp-brands.svg";
import expandIcon from "../../assests/images/expand-arrows-alt-solid.svg";
import compressIcon from "../../assests/images/compress-arrows-alt-solid.svg";

const Editor: React.FC = () => {
  return (
    <div className="editor-container">
      <div className="editor-header">
        <div className="fcc-icon icon icon-s-square">
          <img src={fccIcon} className="full-icon" alt="FCC" />
        </div>
        <span className="editor-heading flex-g2">Editor</span>
        <div className="size-icon icon icon-s-square">
          <img src={expandIcon} className="full-icon" alt="FCC" />
        </div>
      </div>
      <textarea className="editor"></textarea>
    </div>
  );
};

export default Editor;

//--------CSS----------------
import "./editor.css";
//--------LIBS----------------
import React from "react";
import PropTypes from "prop-types";
//--------IMAGES----------------
import fccIcon from "../../assests/images/free-code-camp-brands.svg";
import expandIcon from "../../assests/images/expand-arrows-alt-solid.svg";
import compressIcon from "../../assests/images/compress-arrows-alt-solid.svg";

interface Props {
  text: string;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isExpanded: boolean;
  isVisible: boolean;
  expand: () => void;
  compress: () => void;
}

const Editor: React.FC<Props> = ({
  text,
  onChangeText,
  isExpanded,
  isVisible,
  expand,
  compress
}) => {
  const sizeIcon = isExpanded ? compressIcon : expandIcon;
  const onClickSizeIcon = isExpanded ? compress : expand;

  return !isVisible ? null : (
    <div className="editor-container">
      <div className="editor-header">
        <div className="fcc-icon icon icon-s-square">
          <img src={fccIcon} className="full-icon" alt="FCC" />
        </div>
        <span className="editor-heading flex-g2">Editor</span>
        <div className="size-icon icon icon-s-square" onClick={onClickSizeIcon}>
          <img src={sizeIcon} className="full-icon" alt="FCC" />
        </div>
      </div>
      <textarea
        className="editor"
        value={text}
        onChange={onChangeText}
      ></textarea>
    </div>
  );
};

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  expand: PropTypes.func.isRequired,
  compress: PropTypes.func.isRequired
};

export default Editor;

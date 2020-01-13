//--------CSS----------------
import "./editor.css";
//--------LIBS----------------
import React from "react";
import PropTypes from "prop-types";
//--------IMAGES----------------
import expandIcon from "../../assests/images/expand-arrows-alt-solid.svg";
import compressIcon from "../../assests/images/compress-arrows-alt-solid.svg";
//--------UI_COMP----------------
import Toolbar from "../toolbar/Toolbar";

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
  const containerClassName = isExpanded
    ? "editor-container-full"
    : "editor-container";

  return !isVisible ? null : (
    <div className={containerClassName}>
      <Toolbar
        headingText="Editor"
        sizeIcon={sizeIcon}
        onClickSizeIcon={onClickSizeIcon}
      />
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

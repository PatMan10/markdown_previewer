//--------CSS----------------
import "./previewer.css";
//--------LIBS----------------
import React from "react";
import PropTypes from "prop-types";
//--------IMAGES----------------
import expandIcon from "../../assests/images/expand-arrows-alt-solid.svg";
import compressIcon from "../../assests/images/compress-arrows-alt-solid.svg";
//--------UI_COMP----------------
import Toolbar from "../toolbar/Toolbar";

interface Props {
  markup: string;
  isExpanded: boolean;
  isVisible: boolean;
  expand: () => void;
  compress: () => void;
}

const Previewer: React.FC<Props> = ({
  markup,
  isExpanded,
  isVisible,
  expand,
  compress
}) => {
  const sizeIcon = isExpanded ? compressIcon : expandIcon;
  const onClickSizeIcon = isExpanded ? compress : expand;
  const containerClassName = isExpanded
    ? "previewer-container-full"
    : "previewer-container";

  return !isVisible ? null : (
    <div className={containerClassName} >
      <Toolbar
        headingText="Previewer"
        sizeIcon={sizeIcon}
        onClickSizeIcon={onClickSizeIcon}
      />
      <div className="previewer" dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
};

Previewer.propTypes = {
  markup: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  expand: PropTypes.func.isRequired,
  compress: PropTypes.func.isRequired
};

export default Previewer;

//--------CSS----------------
import "./previewer.css";
//--------LIBS----------------
import React from "react";
import PropTypes from "prop-types";
//--------IMAGES----------------
import fccIcon from "../../assests/images/free-code-camp-brands.svg";
import expandIcon from "../../assests/images/expand-arrows-alt-solid.svg";
import compressIcon from "../../assests/images/compress-arrows-alt-solid.svg";

interface Props {
  isExpanded: boolean;
  isVisible: boolean;
  expand: () => void;
  compress: () => void;
}

const Previewer: React.FC<Props> = ({
  isExpanded,
  isVisible,
  expand,
  compress
}) => {
  const sizeIcon = isExpanded ? compressIcon : expandIcon;
  const onClickSizeIcon = isExpanded ? compress : expand;

  return !isVisible ? null : (
    <div className="previewer-container">
      <div className="previewer-header">
        <div className="fcc-icon icon icon-s-square">
          <img src={fccIcon} className="full-icon" alt="FCC" />
        </div>
        <span className="previewer-heading flex-g2">Previewer</span>
        <div className="size-icon icon icon-s-square" onClick={onClickSizeIcon}>
          <img src={sizeIcon} className="full-icon" alt="FCC" />
        </div>
      </div>
      <div className="previewer">Formatted mark down goes here.</div>
    </div>
  );
};

Previewer.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  expand: PropTypes.func.isRequired,
  compress: PropTypes.func.isRequired
};

export default Previewer;

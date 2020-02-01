//--------CSS----------------
import "./toolbar.css";
//--------LIBS----------------
import React from "react";
import PropTypes from "prop-types";
//--------IMAGES----------------
import fccIcon from "../../assests/images/free-code-camp-brands.svg";

interface Props {
  headingText: string;
  sizeIcon: string;
  onClickSizeIcon: () => void;
}

const Toolbar: React.FC<Props> = ({
  headingText,
  sizeIcon,
  onClickSizeIcon
}) => {
  return (
    <div className="toolbar">
      <div className="fcc-icon icon icon-xs-square">
        <img src={fccIcon} className="full-icon" alt="FCC" />
      </div>
      <span className="heading">{headingText}</span>
      <div className="size-icon icon icon-xxs-square" onClick={onClickSizeIcon}>
        <img src={sizeIcon} className="full-icon" alt="FCC" />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  headingText: PropTypes.string.isRequired,
  sizeIcon: PropTypes.string.isRequired,
  onClickSizeIcon: PropTypes.func.isRequired
};

export default Toolbar;

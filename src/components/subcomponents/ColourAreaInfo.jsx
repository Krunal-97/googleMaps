import React from "react";

function ColourAreaInfo(props) {
  const val = props;
  return (
    <div>
      <p className="sec_clr_info">
        <div className={props.className} />
        <span className="sec_1_info_text">{val.val}</span>
      </p>
    </div>
  );
}

export default ColourAreaInfo;

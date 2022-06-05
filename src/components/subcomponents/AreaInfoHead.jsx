import React from "react";
import { MapTrifold, Book } from "phosphor-react";

function AreaInfoHead(props) {
  const val = props.val;
  console.log({ val });
  return (
    <div>
      {" "}
      <div className="sec_1_info">
        <p className="sec_clr_info">
          <div className={props.className} />
          <span className="sec_1_info_text">{val[0]}</span>
        </p>
        <span className="sec_subhead_info">
          <MapTrifold size={24} />
          <span className="sec_subhead_text">Map</span>
          <Book size={24} />
          <span className="sec_subhead_text">Policy</span>
        </span>
      </div>
    </div>
  );
}

export default AreaInfoHead;

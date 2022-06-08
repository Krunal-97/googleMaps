import React from "react";
import { MapTrifold, Book } from "phosphor-react";

function AreaInfoHead(props) {
  const val = props.val;
  console.log({ val });
  return (
    <div>
      <div className="sec_1_info">
        <p className="sec_clr_info">
          <div className={props.className} />
          <span className="sec_1_info_text">{val[0]}</span>
        </p>
        <span className="sec_subhead_info">
          <span className="sec_subhead_info_div">
            <MapTrifold className="icon" size={32} />
            <span className="sec_subhead_text">Map</span>
          </span>
          <span className="sec_subhead_info_div">
            <Book className="icon" size={32} />
            <span className="sec_subhead_text less_border">Policy</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default AreaInfoHead;

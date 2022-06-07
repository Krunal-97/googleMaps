import React from "react";
import { Question } from "phosphor-react";

function InfoTextHead(props) {
  const val = props.val;
  return (
    <div>
      <div className="sec_1_head">
        <span className="sec_1_head_fonts">
          {val} <Question className="info_mark" size={14} />
        </span>
      </div>
    </div>
  );
}

export default InfoTextHead;

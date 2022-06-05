import React from "react";
import { Switch } from "antd";
import { Question } from "phosphor-react";

function SwitchBtn(props) {
  const val = props.val;
  console.log(val);
  return (
    <div>
      <div className="sec_1_head">
        <span className="sec_1_head_fonts">
          {val} <Question size={18} />
        </span>
        <Switch className="btn_clr" size="small" defaultChecked />
      </div>
    </div>
  );
}

export default SwitchBtn;

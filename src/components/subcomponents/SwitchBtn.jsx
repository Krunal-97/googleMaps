import React from "react";
import { Switch } from "antd";

function SwitchBtn(props) {
  const val = props.val;

  return (
    <div>
      <div className="sec_1_head">
        <span className="sec_1_head_fonts">
          {val} <i class="ph-question"></i>
        </span>
        <span className="btn_pos">
          <Switch className="btn_clr" size="small" defaultChecked />
        </span>
      </div>
    </div>
  );
}

export default SwitchBtn;

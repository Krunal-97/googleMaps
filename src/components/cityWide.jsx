import React, { useState } from "react";
import { MapTrifold, Book, CaretDown, CaretUp } from "phosphor-react";

import "../assests/styles/cityWide.css";
import SwitchBtn from "./subcomponents/SwitchBtn";
import AreaInfoHead from "./subcomponents/AreaInfoHead";

function CityWide(props) {
  const switchVal_1 = "Official Plan Land Use";
  const switchVal_2 = "Secondary Plan";

  const areaInfoHead_1 = ["Mixed Use Area:"];
  const areaInfoHead_2 = ["41 - Downtown Plan:"];
  const areaInfoHead_3 = ["39 King - Parliament:"];

  return (
    <div className="citywide_container container">
      <div className="citywide_heading heading">
        <p className="main_head">Official Plan</p>
      </div>

      <div className="citywide_subheading_1 citywide_subheading">
        <SwitchBtn val={switchVal_1} />
        <AreaInfoHead val={areaInfoHead_1} className="sec_1_clr" />

        <div className="sec_1_legend_info">
          <span className="legend_head">
            <p>Legend:</p>
            <CaretDown className="l_icon" size={18} />
          </span>

          <div className="lenegd_clr_sec">
            <div className="left_bar">
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l1" />
                <span className="legend_text">Neighbourhoods</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l2" />
                <span className="legend_text">Apartment Neighbourhoods</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l3" />
                <span className="legend_text">Mixed Use Areas</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l4" />
                <span className="legend_text">Natural Areas</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l5" />
                <span className="legend_text">Parks</span>
              </span>
            </div>
            <div className="right_bar">
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l6" />
                <span className="legend_text">Other Open Space Areas</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l7" />
                <span className="legend_text">Institutional Areas</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l8" />
                <span className="legend_text">Regeneration Areas</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l9" />
                <span className="legend_text">Employment Areas</span>
              </span>
              <span className="legend_clr_container">
                <div className="sec_1_clr_l l10" />
                <span className="legend_text">Utility Corridors</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="citywide_subheading_2 citywide_subheading">
        <SwitchBtn val={switchVal_2} />
        <AreaInfoHead val={areaInfoHead_2} className="sec_2_clr" />
        <AreaInfoHead val={areaInfoHead_3} className="sec_2_clr" />
      </div>
      <span className="legend_head">
        <p>Legend:</p>
        <CaretUp className="l_icon" size={18} />
      </span>
    </div>
  );
}

export default CityWide;

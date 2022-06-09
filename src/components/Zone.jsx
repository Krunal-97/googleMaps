import React from "react";
import {
  CaretDown,
  BookOpen,
  BookmarkSimple,
  SquaresFour,
} from "phosphor-react";
import SwitchBtn from "./subcomponents/SwitchBtn";
import AreaInfoHead from "./subcomponents/AreaInfoHead";
import ColourAreaInfo from "./subcomponents/ColourAreaInfo";
import InfoTextHead from "./subcomponents/InfoTextHead";
import "../assests/styles/zone.css";
import "../assests/styles/cityWide.css";

function Zone(props) {
  const switchVal_2 = "Zoning By-Law ";
  const switchVal_3 = "Lot Coverage";
  const switchVal_4 = "Height";
  const switchVal_5 = "Policy Area";
  const areaInfoHead_1 = ["By-Law 438-86 (Toronto)"];

  return (
    <div className="citywide_container container">
      <div className="citywide_heading heading">
        <p className="main_head">Zoning By-Law</p>
      </div>
      <div className="citywide_subheading_1 citywide_subheading">
        <InfoTextHead val={"Former By-Law"} />
        <AreaInfoHead val={areaInfoHead_1} className="sec_2_clr" />
        <div className="sec_1_legend_info">
          <span className="legend_head">
            <p>Legend:</p>
            <CaretDown className="l_icon" size={18} />
          </span>
        </div>
        <div>
          <SwitchBtn val={switchVal_2} />
          <p className="zone_head_text">By-Law 569-2013</p>
        </div>
        <div>
          <ColourAreaInfo
            val={"COMMERCIAL RESIDENTIA CR 12.0 (c8.0; r11.7) SS1 (x2325)"}
            className="sec_2_clr sec_law_clr"
          />
          <div>
            <span className="sec_subhead_info">
              <span className="sec_subhead_info_div">
                <BookOpen className="icon" size={26} />
                <span className="sec_subhead_text">Chapter</span>
              </span>
              <span className="sec_subhead_info_div">
                <BookmarkSimple className="icon" size={26} />
                <span className="sec_subhead_text less_border">Section</span>
              </span>
              <span className="sec_subhead_info_div">
                <SquaresFour className="icon" size={26} />
                <span className="sec_subhead_text less_border">Exception</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="citywide_subheading_2 citywide_subheading"></div>
      <span className="legend_head">
        <p>Legend:</p>
        <CaretDown className="l_icon" size={18} />
      </span>
      <div>
        <SwitchBtn val={switchVal_3} />
        <ColourAreaInfo
          val={"Feature not within property"}
          className="sec_2_clr feature_clr"
        />
      </div>
      <div>
        <SwitchBtn val={switchVal_4} />
        <AreaInfoHead
          val={["Height (Metres / Stories): HT 76.0"]}
          className="sec_1_clr sec_height_clr"
        />
        <ColourAreaInfo
          val={"Height (Metres / Stories): None"}
          className="sec_2_clr sec_height_clr"
        />
      </div>
      <div>
        <SwitchBtn val={switchVal_5} />
        <AreaInfoHead
          val={["Policy Area: 1"]}
          className="sec_1_clr sec_policy_clr"
        />
      </div>
    </div>
  );
}

export default Zone;

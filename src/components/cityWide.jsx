import React from "react";
import { Switch } from "antd";
import { Question, MapTrifold, Book } from "phosphor-react";
import "../assests/styles/cityWide.css";

function CityWide(props) {
  return (
    <div className="citywide_container container">
      <div className="citywide_heading heading">
        <p className="main_head">Official Plan</p>
      </div>
      <div className="citywide_subheading_1 citywide_subheading">
        <div className="sec_1_head">
          <span className="sec_1_head_fonts">
            Official Plan Land Use <Question size={18} />
          </span>
          <Switch className="btn_clr" size="small" defaultChecked />
        </div>
        <div className="sec_1_info">
          <p className="sec_clr_info">
            <div className="sec_1_clr" />
            <span className="sec_1_info_text">Mixed Use Area:</span>
          </p>
          <span className="sec_subhead_info">
            <MapTrifold size={24} />
            <span className="sec_subhead_text">Map</span>
            <Book size={24} />
            <span className="sec_subhead_text">Policy</span>
          </span>
        </div>
        <div className="sec_1_legend_info">
          <p>Legend:</p>

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
        <div className="sec_1_head">
          <span className="sec_1_head_fonts">
            Secondary Plan <Question size={18} />
          </span>
          <Switch className="btn_clr" size="small" defaultChecked />
        </div>

        <div className="sec_1_info">
          <p className="sec_clr_info">
            <div className="sec_2_clr" />
            <span className="sec_1_info_text">41 - Downtown Plan:</span>
          </p>
          <span className="sec_subhead_info">
            <MapTrifold size={24} />
            <span className="sec_subhead_text">Map</span>
            <Book size={24} />
            <span className="sec_subhead_text">Policy</span>
          </span>
        </div>

        <div className="sec_1_info">
          <p className="sec_clr_info">
            <div className="sec_2_clr" />
            <span className="sec_1_info_text">39 King - Parliament:</span>
          </p>
          <span className="sec_subhead_info">
            <MapTrifold size={24} />
            <span className="sec_subhead_text">Map</span>
            <Book size={24} />
            <span className="sec_subhead_text">Policy</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CityWide;

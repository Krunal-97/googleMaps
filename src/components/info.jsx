import React, { useState } from "react";
import { HouseLine } from "phosphor-react";
import { Radio } from "antd";
import InfoTextHead from "./subcomponents/InfoTextHead";
import DataInfo from "./subcomponents/DataInfo";
import "../assests/styles/zone.css";
import "../assests/styles/cityWide.css";

function GeneralInfo(props) {
  const [value, setValue] = useState(1);
  const data1 = [
    {
      title1: "Studio:",
      title2: "Bedroom 1",
      title3: "Bedroom 2",
      title4: "Bedroom 3+",
    },
    {
      sq_price1: "$175",
      sq_price2: "$185",
      sq_price3: "$190",
      sq_price4: "$310",
    },
    {
      price1: "$400,000",
      price2: "$570,000",
      price3: "$1,000,000",
      price4: "$1,400,000",
    },
    {
      head1: "Per Sq Ft",
      head2: "Bedroom Type",
    },
  ];

  const data2 = [
    {
      title1: "Single",
      title2: "Semi-Detached",
      title3: "Row",
      title4: "Apartment",
    },

    {
      sq_price1: "$1,914,339",
      sq_price2: "$952,625",
      sq_price3: "$825,911",
      sq_price4: "$513,246",
    },
    {
      price1: "$1,637,500",
      price2: "-",
      price3: "$820,000",
      price4: "$820,000",
    },
    {
      head1: "Census Subdivision",
      head2: "Neighbourhoods",
    },
  ];

  const data3 = [
    {
      title1: "Single",
      title2: "Semi",
      title3: "Row",
      title4: "Apartment",
      title5: "Total:",
    },
    {
      sq_price1: "1",
      sq_price2: "3",
      sq_price3: "12",
      sq_price4: "33",
      sq_price5: "100",
    },
    {
      price1: "33",
      price2: "40",
      price3: "20",
      price4: "60",
      price5: "200",
    },
    {
      head1: "Units Absorbed",
      head2: "Units Unabsorbed",
    },
  ];

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="citywide_container container">
      <div className="citywide_heading heading">
        <p className="main_head">Market Comparables</p>
      </div>
      <div className="radio_btn_pos">
        <Radio.Group onChange={onChange} value={value}>
          <Radio className="radio_btn" value={1}>
            Sales
          </Radio>
          <Radio className="radio_btn" value={2}>
            Rental
          </Radio>
        </Radio.Group>
      </div>
      <div className="info_home">
        <span className="">
          <HouseLine size={32} />
        </span>
        <span className="info_home_text">
          <p className="">Neighbourhood: Willowdale </p>
          <p className="">Census Subdivision: Toronto</p>
        </span>
      </div>
      <div className="citywide_subheading_1 citywide_subheading">
        <InfoTextHead val={"MLS Price"} />
      </div>
      <DataInfo data={data1} />
      <div className="citywide_subheading_1 citywide_subheading">
        <InfoTextHead val={"CMHC Average Sold Price"} />
      </div>
      <DataInfo data={data2} />
      <div className="citywide_subheading_1 citywide_subheading">
        <InfoTextHead val={"CMHC Absorption (By Type)"} />
      </div>
      <DataInfo data={data3} />
    </div>
  );
}

export default GeneralInfo;

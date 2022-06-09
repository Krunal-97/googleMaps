import React from "react";

function DataInfo(props) {
  const val = props.data;
  return (
    <div>
      <div className="data_container">
        <div className="special">
          <p></p>
          <p>{val[0].title1}</p>
          <p>{val[0].title2}</p>
          <p>{val[0].title3}</p>
          <p>{val[0].title4}</p>
          <p>{val[0].title5}</p>
        </div>
        <div className="data_sec">
          <p>{val[3].head1}</p>
          <p>{val[1].sq_price1}</p>
          <p>{val[1].sq_price2}</p>
          <p>{val[1].sq_price3}</p>
          <p>{val[1].sq_price4}</p>
          <p>{val[1].sq_price5}</p>
        </div>
        <div className="data_sec">
          <p>{val[3].head2}</p>
          <p>{val[2].price1}</p>
          <p>{val[2].price2}</p>
          <p>{val[2].price3}</p>
          <p>{val[2].price4}</p>
          <p>{val[2].price5}</p>
        </div>
      </div>
    </div>
  );
}

export default DataInfo;

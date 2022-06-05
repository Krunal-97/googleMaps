import { Info } from "phosphor-react";
import React from "react";
import CityWide from "./cityWide";
import Dashboard from "./dashboard";
import GovernmentLand from "./governmentLand";
import GeneralInfo from "./info";
import Location from "./location";
import Sales from "./sales";

function MenuSelect(props) {
  let selectedKey = props.selectedKey;

  const loadMenu = () => {
    switch (selectedKey) {
      case "1":
        return <Dashboard />;
      case "2":
        return <GeneralInfo />;
      case "3":
        return <Sales />;
      case "4":
        return <GovernmentLand />;
      case "5":
        return <CityWide />;
    }
  };

  return <div>{loadMenu()}</div>;
}

export default MenuSelect;

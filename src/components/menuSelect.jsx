import { Info } from "phosphor-react";
import React from "react";
import CityWide from "./cityWide";
import Dashboard from "./dashboard";
import GovernmentLand from "./governmentLand";
import GeneralInfo from "./info";
import Location from "./location";
import Sales from "./sales";
import Search from "./search";
import Zone from "./Zone";

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
      // case "6":
      // return <CityWide />;
      case "7":
        return <Zone />;
    }
  };

  return (
    <div>
      <Search />
      {loadMenu()}
    </div>
  );
}

export default MenuSelect;

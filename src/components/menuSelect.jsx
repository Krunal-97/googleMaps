import React from "react";
import CityWide from "./cityWide";
import GeneralInfo from "./info";
import Search from "./search";
import Zone from "./Zone";

function MenuSelect(props) {
  let selectedKey = props.selectedKey;

  const loadMenu = () => {
    switch (selectedKey) {
      case "2":
        return <GeneralInfo />;
      case "5":
        return <CityWide />;
      case "7":
        return <Zone />;
      default:
        return (
          <a href="https://www.mapyourproperty.com/">
            https://www.mapyourproperty.com/
          </a>
        );
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

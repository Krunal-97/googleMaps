import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Info,
  HouseLine,
  Bank,
  ChartBar,
  Notepad,
  Buildings,
  MapPinLine,
  Target,
  Drop,
  Leaf,
  CrownSimple,
  CaretCircleRight,
  CaretCircleLeft,
} from "phosphor-react";
import { Layout, Menu } from "antd";
import MenuSelect from "./menuSelect";
import GoogleMaps from "./GoogleMaps";
import "../assests/styles/sideNav.css";
// import Location from './location';

const { Sider, Content } = Layout;

function SideNav(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("1");

  const handleOnChange = (value) => {
    setKey(value.key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <div className="test">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            className="sideNav_icons"
            defaultSelectedKeys={["1"]}
            onSelect={(value) => {
              handleOnChange(value);
            }}
            items={[
              {
                key: "1",
                icon: <i class="ph-info"></i>,
                // label: "General Info",
              },
              {
                key: "2",
                icon: <i class="ph-crown-simple"></i>,
                // label: "Sales/Rent",
              },
              {
                key: "3",
                icon: <i class="ph-bank"></i>,
                // label: "Government Land",
              },
              {
                key: "4",
                icon: <i class="ph-chart-bar"></i>,
                // label: "Demographics",
              },
              {
                key: "5",
                icon: <i class="ph-notepad"></i>,
                // label: "Official Plan",
              },
              {
                key: "6",
                icon: <i class="ph-buildings"></i>,
                // label: "City Wide",
              },
              {
                key: "7",
                icon: <MapPinLine size={32} />,
                // label: "Zoning",
              },
              {
                key: "8",
                icon: <Target size={32} />,
                // label: "Development",
              },
              {
                key: "9",
                icon: <Drop size={32} />,
                // label: "Water",
              },

              {
                key: "10",
                icon: <Leaf size={32} />,
                // label: "Environment",
              },

              {
                key: "11",
                icon: <CrownSimple size={32} />,
                // label: "Provincial Plan",
              },
            ]}
          />
        </Sider>
      </div>
      <Sider
        style={{ display: collapsed ? "none" : "block" }}
        className="sideInfoBar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Content>
          <MenuSelect selectedKey={key} />
        </Content>
      </Sider>
      <Layout className="site-layout">
        {collapsed ? (
          <CaretCircleRight
            className="main_collapse_icon"
            size={32}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <CaretCircleLeft
            className="main_collapse_icon"
            size={32}
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
        <>
          <GoogleMaps className="map_container" />
        </>
      </Layout>
    </Layout>
  );
}

export default SideNav;

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

const { Header, Sider, Content } = Layout;

function SideNav(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("1");

  const handleOnChange = (value) => {
    setKey(value.key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div style={{color: 'white', textAlign: 'center', padding: '10px'}}>Dashboard</div> */}
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
              icon: <Info size={32} />,
              label: "General Info",
            },
            {
              key: "2",
              icon: <HouseLine size={32} />,
              label: "Sales/Rent",
            },
            {
              key: "3",
              icon: <Bank size={32} />,
              label: "Government Land",
            },
            {
              key: "4",
              icon: <ChartBar size={32} />,
              label: "Demographics",
            },
            {
              key: "5",
              icon: <Notepad size={32} />,
              label: "Official Plan",
            },
            {
              key: "6",
              icon: <Buildings size={32} />,
              label: "City Wide",
            },
            {
              key: "7",
              icon: <MapPinLine size={32} />,
              label: "Zoning",
            },
            {
              key: "8",
              icon: <Target size={32} />,
              label: "Development",
            },
            {
              key: "9",
              icon: <Drop size={32} />,
              label: "Water",
            },

            {
              key: "10",
              icon: <Leaf size={32} />,
              label: "Environment",
            },

            {
              key: "11",
              icon: <CrownSimple size={32} />,
              label: "Provincial Plan",
            },
          ]}
        />
      </Sider>
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
        <GoogleMaps className="map_container" />
      </Layout>
    </Layout>
  );
}

export default SideNav;

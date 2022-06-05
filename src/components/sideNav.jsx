import React, { useState } from "react";
import "antd/dist/antd.css";
import "../assests/styles/sideNav.css";
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
          defaultSelectedKeys={["1"]}
          onSelect={(value) => {
            handleOnChange(value);
          }}
          items={[
            {
              key: "1",

              icon: <Info size={32} />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <HouseLine size={32} />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <Bank size={32} />,
              label: "nav 3",
            },
            {
              key: "4",
              icon: <ChartBar size={32} />,
              label: "nav 4",
            },
            {
              key: "5",
              icon: <Notepad size={32} />,
              label: "nav 5",
            },
            {
              key: "6",
              icon: <Buildings size={32} />,
              label: "nav 6",
            },
            {
              key: "7",
              icon: <MapPinLine size={32} />,
              label: "nav 7",
            },
            {
              key: "8",
              icon: <Target size={32} />,
              label: "nav 8",
            },
            {
              key: "9",
              icon: <Drop size={32} />,
              label: "nav 9",
            },

            {
              key: "10",
              icon: <Leaf size={32} />,
              label: "nav 10",
            },

            {
              key: "11",
              icon: <CrownSimple size={32} />,
              label: "nav 11",
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
            size={32}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <CaretCircleLeft size={32} onClick={() => setCollapsed(!collapsed)} />
        )}
      </Layout>
    </Layout>
  );
}

export default SideNav;

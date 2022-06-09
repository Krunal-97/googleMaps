import React, { useState } from "react";
import "antd/dist/antd.css";
import { CaretCircleRight, CaretCircleLeft } from "phosphor-react";
import { Layout, Menu } from "antd";
import MenuSelect from "./menuSelect";
import GoogleMaps from "./GoogleMaps";
import "../assests/styles/sideNav.css";
import { Tooltip } from "antd";

const { Sider, Content } = Layout;

function SideNav(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("5");

  const handleOnChange = (value) => {
    setKey(value.key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <div className="sidenav_container">
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
                icon: (
                  <>
                    <Tooltip placement="right" title="General Info">
                      <div className="navbar__icon">
                        <i className="ph-info"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "2",
                icon: (
                  <>
                    <Tooltip placement="right" title="Sales/Rent">
                      <div className="navbar__icon">
                        <i class="ph-house-line"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "3",
                icon: (
                  <>
                    <Tooltip placement="right" title="Government Land">
                      <div className="navbar__icon">
                        <i class="ph-bank"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "4",
                icon: (
                  <>
                    <Tooltip placement="right" title="Demographics">
                      <div className="navbar__icon">
                        <i class="ph-chart-bar"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "5",
                icon: (
                  <>
                    <Tooltip placement="right" title="Official Plan">
                      <div className="navbar__icon">
                        <i class="ph-notepad"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "6",
                icon: (
                  <>
                    <Tooltip placement="right" title="City Wide">
                      <div className="navbar__icon">
                        <i class="ph-buildings"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "7",
                icon: (
                  <>
                    <Tooltip placement="right" title="Zoning">
                      <div className="navbar__icon">
                        <i class="ph-target"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "8",
                icon: (
                  <>
                    <Tooltip placement="right" title="Development">
                      <div className="navbar__icon">
                        <i class="ph-drop"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },
              {
                key: "9",
                icon: (
                  <>
                    <Tooltip placement="right" title="Water">
                      <div className="navbar__icon">
                        <i class="ph-leaf"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
              },

              {
                key: "10",
                icon: (
                  <>
                    <Tooltip placement="right" title="Environment">
                      <div className="navbar__icon">
                        <i class="ph-crown-simple"></i>
                      </div>
                    </Tooltip>
                  </>
                ),
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
            size={22}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <CaretCircleLeft
            className="main_collapse_icon"
            size={22}
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

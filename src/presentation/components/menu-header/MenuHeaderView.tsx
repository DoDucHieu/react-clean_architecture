import React from "react";
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  MenuProps,
  theme,
  Typography,
} from "antd";
import {
  CalculatorOutlined,
  UserOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { PRIVATE_ROUTES } from "../../router/CONSTANTS";

const { Header, Content, Footer } = Layout;

const menuItems: MenuProps["items"] = [
  {
    label: "Counter",
    key: PRIVATE_ROUTES.SUB.COUNTER,
    icon: <CalculatorOutlined />,
  },
  {
    label: "Admin",
    key: PRIVATE_ROUTES.SUB.ADMIN,
    icon: <UserOutlined />,
  },
  {
    label: "Moderator",
    key: PRIVATE_ROUTES.SUB.MOD,
    icon: <UserOutlined />,
  },
  {
    label: "Normal User",
    key: PRIVATE_ROUTES.SUB.USER,
    icon: <UserOutlined />,
  },
  {
    label: "Time sleep",
    key: PRIVATE_ROUTES.SUB.TIME,
    icon: <FieldTimeOutlined />,
  },
];

interface props {
  userLocal: any;
  toSigninPage: () => void;
  toSignupPage: () => void;
  logoutApp: () => void;
  selectMenuItem: (value: any) => void;
  chosenItem: string[];
  children?: string | JSX.Element | JSX.Element[];
}

export const MenuHeaderView = ({
  toSigninPage,
  toSignupPage,
  logoutApp,
  selectMenuItem,
  userLocal,
  chosenItem,
  children,
}: props) => {
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        {userLocal ? (
          <Menu
            style={{ minWidth: 1000 }}
            theme="dark"
            mode="horizontal"
            items={menuItems}
            onSelect={selectMenuItem}
            selectedKeys={chosenItem}
          />
        ) : (
          <div></div>
        )}
        <div style={{ display: "flex" }}>
          {userLocal === undefined ? (
            <></>
          ) : userLocal ? (
            <Button type="primary" danger onClick={logoutApp}>
              Log out
            </Button>
          ) : (
            <>
              <Button type="primary" onClick={toSigninPage}>
                Sign in
              </Button>
              <div style={{ width: 16 }}></div>
              <Button type="primary" onClick={toSignupPage}>
                Sign up
              </Button>
            </>
          )}
        </div>
      </Header>
      <Content style={{ backgroundColor: "#ffffff" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Khoi Tran
      </Footer>
    </Layout>
  );
};

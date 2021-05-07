import { useEffect, useState } from "react";
import { Drawer, PageHeader, Button, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const [visible, setVisible] = useState(false);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <PageHeader
        onBack={showDrawer}
        title="Buddyget"
        subTitle="Your budget buddy."
        backIcon={<MenuOutlined spin={spin} style={{ color: "#1890ff" }} />}
        style={{ padding: 0 }}
      />

      <Drawer
        title="Navigation"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Space direction="vertical">
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/")}
          >
            Home
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/expenses")}
          >
            Expenses
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/notifications")}
          >
            Notifications
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/planner")}
          >
            Planner
          </Button>
        </Space>
      </Drawer>
    </>
  );
};

export default withRouter(Header);

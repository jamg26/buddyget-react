import { useEffect, useState } from "react";
import { Drawer, PageHeader, Button, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { Tag } from "@pancakeswap-libs/uikit";
import { Cat } from "react-kawaii";

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
        title={
          <>
            <Space> Buddyget</Space>
          </>
        }
        subTitle={
          <>
            <Space>
              Your budget buddy.
              <Cat size={25} mood="excited" color="#31d0aa" />
            </Space>
          </>
        }
        backIcon={
          <Tag outline>
            <MenuOutlined spin={spin} />
          </Tag>
        }
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
            Household Wallet
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/wallet")}
          >
            Personal Wallet
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
            onClick={() => props.history.push("/transfer")}
          >
            Transfer
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
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/reminder")}
          >
            Reminder
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/assistance")}
          >
            Financial Assistance
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/insights/table")}
          >
            Insights (Table)
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => props.history.push("/insights/graph")}
          >
            Insights (Graph)
          </Button>
        </Space>
      </Drawer>
    </>
  );
};

export default withRouter(Header);

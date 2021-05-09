import { Typography, Space, Divider, message } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";
import { useState } from "react";
import Scanner from "./Scanner";
import TweenOne from "rc-tween-one";
import ChildrenPlugin from "rc-tween-one/lib/plugin/ChildrenPlugin";
import QueueAnim from "rc-queue-anim";
import Texty from "rc-texty";
import { Button, Toggle, ToastContainer } from "@pancakeswap-libs/uikit";

TweenOne.plugins.push(ChildrenPlugin);

const { Text, Title } = Typography;

const Home = (props) => {
  const [isScanning, setScanning] = useState(false);
  const [toggleSavings, setToggleSavings] = useState(true);
  const [togglePurchases, setTogglePurchases] = useState(false);
  const [toasts, setToasts] = useState([]);

  if (isScanning) return <Scanner setScanning={setScanning} />;

  const toast = (title, description) => {
    const randomToast = {
      id: Date.now(),
      title,
      description,
      type: "success",
    };

    setToasts((prevToasts) => [randomToast, ...prevToasts]);
  };

  const handleRemove = (id) => {
    setToasts((prevToasts) =>
      prevToasts.filter((prevToast) => prevToast.id !== id)
    );
  };

  return (
    <>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
      <div style={{ textAlign: "center" }}>
        <Title type="success">
          <TweenOne
            animation={{
              Children: { value: 78240.65, floatLength: 2, formatMoney: true },
              duration: 1000,
            }}
          />
        </Title>
        <Text>Household Budget</Text>
      </div>
      <Divider />
      <Space direction="vertical">
        <Space>
          <Toggle
            checked={toggleSavings}
            onChange={(e) => {
              setToggleSavings(!toggleSavings);
              toast(
                "Switched",
                `Savings mode ${!toggleSavings ? "enabled" : "disabled"}`
              );
            }}
          />{" "}
          <Text>Saving Mode</Text>
        </Space>
        <Space>
          <Toggle
            checked={togglePurchases}
            onChange={(e) => {
              setTogglePurchases(!togglePurchases);
              toast(
                "Switched",
                `Household purchases ${
                  !togglePurchases ? "enabled" : "disabled"
                }`
              );
            }}
          />{" "}
          <Text>Restrict household purchases</Text>
        </Space>
      </Space>
      <Divider />
      <div style={{ textAlign: "center" }}>
        <Button variant="text" onClick={() => setScanning(true)}>
          <Space>
            <QrcodeOutlined style={{ fontSize: 50 }} />
            <Title level={5}>
              <Texty type="left" duration={1000}>
                Scan To Pay
              </Texty>
            </Title>
          </Space>
        </Button>
      </div>
      <Divider />
      <div style={{ textAlign: "center" }}>
        <Space>
          <Button
            variant="primary"
            onClick={() => toast("Send", "Sending funds..")}
          >
            SEND
          </Button>
          <Button
            variant="success"
            onClick={() => toast("Shop", "Shop funds...")}
          >
            SHOP
          </Button>
          <Button
            variant="subtle"
            onClick={() => toast("Members", "Members area...")}
          >
            MEMBERS
          </Button>
          <Button
            variant="danger"
            onClick={() => toast("Settings", "Settings area...")}
          >
            SETTINGS
          </Button>
        </Space>
      </div>
      <Divider>
        <Title level={4}>Recent Transaction</Title>
      </Divider>
      <QueueAnim interval={500}>
        <div key="1">
          <Text>-823.00 Purchased by John from GMALL 03/02/21</Text>
        </div>
        <br />
        <div key="2">
          <Text>-1540.00 Purchased by Mary from 711 03/02/21</Text>
        </div>
        <br />
        <div key="3">
          <Text>
            +5000.00 You added money to the Household Budget. 02/26/21
          </Text>
        </div>
      </QueueAnim>
    </>
  );
};

export default Home;

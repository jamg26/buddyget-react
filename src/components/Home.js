import { Typography, Switch, Space, Divider, Button, message } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";
import { useState } from "react";
import Scanner from "./Scanner";
import TweenOne from "rc-tween-one";
import ChildrenPlugin from "rc-tween-one/lib/plugin/ChildrenPlugin";
import QueueAnim from "rc-queue-anim";
import Texty from "rc-texty";

TweenOne.plugins.push(ChildrenPlugin);

const { Text, Title } = Typography;

const Home = (props) => {
  const [isScanning, setScanning] = useState(false);

  if (isScanning) return <Scanner setScanning={setScanning} />;

  return (
    <>
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
          <Switch
            defaultChecked
            onChange={(e) =>
              message.info(`Savings mode ${e ? "enabled" : "disabled"}`)
            }
          />{" "}
          <Text>Saving Mode</Text>
        </Space>
        <Space>
          <Switch
            onChange={(e) =>
              message.info(`Household purchases ${e ? "enabled" : "disabled"}`)
            }
          />{" "}
          <Text>Restrict household purchases</Text>
        </Space>
      </Space>
      <Divider />
      <div style={{ textAlign: "center" }}>
        <Button type="link" onClick={() => setScanning(true)}>
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
          <Button type="primary" onClick={() => message.info("Sending button")}>
            SEND
          </Button>
          <Button type="primary" onClick={() => message.info("Shop Button")}>
            SHOP
          </Button>
          <Button type="primary" onClick={() => message.info("Members Button")}>
            MEMBERS
          </Button>
          <Button
            type="primary"
            onClick={() => message.info("Settings Button")}
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

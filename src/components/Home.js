import { Typography, Space, Divider } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";
import { useState } from "react";
import Scanner from "./Scanner";
import TweenOne from "rc-tween-one";
import ChildrenPlugin from "rc-tween-one/lib/plugin/ChildrenPlugin";
import QueueAnim from "rc-queue-anim";
import Texty from "rc-texty";
import { Button, Toggle, Text as PText } from "@pancakeswap-libs/uikit";
import { connect } from "react-redux";

TweenOne.plugins.push(ChildrenPlugin);

const { Text, Title } = Typography;

const Home = (props) => {
  const [isScanning, setScanning] = useState(false);
  const [toggleSavings, setToggleSavings] = useState(true);
  const [togglePurchases, setTogglePurchases] = useState(false);

  if (isScanning) return <Scanner setScanning={setScanning} />;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {/* <Title type="success"> */}
        <PText color="success" fontSize="60px" bold>
          <TweenOne
            animation={{
              Children: {
                value: 78240.65,
                floatLength: 2,
                formatMoney: true,
              },
              duration: 1000,
            }}
          />
        </PText>
        {/* </Title> */}
        <PText>Household Budget</PText>
      </div>
      <Divider />
      <Space direction="vertical">
        <Space>
          <Toggle
            checked={toggleSavings}
            onChange={(e) => {
              setToggleSavings(!toggleSavings);
              props.toast(
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
              props.toast(
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
            variant="success"
            onClick={() => props.toast("Shop", "Shop area...")}
          >
            SHOP
          </Button>
          <Button
            variant="subtle"
            onClick={() => props.toast("Members", "Members area...")}
          >
            MEMBERS
          </Button>
          <Button
            variant="danger"
            onClick={() => props.toast("Settings", "Settings area...")}
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

const mapStateToProps = (state) => {
  return {
    toast: state.toast.create,
  };
};

export default connect(mapStateToProps)(Home);

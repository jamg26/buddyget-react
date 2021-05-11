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

const PersonalWallet = (props) => {
  const [isScanning, setScanning] = useState(false);
  const [toggleSavings, setToggleSavings] = useState(true);

  if (isScanning) return <Scanner setScanning={setScanning} />;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {/* <Title type="success"> */}
        <PText color="success" fontSize="60px" bold>
          <TweenOne
            animation={{
              Children: {
                value: 13025.25,
                floatLength: 2,
                formatMoney: true,
              },
              duration: 1000,
            }}
          />
        </PText>
        {/* </Title> */}
        <PText>Personal Wallet</PText>
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
            onClick={() => props.history.push("/transfer")}
          >
            TRANSFER
          </Button>
          <Button
            variant="success"
            onClick={() => props.toast("Shop", "Shop area...")}
          >
            SHOP
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
          <Text>+5028.00 Received bonus salary. 05/07/21</Text>
        </div>
        <br />
        <div key="2">
          <Text>-146.00 Purchased Chocolate from 711 05/02/21</Text>
        </div>
        <br />
        <div key="3">
          <Text>
            -5000.00 You transfer money to the Household Budget. 05/01/21
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

export default connect(mapStateToProps)(PersonalWallet);

import { Typography, Switch, Space, Divider, Button } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";
import { useState } from "react";
import Scanner from "./Scanner";

const { Text, Title } = Typography;

const Home = (props) => {
  const [isScanning, setScanning] = useState(false);

  if (isScanning) return <Scanner setScanning={setScanning} />;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Title type="success">78,240.00+</Title>
        <Text>Household Budget</Text>
      </div>
      <Divider />
      <Space direction="vertical">
        <Space>
          <Switch defaultChecked /> <Text>Saving Mode</Text>
        </Space>
        <Space>
          <Switch /> <Text>Restrict household purchases</Text>
        </Space>
      </Space>
      <Divider />
      <div style={{ textAlign: "center" }}>
        <Button type="link" onClick={() => setScanning(true)}>
          <Space>
            <QrcodeOutlined style={{ fontSize: 50 }} />
            <Title level={5}>Scan To Pay</Title>
          </Space>
        </Button>
      </div>
      <Divider />
      <div style={{ textAlign: "center" }}>
        <Space>
          <Button type="primary">SEND</Button>
          <Button type="primary">SHOP</Button>
          <Button type="primary">MEMBERS</Button>
          <Button type="primary">SETTINGS</Button>
        </Space>
      </div>
      <Divider>
        <Title level={4}>Recent Transaction</Title>
      </Divider>
      <Space direction="vertical">
        <Text>-823.00 Purchased by John from GMALL 03/02/21</Text>
        <Text>-1540.00 Purchased by Mary from 711 03/02/21</Text>
        <Text>+5000.00 You added money to the Household Budget. 02/26/21</Text>
      </Space>
    </>
  );
};

export default Home;

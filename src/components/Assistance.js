import { Typography, Select, Space, Divider, Button, message } from "antd";
import sapImage from "./images/sap.png";

const { Text } = Typography;
const { Option } = Select;

const Assistance = (props) => {
  return (
    <>
      <Space direction="vertical">
        <Text>Select financial assistance</Text>
        <Select style={{ width: "100%" }} defaultValue="sap">
          <Option value="sap">Social Amelioration Program</Option>
        </Select>
        <img src={sapImage} alt="sap" width="500" />
        <Text>
          The Social Amelioration Program grants a P5,000 to P8,000 monthly cash
          subsidy to low-income families for two months, depending on the area
          of residence. The subsidies provide marginalized sectors of society
          the means to afford basic needs during the pandemic.
        </Text>
        <Divider />

        <div style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Text type="success">You are eligible to apply this program.</Text>
            <Button
              size="large"
              type="primary"
              onClick={() => message.info("Successfully applied.")}
            >
              APPLY
            </Button>
          </Space>
        </div>
      </Space>
    </>
  );
};

export default Assistance;

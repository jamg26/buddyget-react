import {
  AliwangwangOutlined,
  HomeOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Divider, Row, Col, Typography, Space } from "antd";

const { Text, Title } = Typography;

const Reminder = (props) => {
  return (
    <>
      <Row justify="space-between" align="bottom">
        <Col>
          <Space>
            <AliwangwangOutlined style={{ fontSize: 40, color: "#1890ff" }} />
            <Space direction="vertical">
              <Text style={{ fontSize: 10, color: "#f5222d" }}>Due Today</Text>
              <Title level={3}>Water</Title>
            </Space>
          </Space>
        </Col>
        <Col>
          <Title>780.00</Title>
        </Col>
      </Row>
      <Divider />
      <Row justify="space-between" align="bottom">
        <Col>
          <Space>
            <ThunderboltOutlined style={{ fontSize: 40, color: "#fadb14" }} />
            <Space direction="vertical">
              <Text style={{ fontSize: 10, color: "#1890ff" }}>
                Upcoming: 03/12/21
              </Text>
              <Title level={3}>Electricity</Title>
            </Space>
          </Space>
        </Col>
        <Col>
          <Title>1650.00</Title>
        </Col>
      </Row>
      <Divider />
      <Row justify="space-between" align="bottom">
        <Col>
          <Space>
            <HomeOutlined style={{ fontSize: 40, color: "#13c2c2" }} />
            <Space direction="vertical">
              <Text style={{ fontSize: 10, color: "#52c41a" }}>
                Paid: 03/01/21
              </Text>
              <Title level={3}>Mortgage</Title>
            </Space>
          </Space>
        </Col>
        <Col>
          <Title>2100.00</Title>
        </Col>
      </Row>
    </>
  );
};

export default Reminder;

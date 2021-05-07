import { Typography, Row, Col, Divider, Button, Space } from "antd";

const { Text, Title } = Typography;

const Planner = (props) => {
  return (
    <>
      <Row justify="space-between" align="middle">
        <Col>
          <Title>Daily Living</Title>
        </Col>
        <Col>
          <Button size="large" type="primary">
            PLANNER
          </Button>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
          <Text>You Spent: 993.00/1,857.00</Text>
        </Col>
        <Col>
          <Text>Total: 500.00</Text>
        </Col>
      </Row>
      <Divider />

      <Row justify="space-between">
        <Col>
          <Title level={4}>Groceries</Title>
        </Col>
        <Col>
          <Title level={4}>200.00</Title>
        </Col>
      </Row>

      <Row justify="space-between">
        <Col>
          <Title level={4}>Dining out</Title>
        </Col>
        <Col>
          <Title level={4}>300.00</Title>
        </Col>
      </Row>
    </>
  );
};

export default Planner;

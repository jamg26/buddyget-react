import { Typography, Row, Col, Divider, Button } from "antd";
import QueueAnim from "rc-queue-anim";

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

      <QueueAnim interval={500}>
        <Row key="1" justify="space-between">
          <Col>
            <Title level={4}>Groceries</Title>
          </Col>
          <Col>
            <Title level={4}>200.00</Title>
          </Col>
        </Row>

        <Row key="2" justify="space-between">
          <Col>
            <Title level={4}>Dining out</Title>
          </Col>
          <Col>
            <Title level={4}>300.00</Title>
          </Col>
        </Row>
      </QueueAnim>
    </>
  );
};

export default Planner;

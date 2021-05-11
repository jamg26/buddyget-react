import { Typography, Divider, Row, Col } from "antd";
import {
  AlertOutlined,
  BellOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

const { Text, Link } = Typography;

const Notification = (props) => {
  return (
    <>
      <QueueAnim interval={500}>
        <Row justify="space-between" key="0">
          <Col span={23}>
            <Text>
              We noticed that you planned to dine out (Jollibee) (500.00) We
              found eat all you can at this location for (199.00).{" "}
              <Link>Show location</Link>
            </Text>
          </Col>
          <Col span={1}>
            <AlertOutlined style={{ fontSize: 40, color: "green" }} />
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" key="1">
          <Col span={23}>
            <Text>
              We noticed that you purchased Magnum Ice Cream x4 from 711
              (1540.00) You can alternatively buy in Convenience Store for
              (1400.00)
            </Text>
          </Col>
          <Col span={1}>
            <AlertOutlined style={{ fontSize: 40, color: "#faad14" }} />
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" key="2">
          <Col span={23}>
            <Text>
              We noticed that you purchased Pilot Ballpen from Convenience Store
              (50.00) You can alternatively buy in Grocerama for (20.00)
            </Text>
          </Col>
          <Col span={1}>
            <AlertOutlined style={{ fontSize: 40, color: "#faad14" }} />
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" key="3">
          <Col span={23}>
            <Text>
              Hi Jamuel, you are eligible to apply Social Amelioration Program.
              Click this notification to continue.
            </Text>
          </Col>
          <Col span={1}>
            <BellOutlined style={{ fontSize: 40, color: "#1890ff" }} />
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" key="4">
          <Col span={23}>
            <Text>
              We noticed that you purchased Piattos x10 from Convenience Store.
              We suggest to lessen the quantity of the product. You can disable
              this by turning off the saving mode in the settings.
            </Text>
          </Col>
          <Col span={1}>
            <ExclamationOutlined style={{ fontSize: 40, color: "#f5222d" }} />
          </Col>
        </Row>
      </QueueAnim>
    </>
  );
};

export default Notification;

import { Typography, Row, Col, Divider } from "antd";
import { Button, Text as PText } from "@pancakeswap-libs/uikit";
import QueueAnim from "rc-queue-anim";
import { useState } from "react";
import plan from "./plans.json.js";
import { connect } from "react-redux";

const { Text, Title } = Typography;

const Planner = (props) => {
  const [planned, setPlanned] = useState([
    {
      name: "50kg Rice",
      price: 1500,
      hasRecom: false,
    },
    {
      name: "Dining out (Jollibee)",
      price: 500,
      hasRecom: true,
    },
  ]);

  const addPlan = () => {
    if (planned.length === 21) return;
    setPlanned([...planned, plan[planned.length - 2]]);
    props.toast("Planner", "Plan succesfully added.");
  };

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col>
          <Title>Daily Living</Title>
        </Col>
        <Col>
          <Button size="large" type="primary" onClick={addPlan}>
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
        {planned.map((plan, index) => {
          return (
            <Row key={index} justify="space-between">
              <Col>
                <PText level={4}>
                  {plan.name}{" "}
                  {plan.hasRecom ? (
                    <Button
                      variant="text"
                      scale="sm"
                      onClick={() => props.history.push("/notifications")}
                    >
                      Has recommendation!
                    </Button>
                  ) : (
                    ""
                  )}
                </PText>
              </Col>
              <Col>
                <PText level={4}>{plan.price.toFixed(2)}</PText>
              </Col>
            </Row>
          );
        })}
      </QueueAnim>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    toast: state.toast.create,
  };
};

export default connect(mapStateToProps)(Planner);

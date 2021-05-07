import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import { Row, Col, Card, Typography } from "antd";
import Header from "./components/Header";
import Expenses from "./components/Expenses";
import Notification from "./components/Notifications";
import Planner from "./components/Planner";

const { Text } = Typography;

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Row justify="center" style={{ marginLeft: 5, marginRight: 5 }}>
          <Col xl={12} lg={16} md={18} sm={24} xs={24}>
            <Header />
            <Card>
              <Route path="/" exact component={Home} />
              <Route path="/expenses" exact component={Expenses} />
              <Route path="/notifications" exact component={Notification} />
              <Route path="/planner" exact component={Planner} />
            </Card>
            <Text type="secondary" style={{ fontSize: 10 }}>
              These interfaces are the prototype of Buddyget made with ❤️ by
              Jamuel Galicia.
            </Text>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  );
};

export default App;

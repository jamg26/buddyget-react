import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import { Row, Col, Card, Typography } from "antd";
import Header from "./components/Header";
import Expenses from "./components/Expenses";

const { Text } = Typography;

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Row justify="center" style={{ marginLeft: 5, marginRight: 5 }}>
          <Col lg={8} md={16} sm={24} xs={24}>
            <Header />
            <Card>
              <Route path="/" exact component={Home} />
              <Route path="/expenses" exact component={Expenses} />
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

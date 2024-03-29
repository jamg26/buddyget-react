import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import { Row, Col, Card, Typography } from "antd";
import Header from "./components/Header";
import Expenses from "./components/Expenses";
import Notification from "./components/Notifications";
import Planner from "./components/Planner";
import Reminder from "./components/Reminder";
import Assistance from "./components/Assistance";
import TableInsights from "./components/Insights/table";
import GraphInsights from "./components/Insights/graph";
import "rc-texty/assets/index.css";
import Toast from "./components/Toast";
import PersonalWallet from "./components/PersonalWallet";
import Transfer from "./components/transfer";
// import Transferring from "./components/transfer_anim";

const { Text } = Typography;

const App = (props) => {
  return (
    <>
      <Toast />
      <BrowserRouter>
        <Row justify="center" style={{ marginLeft: 5, marginRight: 5 }}>
          <Col xl={12} lg={16} md={18} sm={24} xs={24}>
            <Header />
            <Card>
              <Route path="/" exact component={Home} />
              <Route path="/expenses" exact component={Expenses} />
              <Route path="/notifications" exact component={Notification} />
              <Route path="/planner" exact component={Planner} />
              <Route path="/reminder" exact component={Reminder} />
              <Route path="/assistance" exact component={Assistance} />
              <Route path="/insights/table" exact component={TableInsights} />
              <Route path="/insights/graph" exact component={GraphInsights} />
              <Route path="/wallet" exact component={PersonalWallet} />
              <Route path="/transfer" exact component={Transfer} />
              {/* <Route path="/transferring" exact component={Transferring} /> */}
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

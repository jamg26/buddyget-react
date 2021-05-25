import QueueAnim from "rc-queue-anim";
import { Space, Typography, Divider } from "antd";
import { Text as TXT } from "@pancakeswap-libs/uikit";
import { connect } from "react-redux";
import { useEffect, useRef, useState } from "react";

const { Text } = Typography;

const Transferring = (props) => {
  const [token, setToken] = useState("");
  const ref = useRef(null);

  var rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  useEffect(() => {
    setToken(`${rand()}${rand()}`);
  }, []);

  return (
    <div ref={ref}>
      <QueueAnim
        delay={2000}
        interval={15000}
        className="queue-simple"
        leaveReverse={true}
        onEnd={(event) => {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
          if (event.key === "n")
            props.toast(
              `Transfer ${props.to}`,
              `Succeessfully transferred ${parseFloat(props.amt).toFixed(2)}`
            );
        }}
      >
        <div key="a">
          <Space>
            <TXT bold>Preparing for transfer.</TXT>
          </Space>
        </div>
        <div key="b">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="green">(Client)</TXT> Sending HTTP request (POST) to
              <TXT bold>"/api/payments"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                to: "${props.to}",
                amount: ${props.amt}
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="c">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="red">(Backend)</TXT> Received HTTP request (POST) from
              <TXT bold>"/api/payments"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                to: "${props.to}",
                amount: ${props.amt}
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="d">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="red">(Backend)</TXT> Sending HTTP request (POST) to
              <TXT bold>"api.bdo.com.ph/create_payment"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                to: "${props.to}",
                amount: ${props.amt}
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="e">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="red">(Backend)</TXT> Received response from
              <TXT bold>"api.bdo.com.ph/create_payment"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                payment_token: "${token}"
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="f">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="green">(Client)</TXT> Received response from
              <TXT bold>"/api/payments"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                payment_token: "${token}"
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="g">
          <Divider />
          <Space>
            <TXT color="green">(Client)</TXT> Click
            <TXT bold>CONFIRM</TXT> Button.
          </Space>
        </div>
        <div key="h">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="green">(Client)</TXT> Sending HTTP request (POST) to
              <TXT bold>"/api/confirm_payment"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                payment_token: "${token}"
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="i">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="red">(Backend)</TXT> Received HTTP request (POST) from
              <TXT bold>"/api/confirm_payment"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                payment_token: "${token}"
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="j">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="red">(Backend)</TXT> Sending HTTP request (POST) to
              <TXT bold>"api.bdo.com.ph/confirm_payment"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                payment_token: "${token}"
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="k">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="red">(Backend)</TXT> Received response from
              <TXT bold>"api.bdo.com.ph/confirm_payment"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                status: "success"
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="k2">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="red">(Backend)</TXT>
              <TXT bold>Adjust balance</TXT>
            </Space>
          </Space>
        </div>
        <div key="l">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="green">(Client)</TXT> Received response from
              <TXT bold>"/api/confirm_payment"</TXT>
            </Space>
            <Space direction="vertical">
              <Text>Parameters:</Text>
              <Text code>{`{
                status: "success", receipt_url: "https://buddyget....."
            }`}</Text>
            </Space>
          </Space>
        </div>
        <div key="m">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT color="green">(Client)</TXT>
              <TXT bold>Display success message.</TXT>
            </Space>
          </Space>
        </div>
        <div key="n">
          <Divider />
          <Space direction="vertical">
            <Space>
              <TXT bold>Finished transfer.</TXT>
            </Space>
          </Space>
        </div>
      </QueueAnim>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toast: state.toast.create,
  };
};

export default connect(mapStateToProps)(Transferring);

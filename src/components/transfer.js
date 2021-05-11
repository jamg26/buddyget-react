import { Radio, Text, Input, Button } from "@pancakeswap-libs/uikit";
import { Space } from "antd";
import { useState } from "react";
import { Divider } from "antd";
import { connect } from "react-redux";

const Transfer = (props) => {
  const [transferMethod, setTransferMethod] = useState("household");
  const [state, setState] = useState({
    userTransferValue: "",
    houseTransferValue: "",
    userPhone: "",
  });

  const handleChange = (e) => {
    setTransferMethod(e.target.value);
  };

  const handleTransferChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleTransfer = (type) => {
    if (type === "house") {
      if (!state.houseTransferValue) return;
      props.toast(
        "Transferring",
        `${parseFloat(state.houseTransferValue).toFixed(
          2
        )} to household budget.`
      );
    }

    if (type === "user") {
      if (!state.userTransferValue) return;
      props.toast(
        "Transferring",
        `${parseFloat(state.userTransferValue).toFixed(2)} to ${
          state.userPhone
        }.`
      );
    }

    setState({
      userTransferValue: "",
      houseTransferValue: "",
      userPhone: "",
    });
  };

  return (
    <>
      <Space direction="vertical">
        <Space>
          <Radio
            name="transfer"
            scale="sm"
            value="household"
            onChange={handleChange}
            checked={transferMethod === "household" ? true : false}
          />{" "}
          <Text>Household Budget</Text>
        </Space>
        <Space>
          <Radio
            name="transfer"
            scale="sm"
            value="user"
            onChange={handleChange}
          />{" "}
          <Text>Buddyget User</Text>
        </Space>
      </Space>
      <Divider />
      {transferMethod === "household" ? (
        <Space>
          <Input
            placeholder="0.00"
            type="number"
            scale="lg"
            name="houseTransferValue"
            onChange={handleTransferChange}
            value={state.houseTransferValue}
          />
          <Button onClick={() => handleTransfer("house")}>Transfer</Button>
        </Space>
      ) : (
        <Space direction="vertical">
          <Input
            placeholder="Phone/Email"
            type="text"
            scale="lg"
            name="userPhone"
            onChange={handleTransferChange}
            value={state.userPhone}
          />
          <Input
            placeholder="0.00"
            type="number"
            scale="lg"
            name="userTransferValue"
            onChange={handleTransferChange}
            value={state.userTransferValue}
          />
          <Button onClick={() => handleTransfer("user")}>Transfer</Button>
        </Space>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    toast: state.toast.create,
  };
};

export default connect(mapStateToProps)(Transfer);

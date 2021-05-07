import { Table, Typography, Popover, Space } from "antd";
import { Link } from "react-router-dom";
import QueueAnim from "rc-queue-anim";

const { Text } = Typography;
const Expenses = (props) => {
  const dataSource = [
    {
      key: "1",
      id: "29749261",
      type: "bill",
      name: "Davao Light",
      cost: 1650,
      date: "10-02-2021",
      date_p: "10-02-2021 08:27 AM",
      store: "Davao Light",
      user: "John",
      price: 1650,
      qty: 1,
    },
    {
      key: "2",
      id: "76867234",
      type: "product",
      name: "Pilot Ballpen x2",
      cost: 50,
      date: "10-06-2021",
      date_p: "10-06-2021 12:28 PM",
      store: "Convenience",
      user: "Lester",
      price: 25,
      qty: 2,
    },
    {
      key: "3",
      id: "56858443",
      type: "product",
      name: "Magnum Ice Cream x4",
      cost: 1540,
      date: "10-09-2021",
      date_p: "10-09-2021 02:03 PM",
      store: "711",
      user: "Mary",
      price: 389,
      qty: 3,
    },
  ];

  const columns = [
    {
      title: "Action",
      render: (data) => (
        <Popover
          placement="left"
          content={
            <>
              <Space direction="vertical">
                <Text>{data.name}</Text>
                <Text>Total: {data.cost.toFixed(2)}</Text>
                <Text>Quantity: x{data.qty}</Text>
                <Text>Price: {data.price.toFixed(2)}</Text>
                <Text>{data.date_p}</Text>
              </Space>
            </>
          }
          title={<Text>Expense #{data.id}</Text>}
          trigger="click"
        >
          <Link to="#">View</Link>
        </Popover>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Store",
      dataIndex: "store",
      key: "store",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      align: "right",
      render: (cost) => <Text>{cost.toFixed(2)}</Text>,
    },
  ];

  return (
    <>
      <QueueAnim interval={1000}>
        <div key="1">
          <Table
            title={() => <Text>Expenses</Text>}
            dataSource={dataSource}
            columns={columns}
            size="small"
            rowKey="key"
          />
        </div>
      </QueueAnim>
    </>
  );
};

export default Expenses;

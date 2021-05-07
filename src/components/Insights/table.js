import { Typography, Space, Divider, Table } from "antd";

const { Text } = Typography;
const TableInsights = (props) => {
  const dataSource = [
    {
      key: "1",
      type: "Product",
      description: "Hennessy - VSOP - 700ml | Cognac",
      cost: 3190,
      severity: "High",
    },
    {
      key: "2",
      type: "Custom",
      description: "Jollibee Dine-in",
      cost: 760,
      severity: "Medium",
    },
  ];

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      render: (cost) => <Text>{cost.toFixed(2)}</Text>,
    },
    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity",
    },
  ];

  return (
    <>
      <Space direction="vertical">
        <Text strong>Insights from last week</Text>
        <Text>Insight ID: 79246</Text>
        <Text>Total Cost: PHP 14,251.00</Text>
        <Text type="danger">
          Your total cost of last week was higher than your weekly income.
        </Text>
      </Space>
      <Divider />
      <Text type="success">
        These items are not in the priority list and you can avoid next time.
      </Text>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default TableInsights;

import { Column } from "@ant-design/charts";

const GraphInsights = (props) => {
  var data = [
    {
      type: "January",
      sales: 80927,
    },
    {
      type: "February",
      sales: 76028,
    },
    {
      type: "March",
      sales: 90283,
    },
    {
      type: "April",
      sales: 100847,
    },
    {
      type: "May",
      sales: 101923,
    },
    {
      type: "June",
      sales: 90283,
    },
    {
      type: "July",
      sales: 80957,
    },
    {
      type: "August",
      sales: 60556,
    },
    {
      type: "September",
      sales: 70654,
    },
    {
      type: "October",
      sales: 80658,
    },
    {
      type: "November",
      sales: 65659,
    },
    {
      type: "December",
      sales: 90658,
    },
  ];

  var config = {
    data: data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: "Month" },
      sales: { alias: "Cost" },
    },
  };

  return (
    <>
      <Column {...config} />
    </>
  );
};

export default GraphInsights;

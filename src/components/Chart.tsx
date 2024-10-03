import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const PieChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Sold out", "Still Selling", "Co-ownership"],
    colors: ["#E5A000", "#009951", "#FFF1C2"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    title: {
      text: "Total Units",
      align: "center",
    },
  };
  const series = [50, 30, 20]; //replace with data from endpoint
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export const LineChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      parentHeightOffset: 0,
      width: "100%",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      colors: ["#00142E"],
      width: 1,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      show: false,
      min: 0,
      tickAmount: 5,
      labels: {
        formatter: (value) => `N${value}`,
      },
    },
    dataLabels: { enabled: false },
    markers: {
      size: 0,
      hover: { size: 5 },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#5E95DC",
            opacity: 1,
          },
          {
            offset: 95.55,
            color: "rgba(1, 41, 92, 0)",
            opacity: 0,
          },
        ],
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [
        27000000, 24000000, 25000000, 30000000, 32000000, 25000000, 25000000,
        35000000, 35000000, 38000000,
      ],
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={280}
      />
    </div>
  );
};

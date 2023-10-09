"use client"

import Chart from "react-apexcharts";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


export default function ChartCompoent() {
const categories = ["4/5/23", "4/6/23", "4/7/23", "4/8/23", "4/9/23", "4/10/23", "4/11/23"]
const dA = [30, 25, 35, 28, 32, 38, 28]
const dB = [30, 35, 28, 32, 38, 20, 18]

  const options = {
    dataLabels: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    // colors: ["#0087fe"],
    colors: ["#0D6EFD", '#FFB621'],
    fill: {
      type: "gradient",
      // gradient: {
      //   shadeIntensity: 1,
      //   opacityFrom: 0.7,
      //   opacityTo: 0.9,
      //   stops: [0, 100]
      // },
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      show: true,
      padding: {
        left: 0,
        right: 0,
      },
    },
    tooltip: {
      enabled: true,
    },
    chart: {
      id: "line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories,
    },
    yaxis: {
      axisTicks: {
        show: false
      },
      labels: {
        offsetX: -15,
        offsetY: 0,
        formatter: function (val, index) {
          return val.toLocaleString('en-US', { maximumFractionDigits: 2 });
        },
      },
    },
  }

  return (
    <div className="w-full rounded-lg">
      <div>
        <div className="w-full text-black rounded-md">
          <div className="md:px-3">
            <Chart
              options={options}

              series={[
                {
                  name: "Contact Requests",
                  data: dA
                },
                {
                  name: "Callback Requests",
                  data: dB
                },
              ]}

              type="area"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}










// "use client"

// // import React from 'react';
// // import {
// //     Chart as ChartJS,
// //     CategoryScale,
// //     LinearScale,
// //     PointElement,
// //     LineElement,
// //     Title,
// //     Tooltip,
// //     Legend,
// // } from 'chart.js';
// // import { Line } from 'react-chartjs-2';

// // ChartJS.register(
// //     CategoryScale,
// //     LinearScale,
// //     PointElement,
// //     LineElement,
// //     Title,
// //     Tooltip,
// //     Legend
// // );

// // export const options = {
// //     responsive: true,
// //     plugins: {
// //         legend: {
// //             position: 'top' 

// //         },
// //         title: {
// //             display: true,
// //             text: 'Chart.js Line Chart',
// //         },
// //     },
// // };

// // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// // export const data = {
// //     labels,
// //     datasets: [
// //         {
// //             label: 'Dataset 1',
// //             data: [12, 19, 3, 5, 2, 3, 10],
// //             borderColor: 'rgb(255, 99, 132)',
// //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
// //         },
// //         {
// //             label: 'Dataset 2',
// //             data: [8, 10, 5, 8, 4, 7, 12],
// //             borderColor: 'rgb(53, 162, 235)',
// //             backgroundColor: 'rgba(53, 162, 235, 0.5)',
// //         },
// //     ],
// // };

// // export default function LineChart() {
// //     return (
// //         <div>
// //             <Line options={options} data={data} />
// //         </div>
// //     )
// // }
// // import React from 'react';
// import ReactECharts from 'echarts-for-react';

// export default function Chart () {
//   const option = {
//     xAxis: {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//       type: 'value'
//     },
//     series: [
//       {
//         data: [150, 230, 224, 218, 135, 147, 260],
//         type: 'line'
//       }
//     ]
//   };

//   return <ReactECharts option={option} />;
// };

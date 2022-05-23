//export default function ChartTrimester() {
//  return (
//    <div>ChartTrimester</div>
//  )
//}

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';


 

export const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    annotations: [
      // 低于中位数颜色变化
      {
        type: 'regionFilter',
        start: ['min', '0'],
        end: ['max', '500'],
        color: '#05d2b3',
      },
      {
        type: 'regionFilter',
        start: ['min', '500'],
        end: ['max', '1000'],
        color: '#2ab909',
      },
      {
        type: 'regionFilter',
        start: ['min', '1000'],
        end: ['max', '1500'],
        color: '#fdb304',
      },
      {
        type: 'regionFilter',
        start: ['min', '1500'],
        end: ['max', '2000'],
        color: '#fb6809',
      },
      {
        type: 'regionFilter',
        start: ['min', '2000'],
        end: ['max', '2500'],
        color: '#fe1800',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: 'Median',
        offsetY: -4,
        style: {
          lineWidth: 8,
          textBaseline: 'bottom',
        },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          lineWidth: 1,
          lineDash: [2, 2],
        },
      },
    ],
  };

  return <Line {...config} />;
};
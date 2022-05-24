//export default function ChartTrimester() {
//  return (
//    <div>ChartTrimester</div>
//  )
//}

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';


 

export const DemoLine = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(props.imcs)
    setData(props.imcs)
  }, []);

  const config = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'imc',
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', '0'],
        end: ['max', '18.5'],
        color: '#05d2b3',
      },
      {
        type: 'regionFilter',
        start: ['min', '18.5'],
        end: ['max', '25'],
        color: '#2ab909',
      },
      {
        type: 'regionFilter',
        start: ['min', '25'],
        end: ['max', '30'],
        color: '#fdb304',
      },
      {
        type: 'regionFilter',
        start: ['min', '30'],
        end: ['max', '35'],
        color: '#fb6809',
      },
      {
        type: 'regionFilter',
        start: ['min', '35'],
        end: ['max', '5000'],
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

  return (
    <div style={{width: "1200px", margin: "20% auto"}}>
      <Line {...config} />
    </div>
    );
};
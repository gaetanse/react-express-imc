// export default function ChartImcNow() {
//  return (
//    <div>ChartImcNow</div>
//  )
//}

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';

export const DemoGauge = () => {
  const config = {
    percent: 0.5,
    range: {
      width:20,
      ticks: [0.4, 0.47, 0.62, 0.75, 1],

      color: ["#8587ff", "#006aff", "#1bff17", "#ff85ba", "#ff0d00"]
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#ff0d00',
          
        
        },
      },
      pin: {
        style: {
          stroke: '#ff0d00',
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 40;
        },
      },
      subTickLine: {
        count: 6,
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '12px',
          lineHeight: '25px',
        },
      },
    },
  };
  return (
    <Gauge {...config}/>
  );
  
};

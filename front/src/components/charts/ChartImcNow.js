// export default function ChartImcNow() {
//  return (
//    <div>ChartImcNow</div>
//  )
//}

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';
import color from "./../../data/color.json"

export const DemoGauge = (props) => {

  const [pourcentage, setPourcentage] = useState(0)
  const [colorNeed, setColorNeed] = useState(undefined)

  const imc = props.imc

  useEffect(() => {

    setPourcentage(imc/40)

    if(imc<16){
        setColorNeed(color.veryverylow)
    }
    else if(imc>=16 && imc<=18.5){
      setColorNeed(color.verylow)
    }
    else if(imc>18.5&& imc<=25){
      setColorNeed(color.normal)
    }
    else if(imc>25 && imc<=30.5){
      setColorNeed(color.verybig)
    }
    else if(imc>30.5){
      setColorNeed(color.veryverybig)
    }

  });

  const config = {
    percent: pourcentage,
    range: {
      width:20,
      ticks: [0.4, 0.47, 0.62, 0.75, 1],

      color: ["#8587ff", "#006aff", "#1bff17", "#ff85ba", "#ff0d00"]
    },
    indicator: {
      pointer: {
        style: {
          stroke: colorNeed,
        },
      },
      pin: {
        style: {
          stroke: colorNeed,
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

// export default function ChartImcNow() {
//  return (
//    <div>ChartImcNow</div>
//  )
//}

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';
import etat from "./../../data/etat.json"

export const DemoGauge = (props) => {

  const [pourcentage, setPourcentage] = useState(0)
  const [colorNeed, setColorNeed] = useState(undefined)

  const imc = props.imc

  useEffect(() => {

    

    setPourcentage(imc/40)

    if(imc<18.5){
        setColorNeed(etat[0].color)
    }
    else if(imc>=18.5 && imc<=25){
      setColorNeed(etat[1].color)
    }
    else if(imc>25&& imc<=30){
      setColorNeed(etat[2].color)
    }
    else if(imc>30 && imc<=35){
      setColorNeed(etat[3].color)
    }
    else if(imc>35){
      setColorNeed(etat[4].color)
    }

  });

  const config = {
    percent: pourcentage,
    range: {
      width:20,
      ticks: [0.46, 0.62, 0.75, 0.87, 1],

      color: [etat[0].color, etat[1].color, etat[2].color, etat[3].color, etat[4].color]
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

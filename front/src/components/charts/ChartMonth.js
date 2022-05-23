// export default function ChartMonth() {
//  return (
//    <div>ChartMonth</div>
//  )
//}

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

export const DemoPie = (props) => {

  useEffect(() => {
    console.log(props.imcs)
  },[]);

  const data = [
    {
      etat: 'm',
      sold: 0.95,
    },
    {
      etat: 'k',
      sold: 0.55,
    },
    {
      etat: 'l',
      sold: 0.75,
    },
    {
      etat: 'o',
      sold: 0.95,
    },
    {
      etat: 's',
      sold: 0.20,
    },
  ];
  const config = {
    
    appendPadding: 10,
    data,
    angleField: 'sold',
    colorField: 'etat',
    radius: 0.8,
    legend: false,
    label: {
      type: 'inner',
      offset: '-30%',
      style: {
        fill: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
    },
    pieStyle: ({ etat }) => {
      if (etat === 'm') {
        return {
          fill: 'p(a)https://www.irishnews.com/picturesarchive/irishnews/irishnews/2019/04/08/132023636-837d5e87-036c-489c-865a-84c20167b41f.jpg',
          size :18,
        };
      }
      if (etat === 'k') {
        return {
          fill: 'p(a)https://media.istockphoto.com/vectors/big-and-little-skulls-seamless-patern-vector-id1184543333?k=20&m=1184543333&s=612x612&w=0&h=2-E41OZ4jp3NZkCYdc6X8RAsOJ5cSf4q-LfjGv5n_5E=',
          size :18,
        };
      }
      if (etat === 'l') {
        return {
          fill: 'p(a)https://gift.kleecks-cdn.com/img/vari%C3%A9t%C3%A9s-d-eau-min%C3%A9rale/vari%C3%A9t%C3%A9s-d-eau-min%C3%A9rale.jpg',
          size :18,
        };
      }

      if (etat === 'o') {
        return {
          fill: 'p(a)https://img-3.journaldesfemmes.fr/HwUgYMFAXpGcR9A7Xrw4oF67Mf4=/1500x/smart/409e102e633d42759746f73e286431a3/ccmcms-jdf/11057068.jpg',
          size : 18,
        };
      }

      return {
        fill: 'p(a)https://upload.wikimedia.org/wikipedia/commons/4/44/Salade_laitue_%28SALVINA%291991_Cl_Jean_Weber_%2823594776891%29.jpg',
        size : 18,
      };
    },
    tooltip: false,
    interactions: [
      {
        type: 'element-single-selected',
      },
    ],
  };
  return <Pie {...config} />;
};

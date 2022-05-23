// export default function ChartMonth() {
//  return (
//    <div>ChartMonth</div>
//  )
//}

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

export const DemoPie = () => {
  const data = [
    {
      etat: 'm',
      sold: 0.15,
    },
    {
      etat: 'k',
      sold: 0.15,
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
          fill: 'p(a)https://pricepally.com/products/612977ab868e2.jpg',
          size :18,
        };
      }
      if (etat === 'k') {
        return {
          fill: 'p(a)https://rukminim1.flixcart.com/image/416/416/jvsf3ww0/emergency-sign/y/h/m/pr-uk-111-signever-original-imafgm4s23e4dcwj.jpeg?q=70',
          size :18,
        };
      }
      if (etat === 'l') {
        return {
          fill: 'p(a)https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2019.2F09.2F16.2F5c953641-67b0-4dd1-a365-5ba785ffa041.2Ejpeg/1200x630/background-color/ffffff/quality/70/cr/wqkgWGFueWE2OSAvIEdldHR5IEltYWdlcyAvIENBUElUQUw%3D/du-pain-et-de-leau-pour-les-deux-enfants-qui-navaient-pas-paye-la-cantine-1350305.jpg',
          size :18,
        };
      }

      if (etat === 'o') {
        return {
          fill: 'p(a)https://img-3.journaldesfemmes.fr/HwUgYMFAXpGcR9A7Xrw4oF67Mf4=/1500x/smart/409e102e633d42759746f73e286431a3/ccmcms-jdf/11057068.jpg',
          size : 6,
        };
      }

      return {
        fill: 'p(a)https://www.irishnews.com/picturesarchive/irishnews/irishnews/2019/04/08/132023636-837d5e87-036c-489c-865a-84c20167b41f.jpg',
        size : 1,
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

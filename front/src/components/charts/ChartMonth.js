import React, { useState, useEffect } from 'react'
import { Pie } from '@ant-design/plots'
import { useSelector } from "react-redux"
import PieChart from '../PieChart'

export const DemoPie = (_props) => {
  
  const imcs = useSelector(state=>state.imcs)

  const [data,setData] = useState([])

  useEffect(() => {

    if(imcs.length!=0){

      let compteur0local = 0
      let compteur1local = 0
      let compteur2local = 0
      let compteur3local = 0
      let compteur4local = 0

      for(let i=0; i<imcs.length; ++i){
        if(imcs[i].numero==0){
          compteur0local++
        }
        else if(imcs[i].numero==1){
          compteur1local++
        }
        else if(imcs[i].numero==2){
          compteur2local++
        }
        else if(imcs[i].numero==3){
          compteur3local++
        }
        else if(imcs[i].numero==4){
          compteur4local++
        }
      }

      setData(
        [
          {
            etat: 'm',
            sold: compteur0local,
          },
          {
            etat: 'k',
            sold: compteur1local,
          },
          {
            etat: 'l',
            sold: compteur2local,
          },
          {
            etat: 'o',
            sold: compteur3local,
          },
          {
            etat: 's',
            sold: compteur4local,
          },
        ]
      )

    }

  },[imcs]);

/*const data = 
[
  {
    etat: 'm',
    sold: 0,
  },
  {
    etat: 'k',
    sold: 0,
  },
  {
    etat: 'l',
    sold: 0,
  },
  {
    etat: 'o',
    sold: 0,
  },
  {
    etat: 's',
    sold: 0,
  },
]*/
  return(
    <PieChart data={data}/>
  )
}

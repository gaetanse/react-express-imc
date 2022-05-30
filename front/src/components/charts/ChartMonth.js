import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import PieChart from '../PieChart'

export const DemoPie = (_props) => {
  
  const imcs = useSelector(state=>state.imcs)

  const [data,setData] = useState([])

  useEffect(() => {

    if(imcs.length!==0){

      let compteur0local = 0
      let compteur1local = 0
      let compteur2local = 0
      let compteur3local = 0
      let compteur4local = 0

      for(const element of imcs){
        if(element.numero===0){
          compteur0local++
        }
        else if(element.numero===1){
          compteur1local++
        }
        else if(element.numero===2){
          compteur2local++
        }
        else if(element.numero===3){
          compteur3local++
        }
        else if(element.numero===4){
          compteur4local++
        }
      }

      setData(
        [
          {
            etat: 'maigreur',
            sold: compteur0local,
          },
          {
            etat: 'normal',
            sold: compteur1local,
          },
          {
            etat: 'surpoids',
            sold: compteur2local,
          },
          {
            etat: 'obesite',
            sold: compteur3local,
          },
          {
            etat: 'morbide',
            sold: compteur4local,
          },
        ]
      )

    }

  },[imcs]);

  return(
    <PieChart data={data}/>
  )
}

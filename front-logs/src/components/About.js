/* eslint-disable */
import React ,{useState,useEffect}from 'react'

export const About =() =>{
   
    const [data, setdata] =useState([])
    
    useEffect(()=>{
        const getData = async () => {
            const res =await fetch('http://localhost:8080/listar/logs')
            const data1 = await res.json()
            console.log(data1)
            setdata(data1)
       }
        getData()
        
    },[])
      
return (
<div className="row">    
    { <table className="table table-hover">
        <thead>
            <tr className="table-success">
                <th scope="col">Codigo de comida</th>
                <th scope="col">codigo de galpon</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Accion</th>
                <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
           { data?.map((value)=>
               <tr key={value._id}>
                    <th>{value.cod_food}</th>
                    <th>{value.cod_galpon}</th>
                    <th>{value.quantity}</th>
                    <th>{value.accion}</th>
                    <th>{value.fecha}</th>

               </tr>
           )
           }
        </tbody>
     </table> }       
 </div>
    )
}

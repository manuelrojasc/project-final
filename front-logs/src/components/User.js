/* eslint-disable */
import React ,{useState,useEffect}from 'react'

export const User =() =>{
   
     const [nombre,setName] =useState('')
     const [cod_alumno,setCode] =useState('')
     const [dni,setDni] =useState('')
     const [data,setdata] =useState()
    
     const handleSubmit=(e) =>{
         e.preventDefault()
           
       const res= fetch('https://www.integrationapi.tk/registrar/alumno',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                cod_alumno,
                 nombre,
                 dni
                 })
        })
        setName(""),
        setDni(""),
        setCode("")
     }
     const getNote = async (e)=>{
         e.preventDefault()
         const res =await fetch('http://157.55.202.174:7000/listar/alumnos')
         const data1 = await res.json()
         const data =JSON.stringify(data1)
         setdata(data)
        
   
    }
      

    const msg=(e)=>{
    alert("se agrego correctamente")
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" onChange={e=>setCode(e.target.value)} value={cod_alumno} className="form-control" placeholder="Codigo de estudiante" autoFocus/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={e=>setName(e.target.value)} value={nombre} className="form-control" placeholder="Nombre" autoFocus/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={e=>setDni(e.target.value)} value={dni} className="form-control" placeholder="dni" autoFocus/>
                    </div>
                    <button onClick ={msg} className="btn btn-primary btn-block">Registar</button>
                </form>
            </div>
        </div>
    )
}

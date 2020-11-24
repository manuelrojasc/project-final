const { json } = require('express')
const express=require('express')
const router=express.Router()
const modelos=require('../db/db')
const producer =require('../services/kafka')

function sendDataFarm(item){
    try {
        payload =[
            {
                topic:'sensorGalpon',
                messages:JSON.stringify(item)
            }
        ]
        producer.send(payload,function(e,result){
         if(e){
             throw e
         }
       
        })
    } catch (e) {
        throw e
    }
}

function sendData(item){
    try {
        payload =[
            {
                topic:'agua',
                messages:JSON.stringify(item)
            }
        ]
        producer.send(payload,function(e,result){
         if(e){
             throw e
         }
       
        })
    } catch (e) {
        throw e
    }
}
router.get('/', async(req, res) => {
    const cod_galpon='0002'
    const type = ["1", "2", "3","4","5"];
    const sensorValue = type[Math.floor(Math.random() * type.length)];
    var data={cod_galpon,sensorValue}
    sendDataFarm(data)
    sendData(data)
    var galpon = new modelos.galponModel(data);
    var result = await galpon.save();
    res.send('welcome to my api galpon')
})

router.get('/listar/muestras', async(request, response) => {
    try {
        var result = await modelos.galponModel.find().exec();
        response.json(result);  

    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports=router
const { json } = require('express')
const express=require('express')
const router=express.Router()
const modelos=require('../db/db')
const producer=require('../services/kafkaProducer')
const services=require('../services/kafkaConsumer')
const topicSensor=services.topic1()


  function sendToRegister(item){
    try {
        payload =[
            {
                topic:'almacen',
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


topicSensor.on('message',async function(message){
    const data = JSON.parse(message.value)
    const cod_galpon=data.cod_galpon
    const type1= ["0001", "0002","0003"];
    const type2 = ["Crecimiento", "Engorde", "Purina",];
    const type3 = ["10kg","20kg", "30kg", "40kg","50kg"];
    const cod_food = type1[Math.floor(Math.random() * type1.length)];
    const name = type2[Math.floor(Math.random() * type2.length)];
    const quantity = type3[Math.floor(Math.random() * type3.length)];
    const accion='llenado de comida'
    var datos={cod_food,name,quantity}
      if(data.sensorValue=='1'){
        var food = new modelos.foodModel(datos);
        var result = await food.save();
        var log={cod_food,cod_galpon,accion,quantity}
        sendToRegister(log)
          console.log('ALIMENTO CARGADO')
      }else{
          console.log('Tiene Alimento')
      }
})


router.get('/', (req, res) => {
    res.send('welcome to my food api')
})

router.get('/listar/alimentos', async(request, response) => {
    try {
        var result = await modelos.foodModel.find().exec();
        response.json(result);  

    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports=router
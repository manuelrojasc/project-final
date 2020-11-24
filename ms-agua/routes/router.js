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
                topic:'logagua',
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
    
    const type3 = ["1 lt","2 lt", "3 lt", "4 lt","5 lt"];
    const cod_food = type1[Math.floor(Math.random() * type1.length)];
    const quantity = type3[Math.floor(Math.random() * type3.length)];
    const accion='llenado de agua'
    var datos={cod_water,quantity}
    
      if(data.sensorValue=='2'){
        var food = new modelos.waterModel(datos);
        var result = await food.save();
        var log={cod_food,cod_galpon,accion,quantity}
        sendToRegister(log)
          console.log('Agua Llenada')
      }else{
          console.log('Tiene Agua')
      }
})


router.get('/', (req, res) => {
    res.send('welcome to my water api')
})

router.get('/listar/datos', async(request, response) => {
    try {
        var result = await modelos.waterModel.find().exec();
        response.json(result);  

    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports=router
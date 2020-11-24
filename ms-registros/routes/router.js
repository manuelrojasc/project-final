const { json } = require('express')
const express=require('express')
const router=express.Router()
const modelos=require('../db/db')
const service=require('../services/kafka')
const topic1=service.topic1()

topic1.on('message',async function(message){
    const data= JSON.parse(message.value)
    var log = new modelos.logModel(data);
        var result = await log.save();
    console.log(result)
})

router.get('/', (req, res) => {
    res.send('welcome to my log apì')
})

router.get('/listar/logs', async(request, response) => {
    try {
        var result = await modelos.logModel.find().exec();
        response.json(result);  

    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports=router
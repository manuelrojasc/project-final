const kafka =require('kafka-node')
const client=new kafka.KafkaClient({kafkaHost:'13.66.19.83:9091'})

const producer=new kafka.Producer(client)


producer.on('ready', function () {
   console.log('producer on ready')
});
 
producer.on('error', function (err) {})

module.exports=producer
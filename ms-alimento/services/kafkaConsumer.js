var kafka = require('kafka-node')

function topic1(){
        var client = new kafka.KafkaClient({ kafkaHost: '13.66.19.83:9091' })
        var consumer = new kafka.Consumer(client, [{ topic: 'sensorGalpon', offset:0 }], {autoCommit: true});
        return consumer
    }

/* function topic2(){
        var client = new kafka.KafkaClient({ kafkaHost: '168.63.41.72:9091' })
        var consumer = new kafka.Consumer(client, [{ topic: 'asitencia', offset:0 }], {autoCommit: true});
        return consumer
    } */
module.exports={topic1} 

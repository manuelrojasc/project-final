var kafka = require('kafka-node')

function topic1(){
        var client = new kafka.KafkaClient({ kafkaHost: '13.66.19.83:9091' })
        var consumer = new kafka.Consumer(client, [{ topic: 'agua', offset:0 }], {autoCommit: true});
        return consumer
    }


module.exports={topic1} 

const mongoose = require('mongoose')
//const uri = "mongodb://root:root@mongo:27017/logdb?authSource=admin";
const uri = "mongodb+srv://root:root@cluster0.kikhi.mongodb.net/logdb?retryWrites=true&w=majority"

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const logModel = mongoose.model("logs", {
    cod_food: { type: String, required: true },
    cod_galpon: { type: String, required: true },
    accion: { type: String, required: true },
    quantity: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = {
    logModel
}
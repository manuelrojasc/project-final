const mongoose = require('mongoose')
//const uri = "mongodb://root:root@mongo:27017/waterdb?authSource=admin";
const uri = "mongodb+srv://root:root@cluster0.kikhi.mongodb.net/waterdb?retryWrites=true&w=majority"

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const waterModel = mongoose.model("food", {
    cod_water: String,
    quantity: String
});

module.exports = {
    waterModel
}
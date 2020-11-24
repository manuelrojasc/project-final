const mongoose = require('mongoose')
//const uri = "mongodb://root:root@mongo:27017/fooddb?authSource=admin";
const uri = "mongodb+srv://root:root@cluster0.kikhi.mongodb.net/alimentodb?retryWrites=true&w=majority"

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const foodModel = mongoose.model("food", {
    cod_food: String,
    name: String,
    quantity: String
});

module.exports = {
    foodModel
}
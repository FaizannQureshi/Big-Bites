const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://helloworld:helloworld@cluster0.ber9bel.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected successfully');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();


        const food_category = await mongoose.connection.db.collection("food_category");
        const data2 = await food_category.find({}).toArray();


        global.food_items = data;
        global.food_category = data2;

        return data;

    } catch (err) {
        console.log("---", err);
        return null;
    }
};



module.exports = mongoDB;

const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DB_CNN, {
        });
        console.log('la base de datos esta okk');
        console.log('Connection succsessful');
    } catch (error) {
        console.error(error);
        throw new Error('Error trying to connect');
    }
}

module.exports = {
    dbConnection
}


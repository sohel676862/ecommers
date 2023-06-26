const mongoose =require('mongoose')
const { Schema,model } = mongoose;

const adminModal = new Schema({
    name: {
        type: String,
        required: true
    },

    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,

    },
    img: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    }

});
module.exports = model('admins', adminModal);
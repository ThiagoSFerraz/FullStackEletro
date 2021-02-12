const mongoose = require('../database/mongo')



const MensagemSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    msg: {
        type: String,
        required: true,
    },
    data:{
        type: Date,
        default: Date.now,
    }
})

const Mensagem = mongoose.model('Mensagem', MensagemSchema)

module.exports = Mensagem
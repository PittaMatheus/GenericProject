const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    // guarda o id do usuario que manipulou
    type: mongoose.Schema.Types.ObjectId,
    // referencia para qual modo é a alteração
    ref: 'User'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);
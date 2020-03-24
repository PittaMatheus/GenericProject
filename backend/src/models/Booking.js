const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    // guarda o id do usuario que manipulou
    type: mongoose.Schema.Types.ObjectId,
    // referencia para qual modo é a alteração
    ref: 'User'
  },
  spot: {
    // guarda o id do usuario que manipulou
    type: mongoose.Schema.Types.ObjectId,
    // referencia para qual modo é a alteração
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
const Spot = require('../models/Spot')

module.exports = {
  async show(req, res){
    const { user_id } = req.headers;

    const spots = await Spot.find({ user : user_id });
    return res.json(spots);

    /* const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    })
    */
    // await booking.populate('spot').populate('user').execPopulate();
  }
}
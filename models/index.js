const User = require('./user');
const Destinations = require('./destinations');
const Itinerary = require('./itinerary')

User.hasMany(Destinations, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Destinations.hasMany(Itinerary, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Destinations.belongsTo(User, {
  foreignKey: 'user_id'
});

Itinerary.belongsTo(User, {
  foreignKey: 'user_id'
});
module.exports = { User, Destinations, Itinerary };

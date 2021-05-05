const Traveler = require('./Traveler.js');
const Location = require('./Location.js');
const Trips = require('./Trips.js');

Traveler.hasMany(Location, {
  foreignKey: 'traveler_id',
  onDelete: 'CASCADE'
});

Trips.belongsTo(Traveler, {
  foreignKey: 'traveler_id',
});

Traveler.hasMany(Trips, {
  foreignKey: 'traveler_id',
  onDelete: 'CASCADE'
});

Location.belongsToMany(Traveler, {
  through: 'trips',
  as: 'traveler',
  foreignKey: "traveler_id"
});

const Geocoder = require('node-geocoder')

var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: 'AIzaSyANHmJt78yKqJMrkvj71tMaASDhPmwQ-aY',
  formatter: null
};

var geocoder = Geocoder(options)

function getGeoCodeForCity(city) {
  return geocoder.geocode(city)
  .then(res => {
    if (res && res.length) {
      return {
        latitude: res[0].latitude,
        longitude: res[0].longitude
      }
    }
    return null
  })
}

module.exports = {
  getGeoCodeForCity
}

const Geocoder = require('node-geocoder')

var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: 'AIzaSyBmW6Wb08EqcsfUJD-sciaonrMhISpW6jc',
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

function getCityForGeoCode({ lat, lng }) {
  return geocoder.reverse({ lat, lon: lng })
    .then(res => {
      if (res && res.length) {
        console.log(res[0].city)
        return res[0].city
      }
      return null
    })
}

module.exports = {
  getGeoCodeForCity,
  getCityForGeoCode
}

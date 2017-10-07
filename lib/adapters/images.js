const Flickr = require('flickrapi')

const flickrOptions = {
  api_key: 'c6b2eb5d080467bbe8e506c93fdef08e',
  secret: 'd826ea3e0db6bced'
}
let flickrapi

Flickr.tokenOnly(flickrOptions, function(error, flickr) {
  flickrapi = flickr
});

function getImageUrl(photo) {
  return `https://farm1.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`
}

function getImageFromId (photo_id) {
  return new Promise((resolve, reject) => {
    flickrapi.photos.getInfo({ photo_id }, (err, res) => {
      if (err) {
        return reject(err)
      }
      if (res.photo) {
        const url = `https://farm1.staticflickr.com/${res.photo.server}/${res.photo.id}_${res.photo.secret}_b.jpg`
        return resolve(url)
      }
      return resolve(null)
    })
  })
}

function getImage (text, callback) {
  return new Promise((resolve, reject) => {
    flickrapi.photos.search({ text: text, per_page: 15, tags: 'city,outdoor,cityscape,skyline,architecture,views', sort: 'relevance' }, (err, res) => {
      if (err) reject(err)

      const randomImage = res.photos.photo[Math.floor(Math.random() * res.photos.photo.length)]
      return getImageUrl(randomImage)
    })
  })
}

module.exports = {
  getImage
}

const GoogleImages = require('google-images');

const client = new GoogleImages('31czeogr2sg', 'AIzaSyANHmJt78yKqJMrkvj71tMaASDhPmwQ-aY');

function getImage (keyword) {
  return client.search(keyword)
  	.then(images => {
      if (images && images.length) {
        return images[Math.floor(Math.random() * images.length)].url
      }
      return null
    })
    .catch(console.error)
}

module.exports = {
  getImage
}

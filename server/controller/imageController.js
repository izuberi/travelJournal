var request = require('request');

const imageController = {};

imageController.getImage = (req, res, next) => {
  const location = req.params.location;
  const url = `https://api.unsplash.com/search/photos?query=${location}&client_id=d6-e8UEOYyqVzGpd-WuzHgXtEOBXUU8PGUcyyIKeibc`

  request(url, (err, response, body) => {
    const parsedBody = JSON.parse(body);
    const imageURL = parsedBody.results[0].urls.small;
    res.locals.image = imageURL;
    return next();
  })

}

module.exports = imageController;

// GET 'home' page
module.exports.homelist = (req, res, next) => {
    res.render('locations-list', { title: 'Home'});
}

module.exports.locationInfo = (req, res, next) => {
    res.render('location-info', { title: 'Location info'});
}

module.exports.addReview = (req, res, next) => {
    res.render('index', { title: 'Add Review'});
}

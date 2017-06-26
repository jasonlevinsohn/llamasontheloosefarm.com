// GET 'home' page
module.exports.homelist = (req, res, next) => {
    res.render('index', { title: 'Home'});
}

module.exports.locationInfo = (req, res, next) => {
    res.render('index', { title: 'Location info'});
}

module.exports.addReview = (req, res, next) => {
    res.render('index', { title: 'Add Review'});
}

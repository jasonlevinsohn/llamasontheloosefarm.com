/* GET home page. */
module.exports.about = (req, res, next) => {
  res.render('index', { title: 'About' });
}

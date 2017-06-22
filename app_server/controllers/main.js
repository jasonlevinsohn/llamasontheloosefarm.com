/* GET home page. */
module.exports.index = (req, res, next) => {
  res.render('index', { title: 'Matt' });
}

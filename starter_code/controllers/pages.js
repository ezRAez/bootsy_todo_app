module.exports = {
  home:  home
};

function home(req, res, next) {
  res.render('pages/home');
};

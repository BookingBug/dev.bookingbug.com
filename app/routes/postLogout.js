export default (req, res) => {
  req.session = null;
  res.redirect('/');
};

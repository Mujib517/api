var defaultCtrl = {
  get: function (req, res) {
    res.send("Hello Express")
  },

  health: function (req, res) {
    res.status(200);
    res.json({ status: 'Up' });
  }
};

module.exports = defaultCtrl;
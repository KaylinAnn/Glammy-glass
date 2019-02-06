module.exports = {
  getAllProducts: (req, res) => {
    dbInstance = req.app.get("db");
    dbInstance
      .get_all_products()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
};

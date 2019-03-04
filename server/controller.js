module.exports = {
  getAllProducts: (req, res) => {
    dbInstance = req.app.get("db");
    dbInstance
      .get_all_products()
      .then(products => {
        let reduced = products.reduce((prev, curr) => {
          let {
            productid,
            productname,
            description,
            price,
            categoryid,
            url
          } = curr;

          prev[productid] = prev[productid] || {
            productid,
            productname,
            description,
            price,
            categoryid,
            imgUrl: []
          };
          if (url !== null) {
            prev[productid].imgUrl.push([url]);
          }
          return prev;
        }, {});
        let productArray = Object.keys(reduced).map(key => reduced[key]);
        res.status(200).send(productArray);
      })
      .catch(error => {
        res.status(500).send(error, "bad stuff is happening");
      });
  }
};

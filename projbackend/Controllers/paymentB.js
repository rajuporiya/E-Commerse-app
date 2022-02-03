var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "3hd8998nbwcmg5kz",
  publicKey: "b3pc2gbnj27dn7qf",
  privateKey: "defa5ef90729106cd05dead5f66e29c3"
});


exports.getToken = (req, res) => {

    gateway.clientToken.generate({}, function (err, response) {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(response)
        }
      });
}


exports.processPayment = (req, res) => {

    let nonceFromTheClient = req.body.paymentMethodNonce

    let amountFromTheClient = req.body.amount

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
          if(err)
          {res.status(500).json(error)}
          else{
              res.send(result)
          }
      });
}
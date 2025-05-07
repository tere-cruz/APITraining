const { verify } = require("jsonwebtoken");

//method for authentication middleware
const authenticate = (req, res, next) => {
  //[1] Check if request has authorization token
  if (!req.headers["authorization"])
    return res.status(401).send("Access Denied: No Token Provided");

  //[2]if has token, get the authorization token
  const accessToken = req.headers["authorization"].split(" ")[1];

  verify(accessToken, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      //   console.log(err);
      switch (err.name) {
        case "TokenExpiredError": //[3] verify if token is not expired
          return res.status(400).send("Access Denied: Token expired");
          break;
        case "JsonWebTokenError": //[3] verify if token signature is valid
          return res.status(400).send("Access Denied: Invalid Token Signature");
          break;
        default: //[4] verify if token is valid
          return res.status(401).send("Access Denied: Invalid Token");
          break;
      }
    } else {
      next(); //[5] if token is valid, proceed to next process
    }
  });
};

module.exports = { authenticate };

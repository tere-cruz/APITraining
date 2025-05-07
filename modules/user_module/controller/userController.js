const DB = require("../../../config/database");
const method = {};
const date_and_time = require("date-and-time");
const now = new Date();

method.createUser = (req, res) => {
  const query = `INSERT into users
                    (user_id, email, password, username, contact_no, status)
                    values (?, ?, ?, ?, ?, ?)`;

  const values = [
    req.body.user_id,
    req.body.email,
    req.body.password,
    req.body.username,
    req.body.contact_no,
    req.body.status,
  ];

  DB.localDB.query(query, values, (err, results) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({ message: "Successfully add user" });
    }
  });
};

method.getAllUsers = (req, res) => {
  const query = `SELECT * FROM users`;

  DB.localDB.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get user" });
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
};

method.getUser = (req, res) => {
  //Query
  const query = `SELECT * from users where user_id = ?`;

  //Get request data
  const value = [req.body.user_id];

  DB.localDB.query(query, value, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Failed to get user" });
    } else {
      res.status(200).json(results);
    }
  });
};

method.updateUser = (req, res) => {
  const query = `UPDATE users
                    SET status = ?, updated_at = ?
                    WHERE user_id = ?`;

  var values = [
    req.body.status,
    date_and_time.format(now, "YYYY-MM-DD HH:mm:ss"),
    req.body.user_id,
  ];

  DB.localDB.query(query, values, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Failed to update" });
    } else {
      res.status(200).json({ message: "Updated" });
    }
  });
};

method.deleteUser = (req, res) => {
  try {
    const query = `DELETE from users where user_id = ?`;
    const value = [req.params.user_id];

    DB.localDB.query(query, value, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Failed to delete" });
      } else {
        res.status(200).json({ message: "User deleted" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error occured. Please try again" });
  }
};

module.exports = method;

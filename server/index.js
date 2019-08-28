const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.NODE_PORT || 3000;
const CONN_STRING = process.env.CONN_STRING || "";

const connection = mysql.createConnection(CONN_STRING);
const query = (sql, params) => {
  let p = new Promise((resolve, reject) => {
    if (params) {
      connection.query(sql, params, (err, result) => {
        if(err) return reject(err);

        return resolve(result);
      });
    } else {
      connection.query(sql, (err, result) => {
        if(err) return reject(err);

        return resolve(result);
      });
    }
  });
  return p;
};

const queryOne = (sql, params) => {
  return query(sql, params).then(data => data[0]);
};

app.get("/api/visits", (req, res) => {
  let data = {ip: "1.1.1.1"};
  query(`INSERT INTO visitors SET ?`, data)
    .then(_ => {
      return queryOne(`SELECT COUNT(id) as cnt FROM visitors`);
    })
    .then(data => {
      res.status(200).send({
        message: `Button was clicked ${data.cnt} times`,
        visits: data.cnt
      });
    })
    .catch(err => {
      console.error("An error occurred", err);
      return {};
    });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
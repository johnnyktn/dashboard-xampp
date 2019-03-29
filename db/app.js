const express = require('express')
const app = express()
const port = 3000

// C:/Users/JohnnyTranNguyen-ESS/Projects/dashboard
app.get('/index',function(req,res) {
    res.sendFile('C:/Users/JohnnyTranNguyen-ESS/Projects/dashboard/index.html');
  });

app.get('/monitor',function(req,res) {
  res.sendFile('C:/Users/JohnnyTranNguyen-ESS/Projects/dashboard/monitor.html');
});

app.get('/form',function(req,res) {
  res.sendFile('C:/Users/JohnnyTranNguyen-ESS/Projects/dashboard/form.html');
});

app.get('/dashboard',function(req,res) {
  res.sendFile('C:/Users/JohnnyTranNguyen-ESS/Projects/dashboard/db1.html');
});

app.use("/static", express.static('./static/'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
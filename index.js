const express = require('express');
const app = express();

app.get("/", function(req, res) { // index
  res.send("HELLO WORLD");
})


let port = 8000
app.listen(port, () => {
  console.log("Server Listen in: http://localhost:" + port);             
});

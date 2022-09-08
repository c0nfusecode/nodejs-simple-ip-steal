const express = require('express')
const app = express()
const port = 3000
// /files/sharex/gmod_2022-09-03-201938.png

app.get("/pidoras", (req, res) => {

  var ip = req.connection.remoteAddress.split(":")[3]
  console.log(ip);
  
  res.send(`<html> <body> <img src="https://img.c0nfuse.ru/catjpg.jpg"> </body></html>`);
});

app.listen(port, () => {
  console.log(`Занял порт web-server'a ${port}`)
})
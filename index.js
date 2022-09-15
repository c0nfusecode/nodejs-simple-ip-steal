const express = require('express')
const app = express()
const port = 3000
const fileurl = '/gay.png'


app.get("*/", (req, res) => {

  var ip = req.connection.remoteAddress.split(":")[3]

  if(req.originalUrl == "/gay.png") return res.send(`<html> <body> <h> 1 </h> </body></html>`);
  res.send('вали нахуй от сюда!!!!'); 
  console.log(ip)
});

app.listen(port, () => {
  console.log(`Занял порт web-server'a ${port}`)
})

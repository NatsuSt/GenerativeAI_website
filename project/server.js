const express = require('express')
const path = require('path')

const app = express()


app.use(express.static('./dist/generative-ai/browser'))

app.get('/*', (req, resp) => {
  resp.sendFile('index.html' , {root: '/dist/generative-ai/browser'})
})


app.listen(process.env.PORT || 8080)


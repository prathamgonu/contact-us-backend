import express, { json } from 'express'
import './db/mongoose.js'
import userRouter from './routers/user.js'

const app = express()
const port = process.env.PORT || 3000

app.options('/contact', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

app.use(json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
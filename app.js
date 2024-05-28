import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {res.sendFile('index.html')})

app.listen(5000, () => console.log(`Listening on port: 5000`))
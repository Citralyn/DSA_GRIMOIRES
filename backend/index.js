const express = require('express')
const app = express()
const port = 3003

// enable cross-origin resource sharing so that front-end server an access this api
const cors = require('cors')
app.use(cors({
    //origin: "https://dsa-grimoires.netlify.app"
    origin: "http://localhost:5173",
    credentials: true
}))

// using express.json to deal with json objects from the external APIs
app.use(express.json());

app.post('/submitSpell', (req, res) => {
    console.log(req.body); 
    res.send("YAY"); 
});

// the server is started and listening on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
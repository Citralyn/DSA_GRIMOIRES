const express = require('express')
const app = express()
const port = 3003
const process = require('process');
require('dotenv').config();

const pgp = require('pg-promise')();
const db = pgp(process.env.RENDER_URL)

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


    db.query("SELECT * FROM temp_spells WHERE title = 'a';").then((data) => {
        console.log('DATA:', data);
      })
      .catch((error) => {
        console.log('ERROR:', error)
      })


    db.query("CREATE TABLE IF NOT EXISTS temp_spells (\
spell_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, \
title varchar(255) NOT NULL, \
description TEXT NOT NULL, \
time_complexity varchar(255) NOT NULL, \
time_complexity_description TEXT, \
space_complexity varchar(255) NOT NULL, \
space_complexity_description TEXT, \
image_url varchar(255))"
    ).then(() => {
        console.log("YAY created")
      })
      .catch((error) => {
        console.log('ERROR:', error)
      })

    db.query("INSERT INTO temp_spells (title, description, time_complexity,\
         time_complexity_description, space_complexity,\
          space_complexity_description, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [req.body.title, req.body.description, req.body.timeComp, 
            req.body.timeCompDesc, req.body.spaceComp, req.body.spaceCompDesc,
            req.body.imageURL
        ]
    ).then(() => {
        console.log("YAY inserted")
      })
      .catch((error) => {
        console.log('ERROR:', error)
      })
});

// the server is started and listening on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
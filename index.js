
const express = require('express')

const port = process.env.PORT || 3000;

const app = express();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host :     'db.omupqnzvvucapiylzinx.supabase.co',
    port :     '5432',
    user :     'postgres',
    password : 'KbOZ0wq3793l',
    database : 'postgres',
  }
});

app.get('/', (req, res) => {
  res.send('HI ROBBY, DANIEL, RYAN !!!!!')
})

app.get('/names/list', (req, res) => {
  knex.select('*').from('names').then(data => res.json(data));
})

app.listen(port, () => console.log(`Listening on port ${port}.`))

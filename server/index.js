
const next = require('next')
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const routes = require('../routes');
const User = require('./models/user');
//const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);
//const handle = app.getRequestHandler()

const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const moviesData = require(filePath)

const connectionURL = 'mongodb://127.0.0.1:27017/movies'

//mongoose.connect(connectionURL, { useNewUrlParser: true})
//mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
mongoose.connect(connectionURL, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Database Connected!'))
  .catch(err => console.error(err));

//mongoose.createIndex('expireAt', { expireAfterSeconds: 0 });

app.prepare().then(() => {

  const server = express();
  server.use(compression());
  server.use(bodyParser.json());

  //######################### Start User Insert hardcoded #######################
  const newUser = new User({name:'Joe Doe', email: 'joe.doe@gmail.com', password: '1234567'});
  
  newUser.save((err, createdUser) => {
    if (err) {
      console.log('Error: '+err)
      //return res.status(422).send(err);
    }
    console.log('User: '+createdUser)
    //return res.json(createdUser);
  });

 //######################### End User Insert hardcoded #######################

  server.use('/api/v1/users', userRoutes);

  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData)
  })

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = moviesData.find(m => m.id === id)

    return res.json(movie)
  })

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    moviesData.push(movie)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been succesfuly added!')
    })
  })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movieIndex = moviesData.findIndex(m => m.id === id)
    moviesData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been succesfuly added!')
    })
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = req.body
    const movieIndex = moviesData.findIndex(m => m.id === id)

    moviesData[movieIndex] = movie

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json(movie)
    })
  })

  // server.get('/faq', (req, res) => {
  //   res.send(`
  //     <html>
  //       <head></head>
  //       <body><h1>Hello World!</h1>
  //       </body>
  //     </html>
  //   `)
  // })

  // we are handling all of the request comming to our server
  server.get('*', (req, res) => {
     // next.js is handling requests and providing pages where we are navigating to
     return handle(req, res)
   })

  // server.post('*', (req, res) => {
  //   // next.js is handling requests and providing pages where we are navigating to
  //   return handle(req, res)
  // })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})



// CRUD create read update delete

/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    })
})*/




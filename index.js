// express
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'))
  require('dotenv').config()
}

// dialogflow
const dialogflow = require('@google-cloud/dialogflow')
const uuid = require('uuid')

async function queryChatbot(message) {
  const sessionId = uuid.v4();

  const sessionClient = new dialogflow.SessionsClient({
    keyFilename: path.join(__dirname, 'google-credentials.json')
  });
  
  const sessionPath = sessionClient.projectAgentSessionPath(
    process.env.GOOGLE_PROJECTID,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'es-MX',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  return result.fulfillmentText
}

// socket.io
const { Server } = require('socket.io')

io = new Server(server)

io.on('connection', socket => {
  io.emit('chat message', process.env.CONNECTION_MESSAGE)

  socket.on('chat message', message => {
    queryChatbot(message).then(response => {
      io.emit('chat message', response)
    })
  })
})

server.listen(process.env.PORT || 3000, () => console.log(`listening on port ${process.env.PORT}`))
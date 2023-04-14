const express = require('express');
const mongoose = require('mongoose');
const { database } = require('./config');
const routes = require('./routes');

const app = express();

// Connect to the database
mongoose.connect(database.dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully!');
});

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Set server port and listen for requests
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`Server is running on ${port}`);
});


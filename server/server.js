const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://izuberi:zuberi@cluster0.edrqn.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const imageRouter = require('./routes/imageRouter.js');
const travelRouter = require('./routes/travelRouter.js');

app.use('/images',imageRouter);
app.use('/travel',travelRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})
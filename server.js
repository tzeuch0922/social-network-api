const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect('mongodb://localhost/social-network-api',
{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
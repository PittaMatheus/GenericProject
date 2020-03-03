const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://matheus:matheusSenha@betaversion-cabyo.mongodb.net/beta?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// aceita formatos json

app.use(cors());
app.use(express.json());
app.use(routes);


// porta de execução da aplicação
app.listen(3333);

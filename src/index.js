import express from 'express';
import { home } from './pages/home.js';
import { about } from './pages/about.js';
import { register } from './pages/register.js';
import { notFound } from './pages/notFound.js';


const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(home()));
app.get('/about', (req, res) => res.send(about()));
app.get('/register', (req, res) => res.send(register()));
app.get('/*error', (req, res) => res.send(notFound()));

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`)
});
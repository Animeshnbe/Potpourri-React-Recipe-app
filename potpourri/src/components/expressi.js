import 'dotenv/config';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.send('Hello world');
});

app.post('/users', (req, res) => {
    return res.send('Hello world');
});

app.put('/users/:userId', (req, res) => {
    return res.send(`Hello ${req.params.userId}`);
});

let users = {
    1: {
        id: '1',
        username: 'Robin',
    },
    2: {
        id: '2',
        username: 'Animesh',
    },
};

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(`Hello ${users[req.params.userId]}`);
});

app.delete('/', (req, res) => {
    return res.send('Hello world');
});

app.listen(process.env.PORT, () => 
    console.log(`Example app listening to port ${process.env.PORT}!`),
);

import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

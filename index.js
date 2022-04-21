const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from my  personal smarty node auto restart')
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0111111111' },
    { id: 2, name: 'Rubina', email: 'Rubina@gmail.com', phone: '056461' },
    { id: 3, name: 'Ravina', email: 'Ravina@gmail.com', phone: '01111789891' },
    { id: 4, name: 'Monali', email: 'Monali@gmail.com', phone: '0164561' },
    { id: 5, name: 'Soniya', email: 'soniya@gmail.com', phone: '01174123' },
    { id: 6, name: 'Karian', email: 'Karian@gmail.com', phone: '0117898791' },
    { id: 7, name: 'Monalisa', email: 'Monalisa@gmail.com', phone: '011789456123' }
]


app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})






app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});

app.get('fruits/mango/fazlw', (req, res) => {
    res.send('sour sour fazle mango')
})


app.listen(port, () => {
    console.log('Listening to port', port)
})
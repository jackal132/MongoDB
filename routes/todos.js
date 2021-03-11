const router = require('express').Router();
const Todo = require('../model/todo');

router.get('/', (req, res) => {
    Todo.findAll()
        .then((todos) => {
            if(!todos.length) return res.status(404).send({ err: 'Todo not found'});
            res.send(`find success : ${todos}`);
        })
        .catch(e => res.status(500).send(e));
});

router.get('/todoid/:todoid', (req, res) => {
    Todo.findOneByTodoid(req.params.todoid)
        .then((todo) => {
            if(!todo) return res.status(404).send({ err : 'Todo not found'})
            res.send(`findOne success ${todo}`)
        })
        .catch(e => res.status(500).send(e));
});

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(todo => res.send(todo))
        .catch(e => res.status(500).send(e));
});

router.put('/todoid/:todiid', (req, res) => {
    Todo.updateByTodoid(req.params.todoid, req.body)
        .then(todo => res.send(todo))
        .catch(e => res.status(500).send(e));
});

router.delete('/todoid/:todoid', (req, res) => {
    Todo.deleteByTodoid(req.params.todoid)
        .then(() => res.sendStatus(200))
        .catch(e => res.status(500).send(e));
});

module.exports = router;
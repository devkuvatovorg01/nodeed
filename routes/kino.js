const express = require('express');
const Kino = require('../model/Kino');
const router = express.Router();

/* GET home page. */
router.get('/kino', function(req, res, next) {
  res.render('kino', { title: 'Express' });
});

router.post('/kino', function(req, res, next) {
    const kino = new Kino({
        title: '',
        author: 'Dominik4',
        published: true,
        comment : [
            {message: 'zo`r4'}
        ],
        meta: {
            votes: 400,
            listen: 4
        }
    });

    kino.save((err, data) => {
        if(err) 
            console.log(err);
        res.json(data)
    })
});

// update 1
// router.put('/update', (req, res) => {
//     Kino.update({ published: true},  {published: false}, (err, data) => {
//         res.json(data)
//     })
// })
// // titlni ham o`zgartirish
// router.put('/update1', (req, res) => {
//     Kino.update({ published: false},  {published: true, title: 'Alan' }, (err, data) => {
//         res.json(data)
//     })
// })

// router.put('/update2', (req, res) => {
//     Kino.update({ published: false},  {published: true }, {multi: true}, (err, data) => {
//         res.json(data)
//     })
// })

// router.put('/update2', (req, res) => {

//     Kino.findByIdAndUpdate("6120e377d0005c13a8859fff", {title: 'Aziz', author: 'Fazliddin'}, (err, data) => {
//         res.json(data)
//     })
// })

// Remove :

// findOne()
// FindByid()
// FindOneAndRemove()
// Remove()

// id orqali topib o`chirish
// router.delete('/remove', (req, res) => {
//     Kino.findById('6120e377d0005c13a8859fff', (err, data) =>  {
//         data.remove((err, data) => {
//             res.json(data)
//         })
//     })
// })

// router.delete('/remove', (req, res) => {
//     Kino.findOneAndDelete({published: false} ,(err, data) =>  {
//         data.remove((err, data) => {
//             res.json(data)
//         })
//     })
// })

router.delete('/remove', (req, res) => {
    Kino.find({}, (err, data) => {
        data.remove((err, data) => {
            res.json(data)
        })
    })
})


module.exports = router;

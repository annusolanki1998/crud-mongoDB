const express = require("express");
const alien = require("../models/alien");
const router = express.Router();
const Alien = require("../models/alien");

router.get('/read', async(req,res) => {
    try{
            const aliens = await Alien.find()
            res.json(aliens)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/read/:id', async(req,res) => {
    try{
            const alien = await Alien.findById(req.params.id)
            res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/create', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    })

    try{
        const a1 =  await Alien.save()
        res.json(a1)
    }catch(err){
        res.send("error")
    }

})

router.patch('/partiallyUpdate/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a2 = await alien.save()
        res.json(a2) 
    }catch(err){
        res.status(400).json({
            error: err
        })
    }
})

router.delete('/delete/:id',async (req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        const a3 = alien.deleteone(req.params.id)
        res.json(a3)
    }catch(err){
        res.status(400).send(err)
            
        

    }
})







module.exports = router;
var express = require('express');
var router = express.Router();

const {Note} = require('../models')

// -------------------------- ASYNC HANDLER FUNCTION------------------------------
function asyncHandler(cb){
  return async(req,res,next)=>{
    try{
      await cb(req,res, next);
    }catch(err){
      next(err)
    }
  };
}


/* GET home page. */
router.get('/notes',asyncHandler(async(req,res)=>{
  const notes = await Note.findAll()
  // console.log(notes)
  res.json(notes)
}) );

router.get('/notes/:id', asyncHandler(async(req,res)=>{
  const id = req.params.id

  const note = await Note.findByPk(id)

  res.json(note)
}))

/* POST to create new note*/
router.post('/notes',asyncHandler(async(req,res)=>{
  const note = await Note.create({
    title:req.body.title,
    category:req.body.category,
    content:req.body.content
  })
  res.json(note)
}))

router.delete('/notes/:id',asyncHandler(async(req,res)=>{
  await Note.destroy({
    where : {
      id : req.params.id
    },
    force: true
  })
  res.status(204).end()
}))

router.put('/notes/:id',asyncHandler(async(req,res)=>{
  await Note.update({
    title:req.body.title,
    category:req.body.category,
    content:req.body.content
  },
  {
    where:{
    id : req.params.id}
  })
  res.status(204).end()

}))

module.exports = router;

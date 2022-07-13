const Dream = require("../models/dreams")

const getAll = (req, res) => {
    Dream.find({}).then(dream=>{
     res.json(dream)
})
};

const findById = (req, res) => {
  Dream.find({id:req.params.id}).then(id => {
    res.json(dream)
  })
}

const create = (req, res) => {
    Dream.create(req.body)
    .then((dream) => {
      res.json(dream);
    });
  };

const update = (req, res) => {
  Dream.findByIdAndUpdate(req.params.dream, req.body).then(newDream => res.json(newDream));
}

const deleteOne = (req, res) => {
  Dream.findByIdAndDelete(req.params.dream).then(newDream => {
      res.json(newDream);
  });
}
  
module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteOne,
}
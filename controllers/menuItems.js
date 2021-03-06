var Item = require('../models/MenuItem.js')

module.exports = {

  index: function(req, res){
    Item.find({}, function(err, item){
      res.json(item)
    })
  },

  create: function(req, res){
    Item.create(req.body, function(err, item){
      if(err) {res.json({message: "A problem has occured with your cooking."})}
      else res.json({message: "New item was created for menu..", item: item})
    })
  },

  show: function(req, res){
    Item.findById(req.params.id, function(err, item){
      res.json(item)
    })
  },

  update: function(req, res){
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, item){
      res.json({message: "Your recipe was updated!", item: item})
    })
  },

  delete: function(req, res){
    Item.findByIdAndRemove(req.params.id, function(err){
      if(err) res.json({message: "Couldnt remove Item from Menu."})
      else res.json({message: "Item removed from Menu"})
    })
  },

  addCondiments: function(req, res){
    Item.findById(req.params.id, function(err, item){
      item.condiments.push(req.body.condiment)
      item.save(function(err, item){
        res.json({message: "Added condiment.", item: item})
      })
    })
  }

}

addCondiments: function(req,res){
  Food.findById(req.params.id, function (err, condiment){
    food.condiments.push(rq.body.condiment)
    condiments.save(function(err, condiment){
      res.json({message: "Troy's controller has shit on me", condiment:condiment})
    })
  })
}

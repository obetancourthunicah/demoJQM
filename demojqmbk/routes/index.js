var express = require('express');
var router = express.Router();

function indexFactory(db){
  var dummyData = [
    {"title":"Hola", "uri":"not"},
    {"title":"Hola 2", "uri":"not 2"}
  ];

  var titlesCollection = db.collection('titles');
  /* GET home page. */
  router.get('/', function(req, res, next) {
    titlesCollection.find({}).toArray(function(err, docs){
      res.status(200).json(docs);
    });//end to array
  });

  router.post('/new', function(req,res,next){
    var doc = req.body;
    titlesCollection.insert(doc, function(err, rslt){
      if(err){
        console.log(err);
        res.status(400).json({"error":"Documento no se salvo"});;
      }else{
        res.status(200).json({"status":"ok","rslt":rslt});
      }
    });
  }); // end post new
  return router;
} // end indexFactory


module.exports = indexFactory;

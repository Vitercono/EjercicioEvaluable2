var express = require('express');
var router = express.Router();
var data = require("../data/dataprovider");

/* Pagina galeria */
router.get('/', function(req, res, next) {
  const posts = data.getAllPosts();
  const categorias = data.getCategories();
  res.render('galeria', {title:"Galeria", posts:posts, categorias:categorias});
});

router.get('/entrada/:id', function(req,res){
  /* RECOGER EL PRODUCTO CON EL ID Y ENVIARLO con req.params.id --> producto = data.getElementById(req.params.id)*/
  const id = req.params.id;
  const post = data.getPostById(req.params.id);
  const categorias = data.getCategories();
  res.render('individual',{title:"Publicación", post:post, categorias:categorias, indice:id});
});

module.exports = router;
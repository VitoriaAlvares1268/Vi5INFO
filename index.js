const express = require ("express")
const app = express ()
var bodyParser = require ('body-parser')
var cookieParser = require ('cookie-parser')
var path = require ('path')
var UsuarioModel = require("./model/usuario")

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', "ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get('/addi',function(req,res){
    res.render('adiciona.ejs', {})
}) 
app.post('/addi',function(req,res){
    console.log("Nome: " + req.body.txtNome + "  Email: "+ req.body.txtEmail)
}) 

app.get('/',function(req,res){
    res.render('index.ejs', {})
}) 

//Listar todos os dados
app.get('/l',function(req,res){
    res.render('list.ejs')
}) 

//listar os dados de acordo com filtro
app.post('/',function(req,res){
    res.render('list.ejs')
})

// Abrir tela add
app.get('/add',function(req,res){
    res.render('adiciona.ejs')
})
// Salvando dados adicionados no banco  de dados
app.post('/add',function(req,res){
   let usuario = new UsuarioModel({
       nome:req.body.txtNome,
       email:req.body.txtEmail,
       senha:req.body.txtSenha,
       foto:req.body.txtFoto,  

   })
   usuario.save(function(err) {
       if(err){
    console.log(err)

       }else {
    res.redirect("/");
       }
       
   })
})

// Abrir tela add
app.get('/edit',function(req,res){
    res.render('edit.ejs')
})
// Salvar os dados editados no banco  de dados
app.post('/edit',function(req,res){
    res.render('edit.ejs')
})
app.get('/del]', function(req,res){
    res.render('list.ejs')
})

app.listen(3000 , function(){
        console.log("Conexão Inicializada!")
});
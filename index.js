const express = require ("express")
const app = express ()
var bodyParser = require ('body-parser')
var cookieParser = require ('cookie-parser')
var path = require ('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', "ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get('/i',function(req,res){
    res.render('index.ejs', {})
}) 
app.get('/usuarios',function(req,res){
        res.render('usuarios.ejs',{usuarios:[
            {nome:'Vitória', email:'Vihlopes@gmail.com' },
            {nome:'Mariana', email:'Marigomes@gmail.com' },
            {nome:'Eduarda', email:'Eduardafarias@gmail.com' },
            {nome:'Luciana', email:'Lucianaluiz@gmail.com' }

        ]})
}) 

//Listar todos os dados
app.get('/',function(req,res){
    res.render('list.ejs')
}) 

//listar os dados de acordo com filtro
app.post('/',function(req,res){
    res.render('list.ejs')
})

// Abrir tela add
app.get('/add',function(req,res){
    res.render('add.ejs')
})
// Salvvardados adicionados no banco  de dados
app.post('/add',function(req,res){
    res.render('add.ejs')
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
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

//Variables de rutas
var indexRouter = require('./routes/index');

//Inicializaciones
var app = express();
require('./database');


//Configuracio del mor=tor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, '/public')));

//rutas
app.use('/', indexRouter);//Mi ruta inicial

//Funcion para manejo de errores 404
app.use(function(req, res, next){
    next(createError(404));
});

//manejo de errores
app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //renderizando una pagina de errores
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
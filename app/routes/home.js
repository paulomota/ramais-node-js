module.exports = function(app){
	app.get('/', function(req, res){

		var connection = app.infra.connectionFactory();
        var ramaisDAO = new app.infra.RamaisDAO(connection);

      	ramaisDAO.lista(function(erros,resultados){
            res.render('home/index',{ramais:resultados});
       	});

        connection.end();

	});
};
